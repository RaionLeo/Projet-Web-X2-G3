<?php

include_once '../models/Classement.php';

    class ClassementController {
        private $db;
        private $classement;
        private $requestMethod;

        public function __construct($db, $requestMethod) {
            $this->db = $db;
            $this->requestMethod = $requestMethod;
            $this->classement = new Classement($this->db);
        }

        public function getClientClassement () {
            $classement = $this->classement->getClassement();

            if (count($classement) > 0) {
                echo json_encode([
                    'status' => 'success',
                    'classement' => $classement
                ]);
            } else {
                echo json_encode([
                    'status' => 'error',
                    'message' => 'No Classement'
                ]);
            }
        }
    }

?>