<?php

    include_once '../models/CurrentEvent.php';

    class CurrentEventController {
        private $event;

        public function __construct($db) {
            $this->event = new CurrentEvent($db);
        }

        public function getAllEvents($currentdate) {
            $events = $this->event->getEvents($currentdate);

            if (count($events) > 0) {
                echo json_encode([
                    'status' => 'success',
                    'events' => $events
                ]);
            } else {
                echo json_encode([
                    'status' => 'error',
                    'message' => 'No events'
                ]);
            }
        }
    }

?>