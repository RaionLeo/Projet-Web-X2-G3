<?php

    class FutureEvent {
        private $conn;

        public $eventid;
        public $eventname;
        public $eventdescription;
        public $eventDate;
        public $eventimage;

        public function __construct($db) {
            $this->conn = $db;
        }

        public function getEvents ($currentdate) {
            $query = "SELECT * FROM Get_Future_Events(:eventdate)";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam (":eventdate", $currentdate);
            $stmt->execute();

            $evenements = [];
    
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                if (is_resource($row['eventimage'])) {
                    $row['eventimage'] = base64_encode(stream_get_contents($row['eventimage']));
                }
                $evenements[] = $row;
            }

            return $evenements;
        }
    }

?>