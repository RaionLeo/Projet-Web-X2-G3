<?php
    include_once '../models/Commande.php';

    class CommandeController {
        private $db;
        private $commande;
        private $requestMethod;

        public function __construct($db, $requestMethod) {
            $this->db = $db;
            $this->requestMethod = $requestMethod;
            $this->commande = new Commande($this->db);
        }

        public function registerCommande() {
            $data = json_decode(file_get_contents('php://input'));

            if($data) {
                $this->commande->commandeId = $data->commandeId;
                $this->commande->clientId = $data->clientId;
                $this->commande->commandeTotal = $data->commandeTotal;
                $this->commande->commandePoints = $data->commandePoints;
                $this->commande->commandeDate = $data->commandeDate;
                $this->commande->commandeConfirm = $data->commandeConfirm;
            }
            else{echo "No commande data recieved";}

            if ($this->commande->CreateCommande()){
                $response = [
                    'status'=> 201,
                    'message'=> 'Commande registered successfully'
                ];
            } else {
                $response = [
                    'status' => 500,
                    'message' => 'Commande registration failed'
                ];
            }

            echo json_encode($response);
        }

        public function getCommandHistory ($clientId) {
            $history = $this->commande->CommandHistory($clientId);

            if (count($history) > 0) {
                echo json_encode([
                    'status' => 'success',
                    'history' => $history
                ]);
            } else {
                echo json_encode([
                    'status' => 'error',
                    'message' => 'No History'
                ]);
            }
        }
    }
?>