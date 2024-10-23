<?php

    class Classement {
        private $conn;

        public $clientname;
        public $TotalCommande;

        public function __construct($db) {
            $this->conn = $db;
        }

        public function getClassement () {
            $query = 'SELECT * FROM Get_Classement() LIMIT 10';
            $stmt = $this->conn->prepare($query);
            $stmt->execute();

            $classement = [];

            while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                $classement[] = $row;
            }
            return $classement;
        }
    }

?>