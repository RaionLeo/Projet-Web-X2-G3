<?php
    include_once '../models/Gerant.php';

    class GerantController {
        private $db;
        private $gerant;
        private $requestMethod;

        public function __construct($db, $requestMethod) {
            $this->db = $db;
            $this->requestMethod = $requestMethod;
            $this->gerant = new Gerant($this->db);
        }

        public function registerGerant() {
            $data = json_decode(file_get_contents('php://input'));

            if($data) {
                $this->gerant->gerantId = $data->gerantId;
                $this->gerant->gerantSecret = $data->gerantSecret;
            }
            else{echo "No gerant data recieved";}

            if ($this->gerant->create()){
                $response = [
                    'status'=> 201,
                    'message'=> 'gerant registered successfully'
                ];
            } else {
                $response = [
                    'status' => 500,
                    'message' => 'gerant registration failed'
                ];
            }

            echo json_encode($response);
        }

        public function getGerant($id, $password) {
            $result = $this->gerant->Read($id);
            $gerant = $result->fetch(PDO::FETCH_ASSOC);
            
            if ($gerant){
                if (password_verify($password, $gerant['gerantsecret'])) {
                    $_SESSION['gerant_id'] = $gerant['gerantid'];

                    echo json_encode([
                        'status'=> 'Success',
                        'message'=> 'Login Successful',
                        'gerant_id' => $gerant['gerantid'],
                    ]);
                } else {
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'Invalid credentials'
                    ]);
                }
            }else{
                echo json_encode([
                    'status' => 'error',
                    'message' => 'gerant not found'
                ]);
            }
        }
    }
?>