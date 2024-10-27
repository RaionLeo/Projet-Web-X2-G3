<?php
    include_once '../models/Client.php';

    class ClientController {
        private $db;
        private $client;
        private $requestMethod;

        public function __construct($db, $requestMethod) {
            $this->db = $db;
            $this->requestMethod = $requestMethod;
            $this->client = new Client($this->db);
        }

        public function registerUser() {
            $data = json_decode(file_get_contents('php://input'));

            if($data) {
                $this->client->clientId = $data->clientId;
                $this->client->clientName = $data->clientName;
                $this->client->clientEmail = $data->clientEmail;
                $this->client->clientTel = $data->clientTel;
                $this->client->fidelityPoints = $data->fidelityPoints;
                $this->client->registryDate = $data->registryDate;
                $this->client->accountState = $data->accountState;
                $this->client->clientSecret = $data->clientSecret;
                $this->client->clientLocation = $data->clientLocation;
            }
            else{echo "No client data recieved";}

            if ($this->client->create()){
                $response = [
                    'status'=> 201,
                    'message'=> 'Client registered successfully'
                ];
            } else {
                $response = [
                    'status' => 500,
                    'message' => 'Client registration failed'
                ];
            }

            echo json_encode($response);
        }

        public function getUser($email, $password) {
            $result = $this->client->Read($email);
            $client = $result->fetch(PDO::FETCH_ASSOC);
            
            if ($client){
                if (password_verify($password, $client['clientsecret'])) {
                    $_SESSION['client_id'] = $client['clientid'];
                    $_SESSION['client_name'] = $client['clientname'];

                    echo json_encode([
                        'status'=> 'Success',
                        'message'=> 'Login Successful',
                        'client_id' => $client['clientid'],
                        'client_name'=> $client['clientname']
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
                    'message' => 'User not found'
                ]);
            }
        }

        public function getUserPts($clientId) {
            $points = $this->client->GetPoints($clientId);

            if ($points > 0) {
                echo json_encode([
                    'status' => 'success',
                    'points' => $points
                ]);
            } else {
                echo json_encode([
                    'status' => 'error',
                    'message' => 'No points'
                ]);
            }
        }

        public function changeUserPts() {
            $data = json_decode(file_get_contents('php://input'));

            if($data) {
                $this->client->clientId = $data->clientId;
                $this->client->fidelityPoints = $data->fidelityPoints;
            }
            else{echo "No client points data changed";}

            if ($this->client->UpdatePoints()){
                $response = [
                    'status'=> 201,
                    'message'=> 'Client points changed successfully'
                ];
            } else {
                $response = [
                    'status' => 500,
                    'message' => 'Client points changing failed'
                ];
            }

            echo json_encode($response);
        }
    }
?>