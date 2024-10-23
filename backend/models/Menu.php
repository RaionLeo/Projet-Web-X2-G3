<?php
class Menu
{
    private $conn;

    public $platename;
    public $platedescription;
    public $platimage;
    public $platprice;


    public function __construct($db)
    {
        $this->conn = $db;
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
}

?>