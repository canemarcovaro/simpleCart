<?php
    $destino = "programadoresdalas@gmail.com";
    $name = $_POST["name"];
    $address = $_POST["address"];
    $products = $_POST["products"];
    $contenido = " Tienes una nueva venta!\nNombre: " . $name . "\nDireccion: " . $address. "\n ". "\nProductos: ". $products;

    $mail = mail($destino, "Nueva venta", $contenido);
    if($mail){
        echo "<h1> Email enviado correctamente!</h1>";
    }


