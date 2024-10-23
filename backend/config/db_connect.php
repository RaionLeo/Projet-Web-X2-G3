<?php

class Database {
    private $host = 'localhost';
    private $db_name = 'projetWeb';
    private $username = 'postgres';
    private $password = 'admin';
    private $port = "5432";
    private $conn;

    public function connect () {

        $this->conn = null;

        try {
            $dsn = "pgsql:host=" . $this->host . ";port=" . $this->port . ";dbname=" . $this->db_name;
            $this->conn = new PDO($dsn, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
        return $this->conn;
    }
}

?>