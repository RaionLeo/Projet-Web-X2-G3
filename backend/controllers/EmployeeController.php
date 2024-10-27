<?php
    include_once '../models/Employee.php';

    class EmployeeController {
        private $db;
        private $employee;
        private $requestMethod;

        public function __construct($db, $requestMethod) {
            $this->db = $db;
            $this->requestMethod = $requestMethod;
            $this->employee = new Employee($this->db);
        }

        public function registerUser() {
            $data = json_decode(file_get_contents('php://input'));

            if($data) {
                $this->employee->employeeId = $data->employeeId;
                $this->employee->employeeName = $data->employeeName;
                $this->employee->employeeEmail = $data->employeeEmail;
                $this->employee->registryDate = $data->registryDate;
                $this->employee->employeeSecret = $data->employeeSecret;
            }
            else{echo "No employee data recieved";}

            if ($this->employee->create()){
                $response = [
                    'status'=> 201,
                    'message'=> 'employee registered successfully'
                ];
            } else {
                $response = [
                    'status' => 500,
                    'message' => 'employee registration failed'
                ];
            }

            echo json_encode($response);
        }

        public function getUser($email, $password) {
            $result = $this->employee->Read_One($email);
            $employee = $result->fetch(PDO::FETCH_ASSOC);
            
            if ($employee){
                if (password_verify($password, $employee['employeesecret'])) {
                    $_SESSION['employee_id'] = $employee['employeeid'];
                    $_SESSION['employee_name'] = $employee['employeename'];

                    echo json_encode([
                        'status'=> 'Success',
                        'message'=> 'Login Successful',
                        'employee_id' => $employee['employeeid'],
                        'employee_name'=> $employee['employeename']
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
                    'message' => 'Employee not found'
                ]);
            }
        }

        public function getAllEmployees()
        {
            $employee = $this->employee->Read_All();

            if (count($employee) > 0) {
                echo json_encode([
                    'status' => 'success',
                    'employee' => $employee
                ]);
            } else {
                echo json_encode([
                    'status' => 'error',
                    'message' => 'No employees'
                ]);
            }
        }

        public function deleteEmployee($employeeId) {
            $deleted = $this->employee->Delete($employeeId);

            if ($deleted) {
                $response = [
                    'status'=> 201,
                    'message'=> 'Employee deleted successfully'
                ];
            } else {
                $response = [
                    'status' => 500,
                    'message' => 'Employee deletion failed'
                ];
            }

            echo json_encode($response);
        }
    }
?>