<?php
require_once "db_connection.php";

if(isset ($_POST)) {
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['pno'];

$sql = "INSERT INTO Contact (`Name`, `Email`, `Phone`,`Date`) VALUES ( '$name', '$email', '$phone',current_timestamp())";

if($con->query($sql)) {
    echo "Succesfull";
}
else {
    echo "Error";
}

$con->close();
}

?>