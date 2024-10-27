<?php
    class Reclamation
    {
        private $conn;

        public $reclamationid;
        public $commandeid;
        public $reclamationdate;
        public $reclamationdescription;
        public $responseid;
        public $employeeid;
        public $response;
        public $responsevalid;
        


        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function Create() {
            $query = "SELECT Write_To_Reclamation(:reclamationid, :commandeid, :reclamationdate, :reclamationdescription)";
            $stmt = $this->conn->prepare($query);
    
            $this->reclamationdescription = htmlspecialchars(strip_tags($this->reclamationdescription));
    
            $stmt->bindParam(':reclamationid', $this->reclamationid);
            $stmt->bindParam(':commandeid', $this->commandeid);
            $stmt->bindParam(':reclamationdate', $this->reclamationdate);
            $stmt->bindParam(':reclamationdescription', $this->reclamationdescription);
    
            return $stmt->execute();
        }

        public function CreateResp() {
            $query = "SELECT Write_To_Resp(:responseid, :reclamationid, :employeeid, :response, :responsevalid)";
            $stmt = $this->conn->prepare($query);
    
            $this->response = htmlspecialchars(strip_tags($this->response));
    
            $stmt->bindParam(':responseid', $this->responseid);
            $stmt->bindParam(':reclamationid', $this->reclamationid);
            $stmt->bindParam(':employeeid', $this->employeeid);
            $stmt->bindParam(':response', $this->response);
            $stmt->bindParam(':responsevalid', $this->responsevalid);
    
            return $stmt->execute();
        }

        public function Read() {
            $query = "SELECT * FROM Get_Reclamations()";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
    
            $reclamation = [];
    
            while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                $reclamation[] = $row;
            }
            return $reclamation;
        }

        public function ReadResp() {
            $query = "SELECT * FROM Get_Reclamations_Resp()";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
    
            $reclamation = [];
    
            while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                $reclamation[] = $row;
            }
            return $reclamation;
        }

        public function UpdateResp() {
            $query = "SELECT Change_Reclamation_Resp_State(:responsevalid, :responseid)";
            $stmt = $this->conn->prepare($query);
            
            $stmt->bindParam(":responsevalid", $this->responsevalid);
            $stmt->bindParam(":responseid", $this->responseid);
            
            if ($stmt->execute()) {
                return true;
            } else {
                return false;
            }
        }
    }
?>