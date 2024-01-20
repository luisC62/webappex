<?php
$servidor="localhost";                      // Ya que utilizamos XAMPP. Poner el nombre del servidor real contratado
$usuario="root";
$password="";
$bbs="valores";
$conn=new mysqli($servidor, $usuario, $password, $bbs); //Conectamos con el servidor
if($conn->connect_error){
    die("Conexión fallida ". $conn->connect_error);
}
?>