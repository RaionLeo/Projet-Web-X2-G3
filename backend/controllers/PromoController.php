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

    public function registerPromo() {
        $data = json_decode(file_get_contents('php://input'));

        if($data) {
            $this->promotion->promotionid = $data->promotionid;
            $this->promotion->promotionstart = $data->promotionstart;
            $this->promotion->promotionend = $data->promotionend;
            $this->promotion->promotionrate = $data->promotionrate;
        }
        else{echo "No promotion data recieved";}

        if ($this->promotion->create()){
            $response = [
                'status'=> 201,
                'message'=> 'promotion registered successfully'
            ];
        } else {
            $response = [
                'status' => 500,
                'message' => 'promotion registration failed'
            ];
        }

        echo json_encode($response);
    }

    public function registerPromoPlat() {
        $data = json_decode(file_get_contents('php://input'));

        if($data) {
            $this->promotion->promotionid = $data->promotionid;
            $this->promotion->plateid = $data->plateid;
        }
        else{echo "No promotion plate data recieved";}

        if ($this->promotion->createPlat()){
            $response = [
                'status'=> 201,
                'message'=> 'promotion plate registered successfully'
            ];
        } else {
            $response = [
                'status' => 500,
                'message' => 'promotion plate registration failed'
            ];
        }

        echo json_encode($response);
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

    public function ReadPromos ($currentdate) {
        $promotions = $this->promotion->ReadPromo($currentdate);

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

    public function ReadPromoLists ($currentdate) {
        $promotions = $this->promotion->ReadPromoList($currentdate);

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

    public function deletePromo($promotionId) {
        $deleted = $this->promotion->Delete($promotionId);

        if ($deleted) {
            $response = [
                'status'=> 201,
                'message'=> 'promotion deleted successfully'
            ];
        } else {
            $response = [
                'status' => 500,
                'message' => 'promotion deletion failed'
            ];
        }

        echo json_encode($response);
    }

    public function deletePromoPlat($plateId) {
        $deleted = $this->promotion->DeletePlat($plateId);

        if ($deleted) {
            $response = [
                'status'=> 201,
                'message'=> 'promotion plat deleted successfully'
            ];
        } else {
            $response = [
                'status' => 500,
                'message' => 'promotion plat deletion failed'
            ];
        }

        echo json_encode($response);
    }
}

?>