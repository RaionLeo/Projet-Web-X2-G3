<?php
class MiniJeu
{
    private $conn;

    public $questionNum;
    public $quizQuestion;
    public $answer;


    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function getMiniJeu($currentdate)
    {
        $query = "SELECT * FROM Get_Quiz_Quest(:currentdate);";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":currentdate", $currentdate);
        $stmt->execute();

        $quiz = [];

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            $quiz[] = $row;
        }
        return $quiz;
    }
}

?>