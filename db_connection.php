<?php
$server = "localhost:3306";
$username = "root";
$password = "";
$db = "ContactUs_Melovi";
$con = mysqli_connect($server,$username,$password, $db);
if(!$con) {
    die("connection unsuccesfull");
}
// echo "succesfull connection";
?>  