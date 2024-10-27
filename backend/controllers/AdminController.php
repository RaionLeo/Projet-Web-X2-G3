<?php
    include_once '../models/Admin.php';

    class AdminController {
        private $db;
        private $admin;
        private $requestMethod;

        public function __construct($db, $requestMethod) {
            $this->db = $db;
            $this->requestMethod = $requestMethod;
            $this->admin = new Admin($this->db);
        }

        public function registerAdmin() {
            $data = json_decode(file_get_contents('php://input'));

            if($data) {
                $this->admin->adminId = $data->adminId;
                $this->admin->adminSecret = $data->adminSecret;
            }
            else{echo "No admin data recieved";}

            if ($this->admin->create()){
                $response = [
                    'status'=> 201,
                    'message'=> 'Admin registered successfully'
                ];
            } else {
                $response = [
                    'status' => 500,
                    'message' => 'Admin registration failed'
                ];
            }

            echo json_encode($response);
        }

        public function getAdmin($id, $password) {
            $result = $this->admin->Read($id);
            $admin = $result->fetch(PDO::FETCH_ASSOC);
            
            if ($admin){
                if (password_verify($password, $admin['adminsecret'])) {
                    $_SESSION['admin_id'] = $admin['adminid'];

                    echo json_encode([
                        'status'=> 'Success',
                        'message'=> 'Login Successful',
                        'admin_id' => $admin['adminid'],
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
                    'message' => 'Admin not found'
                ]);
            }
        }
    }
?>