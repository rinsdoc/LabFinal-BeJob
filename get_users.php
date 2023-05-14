<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista usuarios</title>
    <link rel="stylesheet" href="style1.css"/>
</head>
<body>

<table>
    <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "formulario";

        $conn = new mysqli($servername, $username, $password, $dbname);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        
        // Select all users
        $sql = "SELECT * FROM usuarios";
        $result = mysqli_query($conn,$sql);
        
        if (mysqli_num_rows($result) > 0) { 
            $columns = array_keys(mysqli_fetch_assoc($result));
            echo '<tr>';
                foreach ($columns as $column) {
                    echo '<th>' . $column . '</th>';
                }
            echo '</tr>';
            mysqli_data_seek($result, 0);
            while($row = mysqli_fetch_assoc($result)) {
                echo "<tr>";
                echo '<td class="nombre">' . $row["NOMBRE"] . "</td>";
                echo '<td class="apellido1">' . $row["APELLIDO1"] . "</td>";
                echo '<td class="apellido2">' . $row["APELLIDO2"] . "</td>";
                echo '<td class="email">' . $row["EMAIL"] . "</td>";
                echo '<td class="pswd1">'. $row["PSWD1"] . "</td>";
                echo "</tr>";
                //echo implode(" - " , $row ) . "<br>"; //print all information separated with -

            }

        } else {
            echo "No users found.";
        }
        
        // Close the database connection
        $conn->close();
    ?> 
</table>

</body>
</html>