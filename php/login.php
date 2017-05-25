<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin:*");
$username = $_POST["username"];
$password = $_POST["password"];


$conn = new mysqli("","root");
$conn->select_db("supumall");

$sql = "select * from users where username = '$username' and password = '$password'";

$result = $conn->query($sql);

if($result->num_rows == 0){
		echo "0";
	}else{
		echo "1";
	}
	

?>