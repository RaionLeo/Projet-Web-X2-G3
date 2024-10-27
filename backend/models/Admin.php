<?php
session_start();
class Admin
{
    private $conn;
    private $table = 'Admin';

    public $adminId;
    public $adminSecret;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function create()
    {
        $hashed_password = password_hash($this->adminSecret, PASSWORD_DEFAULT);
        $query = "SELECT Write_To_Admin(:adminid, :adminsecret)";
        $stmt = $this->conn->prepare($query);

        $this->adminId = htmlspecialchars(strip_tags($this->adminId));
        $this->adminSecret = htmlspecialchars(strip_tags($this->adminSecret));


        $stmt->bindParam(':adminid', $this->adminId);
        $stmt->bindParam(':adminsecret', $hashed_password);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function Read($adminId)
    {
        $query = "SELECT * FROM Get_Admin(:adminId) LIMIT 1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":adminId", $adminId);
        $stmt->execute();
        return $stmt;
    }
}
?>