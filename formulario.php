<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"/>
    <script src="JS.js"></script>
    <title>Validación formulario</title>
</head>
<body>
    <form method="POST" action="" class="form">
        <section>
            <h1>Create Account</h1>

            <label>Nombre</label>
            <input id="name" name="name" type="text" required onchange="checkName()" />
            <span id="errorName" class="error"></span><span id="errorTipName" class="errorTip"></span><br>

            <label>Primer apellido</label>
            <input id="apellido1" name="apellido1" type="text" required onchange="checkAp1()" />
            <span id="errorAp1" class="error"></span><span id="errorTipAp1" class="errorTip"></span><br>

            <label>Segundo apellido</label>
            <input id="apellido2" name="apellido2" type="text" required onchange="checkAp2()" />
            <span id="errorAp2" class="error"></span><span id="errorTipAp2" class="errorTip"></span><br>

            <label>Email</label>
            <input id="email" name="email" type="text" required onchange="checkEmail()" />
            <span id="errorEmail" class="error"></span><div id="errorTipEmail" class="errorTip"></div><br>

            <label>Contraseña</label>
            <input id="pswd1" name="pswd1" type="password" required onchange="checkPswd1()" />
            <span id="errorPswd1" class="error"></span><span id="errorTipPswd1" class="errorTip"></span><br>

            <label>Confirme su contraseña</label>
            <input id="pswd2" name="pswd2" type="password" required onchange="checkPswd2()" />
            <span id="errorPswd2" class="error"></span><br><br>
            <button id="button" type="submit" onclick="summit()">ENVIAR</button><br><br>
            <button id="show-users-btn" style="display: none;" onclick="window.location.href='get_users.php'">Mostrar usuarios</button>

        </section>

    <?php

    if($_POST){
        $nombre = $_POST['name'];
        $apellido1 = $_POST['apellido1'];
        $apellido2 = $_POST['apellido2'];
        $email = $_POST['email'];
        $pswd1 = $_POST['pswd1'];

        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "formulario";

        //Create conection
        $conn = new mysqli($servername, $username, $password, $dbname);
        //Check conection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        //Check for duplicate records
        $query = "SELECT email FROM usuarios WHERE email = '$email'";
        $result = mysqli_query($conn, $query);

        if (mysqli_num_rows($result) > 0 ) {
            echo "<script>alert('No es posible realizar el registro ya que el email está en uso');</script>";

        } else { 
            $sql = "INSERT INTO usuarios (nombre, apellido1, apellido2, email, pswd1)
            VALUES ('$nombre', '$apellido1', '$apellido2', '$email', '$pswd1')";
            if (mysqli_query($conn, $sql)) {
             echo "<br>Registro completado con éxito<br>";
             //Shows the users button
             echo "<script>document.getElementById('show-users-btn').style.display = 'inline-block';</script>";
             echo "<script>document.getElementById('userList').style.display = 'inline-block';</script>";
             } else {
                echo "Error: " .$sql . "<br>" . mysqli_error($conn);
        }

        //Close the conection
        $conn->close();

        }}
    ?>
        <div id="userList" style="display: none;"></div>
    </form>
    
</body>
</html>