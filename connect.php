<?php
$servername = "localhost";
$database = "awesomestuff";
$username = "root";
$password= "";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if ($conn -> connect_error) {
  die("Failed to connect to MySQL: " . $conn -> connect_error);
}
?>