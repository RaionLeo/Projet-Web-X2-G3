<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

    include_once '../config/db_connect.php';
    include_once '../controllers/EventController.php';

    $database = new Database();
    $db = $database->connect();

    $EventController = new EventController($db);

    $requestMethod = $_SERVER['REQUEST_METHOD'];
    $action = $_GET['action'] ?? null;

    if ($requestMethod === 'POST') {
        if($action === "register"){
            $EventController->CreateEvents();
        }
        if($action === "read") {
            $data = json_decode(file_get_contents('php://input'), true);
            $currentdate = $data['eventdate'] ?? null;
            $EventController->ReadEvents($currentdate);
        }
        if($action === "delete") {
            $data = json_decode(file_get_contents('php://input'), true);
            $eventId = $data['eventid'] ?? null;
            $EventController->DeleteEvent($eventId);
        }
    }else{
        echo json_encode([
            'status'=> '405',
            'message' => 'Method Not Allowed'
        ]);
    }
?>