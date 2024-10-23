<?php
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Methods: POST');
        header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

    include_once '../config/db_connect.php';
    include_once '../controllers/FutureEventController.php';

    $database = new Database();
    $db = $database->connect();

    $FutureEventController = new FutureEventController($db);

    $requestMethod = $_SERVER['REQUEST_METHOD'];
    $action = $_GET['action'] ?? null;

    if ($requestMethod === 'POST' && $action === 'futureEvents') {
        $data = json_decode(file_get_contents('php://input'), true);
        $currentdate = $data['eventdate'] ?? null;
        $FutureEventController->getAllEvents($currentdate);
    }else{
        echo json_encode([
            'status'=> '405',
            'message' => 'Method Not Allowed'
        ]);
    }
?>