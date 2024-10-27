<?php
session_start();
class Gerant
{
    private $conn;
    private $table = 'Gerant';

    public $gerantId;
    public $gerantSecret;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function create()
    {
        $hashed_password = password_hash($this->gerantSecret, PASSWORD_DEFAULT);
        $query = "SELECT Write_To_Gerant(:gerantid, :gerantsecret)";
        $stmt = $this->conn->prepare($query);

        $this->gerantId = htmlspecialchars(strip_tags($this->gerantId));
        $this->gerantSecret = htmlspecialchars(strip_tags($this->gerantSecret));


        $stmt->bindParam(':gerantid', $this->gerantId);
        $stmt->bindParam(':gerantsecret', $hashed_password);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function Read($gerantId)
    {
        $query = "SELECT * FROM Get_Gerant(:gerantId) LIMIT 1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":gerantId", $gerantId);
        $stmt->execute();
        return $stmt;
    }
}
?>