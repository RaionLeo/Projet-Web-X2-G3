<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

    include_once '../config/db_connect.php';
    include_once '../controllers/ClientController.php';

    // Initialize DB connection
    $database = new Database();
    $db = $database->connect();

    // Get request method
    $requestMethod = $_SERVER['REQUEST_METHOD'];

    // Get the action parameter from the URL
    $action = $_GET['action'] ?? null;

    // Initialize UserController
    $ClientController = new ClientController($db, $requestMethod);


    // Handle POST request for registering user and login
    if ($requestMethod == 'POST') {
        if ($action === "register") {
            $ClientController->registerUser();
        }
        if ($action === "login") {
            $data = json_decode(file_get_contents('php://input'), true);
            $email = $data['email'] ?? null;
            $password = $data['password'] ?? null;
            $ClientController->getUser($email, $password);
        }
        if ($action === "getpoints") {
            $data = json_decode(file_get_contents('php://input'), true);
            $clientId = $data['clientid'] ?? null;
            $ClientController->getUserPts($clientId);
        }
        if($action === "changepoints"){
            $ClientController->changeUserPts();
        }
        
    }

    
    else {
        echo json_encode([
            'status' => 405,
            'message' => 'Method Not Allowed'
        ]);
    }
?>