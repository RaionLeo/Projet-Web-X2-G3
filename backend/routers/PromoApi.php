<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once '../config/db_connect.php';
include_once '../controllers/PromoController.php';

$database = new Database();
$db = $database->connect();


$requestMethod = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? null;

$PromoController = new PromoController($db, $requestMethod);

if ($requestMethod === 'POST' && $action === 'promotions') {
    $data = json_decode(file_get_contents('php://input'), true);
    $currentdate = $data['promotiondate'] ?? null;
    $PromoController->getAllPromotions($currentdate);
    
} else {
    echo json_encode([
        'status' => '405',
        'message' => 'Method Not Allowed'
    ]);
}
?>