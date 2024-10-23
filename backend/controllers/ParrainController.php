<?php

    include_once '../models/Parrain.php';

    class ParrainController {
        private $db;

        private $parrain;
        private $requestMethod;

        public function __construct($db, $requestMethod) {
            $this->db = $db;
            $this->requestMethod = $requestMethod;
            $this->parrain = new Parrain($db);
        }

        public function RegisterParrain () {
            $data = json_decode(file_get_contents('php://input'));

            if($data) {
                $this->parrain->parrainId = $data->parrainId;
                $this->parrain->parrainCode = $data->parrainCode;
            }
            else{echo "No parrain data recieved";}

            if ($this->parrain->CreateParrain()){
                $response = [
                    'status'=> 201,
                    'message'=> 'Parrain registered successfully'
                ];
            } else {
                $response = [
                    'status' => 500,
                    'message' => 'Parrain registration failed'
                ];
            }

            echo json_encode($response);
        }

        public function GetThatParrainId($parrainCode) {
            $parrains = $this->parrain->GetParrainId($parrainCode);

            if ($parrains > 0) {
                echo json_encode([
                    'status' => 'success',
                    'parrain' => $parrains
                ]);
            } else {
                echo json_encode([
                    'status' => 'error',
                    'message' => 'No Parrains'
                ]);
            }
        }
        public function GetThatParrainCode($parrainId) {
            $parrains = $this->parrain->GetParrainCode($parrainId);

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

?>