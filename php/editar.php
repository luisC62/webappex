<?php
include 'datosConexion.php';

$data=json_decode(file_get_contents("php://input"));
if($data){
    $id=json_encode($data->aEditar);
    $datos=json_encode($data->aGuardar);
    $titulo=json_encode($data->aTitulo);
    // Construimos el sql
    $sql="UPDATE mitabla SET datos='$datos', titulo='$titulo' WHERE id=$id";
    // Lanzamos el sql
    $conn->query($sql);
}
// Enviamos a JavaScript una confirmación
echo "ok";

// Y, finalmente cerramos la conexión
$conn->close();
?>