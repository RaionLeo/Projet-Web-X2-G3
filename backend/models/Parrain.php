<?php

 class Parrain {
    private $conn;

    public $parrainId;
    public $parrainCode;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function CreateParrain() {
        $query = "SELECT Write_To_Parrain(:parrainid, :parraincode)";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":parrainid", $this->parrainId);
        $stmt->bindParam(":parraincode", $this->parrainCode);

        if ($stmt->execute()) {
            return true;
        }
        else {
            return false;
        }
    }

    public function GetParrainId($parrainCode) {
        $query = "SELECT * FROM Find_Parrain(:parrainCode);";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":parrainCode", $parrainCode);
        $stmt->execute();
        $id = $stmt->fetch(PDO::FETCH_ASSOC);
        return $id;
    } 

    public function GetParrainCode($parrainId) {
        $query = "SELECT * FROM Find_Parrain_Code(:parrainId);";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":parrainId", $parrainId);
        $stmt->execute();
        $code = $stmt->fetch(PDO::FETCH_ASSOC);
        return $code;
    } 
 }

?>