<?php

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

    include_once '../config/db_connect.php';
    include_once '../controllers/ReclamationController.php';

    $database = new Database();
    $db = $database->connect();


    $requestMethod = $_SERVER['REQUEST_METHOD'];
    $action = $_GET['action'] ?? null;

    $ReclamationController = new ReclamationController($db, $requestMethod);

    if ($requestMethod == 'POST') {
        if($action === "register"){
            $ReclamationController->CreateRec();
        }
        if($action === "registerresp"){
            $ReclamationController->CreateResponse();
        }
        if($action === "updateresp"){
            $ReclamationController->UpdateResponse();
        }
    }
    else if ($requestMethod == 'GET'){
        if ($action === 'read') {
            $ReclamationController->ReadRec();
        }
        if ($action === 'readresp') {
            $ReclamationController->ReadResponse();
        }
    }
    else {
        echo json_encode([
            'status' => '405',
            'message' => 'Method Not Allowed'
        ]);
    }
?>