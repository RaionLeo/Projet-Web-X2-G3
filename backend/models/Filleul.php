<?php

 class Filleul {
    private $conn;

    public $filleulId;
    public $parrainId;


    public function __construct($db) {
        $this->conn = $db;
    }

    public function CreateFilleul() {
        $query = "SELECT Write_To_Filleul(:filleulid, :parrainid)";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":filleulid", $this->filleulId);
        $stmt->bindParam(":parrainid", $this->parrainId);

        if ($stmt->execute()) {
            return true;
        }
        else {
            return false;
        }
    }

    public function GetParrainFilleul($filleulId) {
        $query = "SELECT * FROM Check_Filleul(:filleulId);";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":filleulId", $filleulId);
        $stmt->execute();
        $parrain = $stmt->fetch(PDO::FETCH_ASSOC);
        return $parrain;
    } 
 }
?>