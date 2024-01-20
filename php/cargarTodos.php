<?php
include 'datosConexion.php';

$sql="SELECT * FROM mitabla";
$result=$conn->query($sql);
$data=array();
if($result->num_rows>0){
    // Ojo!. Utilizamos arrays asociativos en php
    while($row=$result->fetch_assoc()){
        $data[]=array(
            'id'=>$row["id"],
            'titulo'=>$row["titulo"],
            'datos'=>json_decode($row["datos"])
        );
    }
}
$jsonData=json_encode($data);
echo $jsonData;
$conn->close();
?>
