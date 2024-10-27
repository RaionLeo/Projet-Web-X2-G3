<?php
include_once '../models/Menu.php';

class MenuController
{
    private $db;
    private $menu;
    private $requestMethod;

    public function __construct($db, $requestMethod)
    {
        $this->db = $db;
        $this->requestMethod = $requestMethod;
        $this->menu = new Menu($this->db);
    }

    public function registerMenu() {
        $data = json_decode(file_get_contents('php://input'));

        if($data) {
            $this->menu->menuId = $data->menuId;
            $this->menu->menudate = $data->menudate;
        }
        else{echo "No menu data recieved";}

        if ($this->menu->create()){
            $response = [
                'status'=> 201,
                'message'=> 'menu registered successfully'
            ];
        } else {
            $response = [
                'status' => 500,
                'message' => 'menu registration failed'
            ];
        }

        echo json_encode($response);
    }

    public function registerMenuPlat() {
        $data = json_decode(file_get_contents('php://input'));

        if($data) {
            $this->menu->menuId = $data->menuId;
            $this->menu->plateId = $data->plateId;
            $this->menu->instock = $data->instock;
        }
        else{echo "No menu plate data recieved";}

        if ($this->menu->createPlat()){
            $response = [
                'status'=> 201,
                'message'=> 'menu plate registered successfully'
            ];
        } else {
            $response = [
                'status' => 500,
                'message' => 'menu plate registration failed'
            ];
        }

        echo json_encode($response);
    }

    public function UpdateMenu() {
        $data = json_decode(file_get_contents('php://input'));

        if($data) {
            $this->menu->instock = $data->instock;
            $this->menu->plateId = $data->plateId;
        }
        else{echo "No menu plat data changed";}

        if ($this->menu->Update()){
            $response = [
                'status'=> 201,
                'message'=> 'menu plat data changed successfully'
            ];
        } else {
            $response = [
                'status' => 500,
                'message' => 'menu plat data changing failed'
            ];
        }

        echo json_encode($response);
    }

    public function getAllMenus($currentdate)
    {
        $menus = $this->menu->getMenus($currentdate);

        if (count($menus) > 0) {
            echo json_encode([
                'status' => 'success',
                'menus' => $menus
            ]);
        } else {
            echo json_encode([
                'status' => 'error',
                'message' => 'No Menu'
            ]);
        }
    }

    public function getAllTrueMenu($currentdate)
    {
        $menus = $this->menu->Read($currentdate);

        if (count($menus) > 0) {
            echo json_encode([
                'status' => 'success',
                'menus' => $menus
            ]);
        } else {
            echo json_encode([
                'status' => 'error',
                'message' => 'No Menu'
            ]);
        }
    }

    public function deleteMenu($menuId) {
        $deleted = $this->menu->Delete($menuId);

        if ($deleted) {
            $response = [
                'status'=> 201,
                'message'=> 'menu deleted successfully'
            ];
        } else {
            $response = [
                'status' => 500,
                'message' => 'menu deletion failed'
            ];
        }

        echo json_encode($response);
    }

    public function deleteMenuPlat($plateId) {
        $deleted = $this->menu->DeletePlat($plateId);

        if ($deleted) {
            $response = [
                'status'=> 201,
                'message'=> 'menu plat deleted successfully'
            ];
        } else {
            $response = [
                'status' => 500,
                'message' => 'menu plat deletion failed'
            ];
        }

        echo json_encode($response);
    }
}
?>