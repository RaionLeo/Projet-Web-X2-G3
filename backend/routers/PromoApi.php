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

if ($requestMethod === 'POST') {
    if ($action === 'promotions') {
        $data = json_decode(file_get_contents('php://input'), true);
        $currentdate = $data['promotiondate'] ?? null;
        $PromoController->getAllPromotions($currentdate);
    }
    if ($action === 'promo') {
        $data = json_decode(file_get_contents('php://input'), true);
        $currentdate = $data['promotiondate'] ?? null;
        $PromoController->ReadPromos($currentdate);
    }
    if ($action === 'promolist') {
        $data = json_decode(file_get_contents('php://input'), true);
        $currentdate = $data['promotiondate'] ?? null;
        $PromoController->ReadPromoLists($currentdate);
    }
    if ($action === "register") {
        $PromoController->registerPromo();
    }
    if ($action === "registerplat") {
        $PromoController->registerPromoPlat();
    }
    if ($action === "delete") {
        $data = json_decode(file_get_contents('php://input'), true);
        $promotionId = $data['promotionid'] ?? null;
        $PromoController->deletePromo($promotionId);
    }
    if ($action === "deleteplat") {
        $data = json_decode(file_get_contents('php://input'), true);
        $plateId = $data['plateid'] ?? null;
        $PromoController->deletePromoPlat($plateId);
    }
    
} else {
    echo json_encode([
        'status' => '405',
        'message' => 'Method Not Allowed'
    ]);
}
?>