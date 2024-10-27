<?php
session_start();
class Client
{
    private $conn;
    private $table = 'Client';

    public $clientId;
    public $clientName;
    public $clientEmail;
    public $clientTel;
    public $fidelityPoints;
    public $registryDate;
    public $accountState;
    public $clientSecret;
    public $clientLocation;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function create()
    {
        $hashed_password = password_hash($this->clientSecret, PASSWORD_DEFAULT);
        $query = "SELECT Write_To_Client(:clientid, :clientname, :clientemail, :clienttel, :fidelitypoints, :registrydate, :accountstate, :clientsecret, :clientlocation)";
        $stmt = $this->conn->prepare($query);

        $this->clientName = htmlspecialchars(strip_tags($this->clientName));
        $this->clientEmail = htmlspecialchars(strip_tags($this->clientEmail));
        $this->clientTel = htmlspecialchars(strip_tags($this->clientTel));
        $this->clientSecret = htmlspecialchars(strip_tags($this->clientSecret));
        $this->clientLocation = htmlspecialchars(strip_tags($this->clientLocation));

        $stmt->bindParam(':clientid', $this->clientId);
        $stmt->bindParam(':clientname', $this->clientName);
        $stmt->bindParam(':clientemail', $this->clientEmail);
        $stmt->bindParam(':clienttel', $this->clientTel);
        $stmt->bindParam(':fidelitypoints', $this->fidelityPoints);
        $stmt->bindParam(':registrydate', $this->registryDate);
        $stmt->bindParam(':accountstate', $this->accountState);
        $stmt->bindParam(':clientsecret', $hashed_password);
        $stmt->bindParam(':clientlocation', $this->clientLocation);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function Read($email)
    {
        $query = "SELECT * FROM Get_Client(:email) LIMIT 1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":email", $email);
        $stmt->execute();
        return $stmt;
    }

    public function GetPoints($clientId) {
        $query = "SELECT * FROM Get_Fidelity_Points(:clientid)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":clientid", $clientId);
        $stmt->execute();
        $clientpts = $stmt->fetch(PDO::FETCH_ASSOC);
        return $clientpts;
    }

    public function UpdatePoints() {
        $query = "SELECT Change_Fidelity_Points(:clientid, :fidelitypts)";
        $stmt = $this->conn->prepare($query);
        
        $stmt->bindParam(":clientid", $this->clientId);
        $stmt->bindParam(":fidelitypts", $this->fidelityPoints);
        
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }
}
session_destroy();
?>