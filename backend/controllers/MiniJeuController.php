<?php
include_once '../models/MiniJeu.php';

class  MiniJeuController
{
    private $db;
    private $quiz;
    private $requestMethod;

    public function __construct($db, $requestMethod)
    {
        $this->db = $db;
        $this->requestMethod = $requestMethod;
        $this->quiz = new MiniJeu($this->db);
    }

    public function getAllMiniJeu($currentdate)
    {
        $quiz = $this->quiz->getMiniJeu($currentdate);

        if (count($quiz) > 0) {
            echo json_encode([
                'status' => 'success',
                'quiz' => $quiz
            ]);
        } else {
            echo json_encode([
                'status' => 'error',
                'message' => 'No Quiz'
            ]);
        }
    }
}

?>