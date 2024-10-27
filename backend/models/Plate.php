<?php
class Plate
{
    private $conn;

    public $plateId;
    public $platename;
    public $platedescription;
    public $platimage;
    public $platprice;
    


    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function Create() {
        $query = "SELECT Write_To_Plat(:plateid, :platename, :platedescription, :platimage, :platprice)";
        $stmt = $this->conn->prepare($query);

        $this->platename = htmlspecialchars(strip_tags($this->platename));
        $this->platedescription = htmlspecialchars(strip_tags($this->platedescription));
        $this->platprice = htmlspecialchars(strip_tags($this->platprice));

        $stmt->bindParam(':plateid', $this->plateId);
        $stmt->bindParam(':platename', $this->platename);
        $stmt->bindParam(':platedescription', $this->platedescription);
        $stmt->bindParam(':platimage', $this->platimage, PDO::PARAM_LOB);
        $stmt->bindParam(':platprice', $this->platprice);

        return $stmt->execute();
    }

    public function Read() {
        $query = "SELECT * FROM Get_All_Plates()";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        $plates = [];

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            $plates[] = $row;
        }
        return $plates;
    }

    public function Delete($plateId) {
        $query = "SELECT Delete_Plat(:plateId);";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":plateId", $plateId);
        return $stmt->execute();
    }
}
?>