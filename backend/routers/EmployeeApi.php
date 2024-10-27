<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

    include_once '../config/db_connect.php';
    include_once '../controllers/EmployeeController.php';

    // Initialize DB connection
    $database = new Database();
    $db = $database->connect();

    // Get request method
    $requestMethod = $_SERVER['REQUEST_METHOD'];

    // Get the action parameter from the URL
    $action = $_GET['action'] ?? null;

    // Initialize UserController
    $EmployeeController = new EmployeeController($db, $requestMethod);


    // Handle POST request for registering user and login
    if ($requestMethod == 'POST') {
        if ($action === "register") {
            $EmployeeController->registerUser();
        }
        if ($action === "login") {
            $data = json_decode(file_get_contents('php://input'), true);
            $email = $data['email'] ?? null;
            $password = $data['password'] ?? null;
            $EmployeeController->getUser($email, $password);
        }
        if ($action === "delete") {
            $data = json_decode(file_get_contents('php://input'), true);
            $employeeId = $data['employeeid'] ?? null;
            $EmployeeController->deleteEmployee($employeeId);
        }
    }
    else if ($requestMethod == 'GET' && $action === 'employeelist') {
        $EmployeeController->getAllEmployees();
    }
    
    else {
        echo json_encode([
            'status' => 405,
            'message' => 'Method Not Allowed'
        ]);
    }
?>