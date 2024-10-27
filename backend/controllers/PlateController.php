<?php
    include_once '../models/Plate.php';

    class PlateController {
        private $db;
        private $plate;
        private $requestMethod;

        public function __construct($db, $requestMethod) {
            $this->db = $db;
            $this->requestMethod = $requestMethod;
            $this->plate = new Plate($this->db);
        }

        public function CreatePlate() {
            $data = json_decode(file_get_contents("php://input"), true);

            // Set the plate properties
            $this->plate->plateId = $data["plateid"];
            $this->plate->platename = $data['platename'];
            $this->plate->platedescription = $data['platedescription'];
            $this->plate->platprice = $data['platprice'];
        
            // Get the image content
            if (isset($data['platimage']) && $data['platimage']) {
                $this->plate->platimage = base64_decode($data['platimage']);
            }
        
            // Create the plate
            if ($this->plate->Create()) {
                $response = [
                    'status' => 201,
                    'message' => 'Plate created successfully'
                ];
            } else {
                $response = [
                    'status' => 500,
                    'message' => 'Plate creation failed'
                ];
            }
        
            echo json_encode($response);
        }

        public function ReadPlates() {
            $plates = $this->plate->Read();

            if (count($plates) > 0) {
                echo json_encode([
                    'status' => 'success',
                    'plates' => $plates
                ]);
            } else {
                echo json_encode([
                    'status' => 'error',
                    'message' => 'No plates'
                ]);
            }
        }

        public function DeletePlate($plateId) {
            $deleted = $this->plate->Delete($plateId);

            if ($deleted) {
                $response = [
                    'status'=> 201,
                    'message'=> 'Plate deleted successfully'
                ];
            } else {
                $response = [
                    'status' => 500,
                    'message' => 'Plate deletion failed'
                ];
            }

            echo json_encode($response);
        }
    }
?>