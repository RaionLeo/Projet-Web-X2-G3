<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

    include_once '../config/db_connect.php';
    include_once '../controllers/CommandeController.php';

    // Initialize DB connection
    $database = new Database();
    $db = $database->connect();

    // Get request method
    $requestMethod = $_SERVER['REQUEST_METHOD'];

    // Get the action parameter from the URL
    $action = $_GET['action'] ?? null;

    // Initialize UserController
    $CommandeController = new CommandeController($db, $requestMethod);


    // Handle POST request for registering user and login
    if ($requestMethod == 'POST') {
        if ($action === "register") {
            $CommandeController->registerCommande();
        }
        if ($action === 'getcommande') {
            $data = json_decode(file_get_contents('php://input'), true);
            $clientId = $data['clientid'] ?? null;
            $CommandeController->getCommandHistory($clientId);
            
        }
    }
    
    else {
        echo json_encode([
            'status' => 405,
            'message' => 'Method Not Allowed'
        ]);
    }
?>