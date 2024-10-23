<?php

    include_once '../models/Filleul.php';

    class FilleulController {
        private $conn;

        private $filleul;
        private $requestMethod;

        public function __construct($db, $requestMethod) {
            $this->db = $db;
            $this->requestMethod = $requestMethod;
            $this->filleul = new Filleul($db);
        }

        public function RegisterFilleul () {
            $data = json_decode(file_get_contents('php://input'));

            if($data) {
                $this->filleul->filleulId = $data->filleulId;
                $this->filleul->parrainId = $data->parrainId;
            }
            else{echo "No filleul data recieved";}

            if ($this->filleul->CreateFilleul()){
                $response = [
                    'status'=> 201,
                    'message'=> 'Filleul registered successfully'
                ];
            } else {
                $response = [
                    'status' => 500,
                    'message' => 'Filleul registration failed'
                ];
            }

            echo json_encode($response);
        }

        public function GetParrainOfFilleul($filleulId) {
            $parrains = $this->filleul->GetParrainFilleul($filleulId);

            if ($parrains > 0) {
                echo json_encode([
                    'status' => 'success',
                    'parrain' => $parrains
                ]);
            } else {
                echo json_encode([
                    'status' => 'error',
                    'message' => 'No parrains'
                ]);
            }
        }
    }