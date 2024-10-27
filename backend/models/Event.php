<?php

    class Event {
        private $conn;

        public $eventId;
        public $eventName;
        public $eventDescription;
        public $eventDate;
        public $eventImage;

        public function __construct($db) {
            $this->conn = $db;
        }

        public function Create () {
            $query = "SELECT Write_To_Evenements(:eventid, :eventname, :eventdescription, :eventdate, :eventimage)";
            $stmt = $this->conn->prepare($query);

            $this->eventName = htmlspecialchars(strip_tags($this->eventName));
            $this->eventDescription = htmlspecialchars(strip_tags($this->eventDescription));


            $stmt->bindParam(':eventid', $this->eventId);
            $stmt->bindParam(':eventname', $this->eventName);
            $stmt->bindParam(':eventdescription', $this->eventDescription);
            $stmt->bindParam(':eventdate', $this->eventDate);
            $stmt->bindParam(':eventimage', $this->eventImage, PDO::PARAM_LOB);

            if ($stmt->execute()) {
                return true;
            } else {
                return false;
            }
        }

        public function Read ($currentdate) {
            $query = "SELECT * FROM Get_Events(:eventdate)";
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

        public function Delete ($eventId) {
            $query = "SELECT Delete_Event(:eventId);";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(":eventId", $eventId);
            return $stmt->execute();
        }

        
    }

?>