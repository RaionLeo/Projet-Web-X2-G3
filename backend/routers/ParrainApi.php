<?php

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

    include_once '../config/db_connect.php';
    include_once '../controllers/ParrainController.php';

    $database = new Database();
    $db = $database->connect();

    $requestMethod = $_SERVER["REQUEST_METHOD"];
    $action = $_GET["action"] ??  null;

    $ParrainController = new ParrainController($db, $requestMethod);

    if ($requestMethod == 'POST') {
        if ($action === "register") {
            $ParrainController->RegisterParrain();
        }
        if ($action === "fetchparrainId") {
            $data = json_decode(file_get_contents('php://input'), true);
            $parrainCode = $data['parraincode'] ?? null;
            $ParrainController->GetThatParrainId($parrainCode);
        }
        if ($action === "fetchparrainCode") {
            $data = json_decode(file_get_contents('php://input'), true);
            $parrainId = $data['parrainid'] ?? null;
            $ParrainController->GetThatParrainCode($parrainId);
        }
    } else {
        echo json_encode([
            'status' => 405,
            'message' => 'Method Not Allowed'
        ]);
    }

?>