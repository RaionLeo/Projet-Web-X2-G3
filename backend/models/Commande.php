<?php

 class Commande {
    private $conn;

    public $commandeId;      
    public $clientId;       
    public $commandeTotal;  
    public $commandePoints; 
    public $commandeDate;    
    public $commandeConfirm;


    public function __construct($db) {
        $this->conn = $db;
    }

    public function CreateCommande () {
        $query = "SELECT Write_To_Commande(:commandeid, :clientid, :commandetotal, :commandepoints, :commandedate, :commandeconfirm)";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":commandeid", $this->commandeId);
        $stmt->bindParam(":clientid", $this->clientId);
        $stmt->bindParam(":commandetotal", $this->commandeTotal);
        $stmt->bindParam(":commandepoints", $this->commandePoints);
        $stmt->bindParam(":commandedate", $this->commandeDate);
        $stmt->bindParam(":commandeconfirm", $this->commandeConfirm );

        if ($stmt->execute()) {
            return true;
        }
        else {
            return false;
        }
    }

    public function CommandHistory ($clientId) { //add allcommandtoday, update commande state
        $query = "SELECT * FROM Get_Command_History(:clientid);";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":clientid", $clientId);
        $stmt->execute();

        $history = [];

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            $history[] = $row;
        }
        return $history;
    }

    public function getCommandes($currentdate)
    {
        $query = "SELECT * FROM Get_Commandes_Unconfirmed(:currentdate);";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":currentdate", $currentdate);
        $stmt->execute();
        
        $commandes = [];
    
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $commandes[] = $row;
        }

        return $commandes;
    }

    public function Update() {
        $query = "SELECT Change_Commande_State(:commandeconfirm, :commandeid)";
        $stmt = $this->conn->prepare($query);
        
        $stmt->bindParam(":commandeconfirm", $this->commandeConfirm);
        $stmt->bindParam(":commandeid", $this->commandeId);
        
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }
 }
?>