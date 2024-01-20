<?php
include 'datosConexion.php';

// Obtenemos el id que nos envia JavaScript
$data=json_decode(file_get_contents("php://input"));
$id=$data->id;
// Realizamos la consulta a la base de datos
$sql="SELECT datos, titulo FROM mitabla WHERE id=$id";
$results=$conn->query($sql);

if($results->num_rows > 0){
    $row = $results->fetch_assoc();
    $miTitulo=json_decode($row["titulo"]);
    $miDato=json_decode($row["datos"], true);
}

// Empaquetamos el resultado
$respuesta=array(
    "elTitulo"=>$miTitulo,
    "losValores"=>$miDato
);

// Enviamos a javaScript
echo json_encode($respuesta);

// Y, finalmente cerramos la conexión
$conn->close();
?>
