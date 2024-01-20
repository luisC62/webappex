<?php
include 'datosConexion.php';

$data=json_decode(file_get_contents("php://input"));
if($data){
    $id=$data->id;
    // construimos el sql
    $sql="DELETE FROM mitabla WHERE id=$id";
    // Lanzamos el sql
    $conn->query($sql);
}
// Enviamos a JavaScript una confirmación
echo "ok";

// Y, finalmente cerramos la conexión
$conn->close();
?>