<?php
class Promotion
{
    private $conn;

    public $plateid;
    public $platename;
    public $platedescription;
    public $platimage;
    public $platprice;
    public $promotionid; 
    public $promotionstart; 
    public $promotionend; 
    public $promotionrate;


    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function create()
    {
        $query = "SELECT Write_To_Promotion(:promotionid, :promotionstart, :promotionend, :promotionrate)";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':promotionid', $this->promotionid);
        $stmt->bindParam(':promotionstart', $this->promotionstart);
        $stmt->bindParam(':promotionend', $this->promotionend);
        $stmt->bindParam(':promotionrate', $this->promotionrate);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function createPlat()
    {
        $query = "SELECT Write_To_PromoPlat(:promotionid, :plateid)";
        $stmt = $this->conn->prepare($query);

        $this->plateid = htmlspecialchars(strip_tags($this->plateid));


        $stmt->bindParam(':promotionid', $this->promotionid);
        $stmt->bindParam(':plateid', $this->plateid);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
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

    public function ReadPromo ($currentdate) {
        $query = "SELECT * FROM Get_Promotion(:currentdate);";
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

    public function ReadPromoList ($currentdate) {
        $query = "SELECT * FROM Get_Promotion_List(:currentdate);";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":currentdate", $currentdate);
        $stmt->execute();
        
        $promotions = [];
    
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $promotions[] = $row;
        }

        return $promotions;
    }

    public function Delete($promotionId) {
        $query = "SELECT Delete_Promo(:promotionid);";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":promotionid", $promotionId);
        return $stmt->execute();
    }

    public function DeletePlat($plateId) {
        $query = "SELECT Delete_Promo_Plat(:plateId);";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":plateId", $plateId);
        return $stmt->execute();
    }
}

?>