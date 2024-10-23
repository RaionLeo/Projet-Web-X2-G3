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
}

?>