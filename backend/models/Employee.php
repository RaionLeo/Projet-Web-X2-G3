<?php
session_start();
class Employee
{
    private $conn;
    private $table = 'Employee';

    public $employeeId;
    public $employeeName;
    public $employeeEmail;
    public $registryDate;
    public $employeeSecret;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function create()
    {
        $hashed_password = password_hash($this->employeeSecret, PASSWORD_DEFAULT);
        $query = "SELECT Write_To_Employee(:employeeid, :employeename, :employeeemail, :registrydate, :employeesecret)";
        $stmt = $this->conn->prepare($query);

        $this->employeeName = htmlspecialchars(strip_tags($this->employeeName));
        $this->employeeEmail = htmlspecialchars(strip_tags($this->employeeEmail));
        $this->employeeSecret = htmlspecialchars(strip_tags($this->employeeSecret));


        $stmt->bindParam(':employeeid', $this->employeeId);
        $stmt->bindParam(':employeename', $this->employeeName);
        $stmt->bindParam(':employeeemail', $this->employeeEmail);
        $stmt->bindParam(':registrydate', $this->registryDate);
        $stmt->bindParam(':employeesecret', $hashed_password);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function Read_One($email)
    {
        $query = "SELECT * FROM Get_Employee(:email) LIMIT 1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":email", $email);
        $stmt->execute();
        return $stmt;
    }

    public function Read_All()
    {
        $query = "SELECT * FROM Get_All_Employees()";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        $employees = [];

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            $employees[] = $row;
        }
        return $employees;
    }

    public function Delete($employeeId) {
        $query = "SELECT Delete_Employee(:employeeId);";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":employeeId", $employeeId);
        return $stmt->execute();
    }
}
?>