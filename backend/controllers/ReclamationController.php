<?php
    include_once '../models/Reclamation.php';

    class ReclamationController {
        private $db;
        private $reclamation;
        private $requestMethod;

        public function __construct($db, $requestMethod) {
            $this->db = $db;
            $this->requestMethod = $requestMethod;
            $this->reclamation = new Reclamation($this->db);
        }

        public function CreateRec() {
            $data = json_decode(file_get_contents("php://input"), true);

            // Set the reclamation properties
            $this->reclamation->reclamationid = $data["reclamationid"];
            $this->reclamation->commandeid = $data['commandeid'];
            $this->reclamation->reclamationdate = $data['reclamationdate'];
            $this->reclamation->reclamationdescription = $data['reclamationdescription'];
        
            // Create the reclamation
            if ($this->reclamation->Create()) {
                $response = [
                    'status' => 201,
                    'message' => 'reclamation created successfully'
                ];
            } else {
                $response = [
                    'status' => 500,
                    'message' => 'reclamation creation failed'
                ];
            }
        
            echo json_encode($response);
        }

        public function CreateResponse() {
            $data = json_decode(file_get_contents("php://input"), true);

            // Set the reclamation properties
            $this->reclamation->responseid = $data["responseid"];
            $this->reclamation->reclamationid = $data['reclamationid'];
            $this->reclamation->employeeid = $data['employeeid'];
            $this->reclamation->response = $data['response'];
            $this->reclamation->responsevalid = $data['responsevalid'];
        
            // Create the reclamation
            if ($this->reclamation->CreateResp()) {
                $response = [
                    'status' => 201,
                    'message' => 'reclamationresp created successfully'
                ];
            } else {
                $response = [
                    'status' => 500,
                    'message' => 'reclamationresp creation failed'
                ];
            }
        
            echo json_encode($response);
        }

        public function ReadRec() {
            $reclamations = $this->reclamation->Read();

            if (count($reclamations) > 0) {
                echo json_encode([
                    'status' => 'success',
                    'reclamations' => $reclamations
                ]);
            } else {
                echo json_encode([
                    'status' => 'error',
                    'message' => 'No reclamations'
                ]);
            }
        }

        public function ReadResponse() {
            $reclamations = $this->reclamation->ReadResp();

            if (count($reclamations) > 0) {
                echo json_encode([
                    'status' => 'success',
                    'reclamations' => $reclamations
                ]);
            } else {
                echo json_encode([
                    'status' => 'error',
                    'message' => 'No reclamations'
                ]);
            }
        }

        public function UpdateResponse() {
            $data = json_decode(file_get_contents('php://input'));

            if($data) {
                $this->reclamation->responsevalid = $data->responsevalid;
                $this->reclamation->responseid = $data->responseid;
            }
            else{echo "No resp data changed";}

            if ($this->reclamation->UpdateResp()){
                $response = [
                    'status'=> 201,
                    'message'=> 'resp data changed successfully'
                ];
            } else {
                $response = [
                    'status' => 500,
                    'message' => 'resp data changing failed'
                ];
            }

            echo json_encode($response);
        }
    }
?>