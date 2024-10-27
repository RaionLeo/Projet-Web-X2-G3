<?php
class Menu
{
    private $conn;

    public $platename;
    public $platedescription;
    public $platimage;
    public $platprice;
    public $menuId;
    public $menudate;
    public $plateId;
    public $instock;


    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function create()
    {
        $query = "SELECT Write_To_Menu(:menuid, :menudate)";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':menuid', $this->menuId);
        $stmt->bindParam(':menudate', $this->menudate);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function createPlat()
    {
        $query = "SELECT Write_To_MenuPlat(:menuid, :plateid, :instock)";
        $stmt = $this->conn->prepare($query);

        $this->plateId = htmlspecialchars(strip_tags($this->plateId));


        $stmt->bindParam(':menuid', $this->menuId);
        $stmt->bindParam(':plateid', $this->plateId);
        $stmt->bindParam(':instock', $this->instock);


        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function Update() {
        $query = "SELECT Change_Menu_Plat_State(:instock, :plateid)";
        $stmt = $this->conn->prepare($query);
        
        $stmt->bindParam(":instock", $this->instock);
        $stmt->bindParam(":plateid", $this->plateId);
        
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function getMenus($currentdate)
    {
        $query = "SELECT * FROM Get_Menu_Plates(:currentdate);";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":currentdate", $currentdate);
        $stmt->execute();
        
        $menus = [];
    
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            if (is_resource($row['platimage'])) {
                $row['platimage'] = base64_encode(stream_get_contents($row['platimage']));
            }
            $menus[] = $row;
        }

        return $menus;
    }

    public function Read($currentdate)
    {
        $query = "SELECT * FROM Get_Menu(:currentdate);";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":currentdate", $currentdate);
        $stmt->execute();
        
        $menus = [];
    
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            if (is_resource($row['platimage'])) {
                $row['platimage'] = base64_encode(stream_get_contents($row['platimage']));
            }
            $menus[] = $row;
        }

        return $menus;
    }

    public function Delete($menuId) {
        $query = "SELECT Delete_Menu(:menuId);";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":menuId", $menuId);
        return $stmt->execute();
    }

    public function DeletePlat($plateId) {
        $query = "SELECT Delete_Menu_Plat(:plateId);";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":plateId", $plateId);
        return $stmt->execute();
    }
}

?>