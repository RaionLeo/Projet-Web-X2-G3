<?php

    include_once '../models/Event.php';

    class EventController {
        private $event;

        public function __construct($db) {
            $this->event = new Event($db);
        }

        public function CreateEvents() {
            $data = json_decode(file_get_contents("php://input"), true);

            // Set the event properties
            $this->event->eventId = $data["eventid"];
            $this->event->eventName = $data['eventname'];
            $this->event->eventDescription = $data['eventdescription'];
            $this->event->eventDate = $data['eventdate'];
        
            // Get the image content
            if (isset($data['eventimage']) && $data['eventimage']) {
                $this->event->eventImage = base64_decode($data['eventimage']);
            }
        
            // Create the event
            if ($this->event->Create()) {
                $response = [
                    'status' => 201,
                    'message' => 'event created successfully'
                ];
            } else {
                $response = [
                    'status' => 500,
                    'message' => 'event creation failed'
                ];
            }
        
            echo json_encode($response);
        }

        public function ReadEvents($currentdate) {
            $events = $this->event->Read($currentdate);

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

        public function DeleteEvent($eventId) {
            $deleted = $this->event->Delete($eventId);

            if ($deleted) {
                $response = [
                    'status'=> 201,
                    'message'=> 'Event deleted successfully'
                ];
            } else {
                $response = [
                    'status' => 500,
                    'message' => 'Event deletion failed'
                ];
            }

            echo json_encode($response);
        }
    }

?>