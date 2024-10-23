<?php
class Promotion
{
    private $conn;

    public $platename;
    public $platedescription;
    public $platimage;
    public $platprice;
    public $promotionrate;


    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function getPromotions($currentdate)
    {
        $query = "SELECT * FROM Get_Promo_Plates(:currentdate);";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":currentdate", $currentdate);
        $stmt->execute();
        
        $promotions = [];
    
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            if (is_resource($row['platimage'])) {
                $row['platimage'] = base64_encode(stream_get_contents($row['platimage']));
            }
            $promotions[] = $row;
        }

        return $promotions;
    }
}

?>