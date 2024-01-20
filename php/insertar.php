<?php
include 'datosConexion.php';

$data=json_decode(file_get_contents("php://input")); // Recogemos los datos
if($data){                                           // Si hay datos, los descomponemos
    $valores=json_encode($data->aGuardar);
    $titulo=json_encode($data->aTitulo);
    echo $titulo;
    echo $valores;
    // Una vez tenemos los datos, construimos el sql
    $sql="INSERT INTO mitabla(titulo, datos) VALUES('$titulo', '$valores')";
    $conn->query($sql);
    echo "ok";                                       // Para que JavaScript sepa que se ha echo la consulta
} else{
    echo "No ha podido ser!";
}
$conn->close();
?>

