<?php
include_once '../models/Promotion.php';

class PromoController
{
    private $db;
    private $promotion;
    private $requestMethod;

    public function __construct($db, $requestMethod)
    {
        $this->db = $db;
        $this->requestMethod = $requestMethod;
        $this->promotion = new Promotion($this->db);
    }

    public function getAllPromotions($currentdate)
    {
        $promotions = $this->promotion->getPromotions($currentdate);

        if (count($promotions) > 0) {
            echo json_encode([
                'status' => 'success',
                'promotions' => $promotions
            ]);
        } else {
            echo json_encode([
                'status' => 'error',
                'message' => 'No Promotions'
            ]);
        }
    }
}

?>