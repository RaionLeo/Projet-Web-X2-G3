<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once '../config/db_connect.php';
include_once '../controllers/MenuController.php';

$database = new Database();
$db = $database->connect();


$requestMethod = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? null;

$MenuController = new MenuController($db, $requestMethod);

if ($requestMethod === 'POST') {
    if ($action === 'menus'){
        $data = json_decode(file_get_contents('php://input'), true);
        $currentdate = $data['menudate'] ?? null;
        $MenuController->getAllMenus($currentdate);
    }
    if ($action === 'getmenu'){
        $data = json_decode(file_get_contents('php://input'), true);
        $currentdate = $data['menudate'] ?? null;
        $MenuController->getAllTrueMenu($currentdate);
    }
    if ($action === "register") {
        $MenuController->registerMenu();
    }
    if ($action === "registerplat") {
        $MenuController->registerMenuPlat();
    }
    if($action === "update"){
        $MenuController->UpdateMenu();
    }
    if ($action === "delete") {
        $data = json_decode(file_get_contents('php://input'), true);
        $menuId = $data['menuid'] ?? null;
        $MenuController->deleteMenu($menuId);
    }
    if ($action === "deleteplat") {
        $data = json_decode(file_get_contents('php://input'), true);
        $plateId = $data['plateid'] ?? null;
        $MenuController->deleteMenuPlat($plateId);
    }
    

} else {
    echo json_encode([
        'status' => '405',
        'message' => 'Method Not Allowed'
    ]);
}
?>