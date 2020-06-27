<?php 

include("../includes/conexion.php");

if (isset($_POST['register'])) {
    if (strlen($_POST['name']) >= 1 && strlen($_POST['email']) && strlen($_POST['telefono']) && strlen($_POST['msg'])   >= 1) {
	    $name = trim($_POST['name']);
	    $email = trim($_POST['email']);
	    $telefono = trim($_POST['telefono']);
	    $msg = trim($_POST['msg']);
	    $fechareg = date("d/m/y");
	    $consulta = "INSERT INTO formulario(nombre, correo, telefono, mensaje, fecha_reg) VALUES ('$name','$email', '$telefono','$msg','$fechareg')";
	    $resultado = mysqli_query($con,$consulta);
	    if ($resultado) {
	    	echo "<script>window.location.href='../index.php';</script>";;
	    } else {
	    	?> 
	    	<h3 class="bad">¡Ups ha ocurrido un error!</h3>
           <?php
	    }
    }   else {
	    	?> 
	    	<h3 class="bad">¡Por favor complete los campos!</h3>
           <?php
    }
}

?>