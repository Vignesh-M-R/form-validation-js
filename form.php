<?php
    $username=filter_input(INPUT_POST,'user');
    $password=filter_input(INPUT_POST,'pass');
    $confirm=filter_input(INPUT_POST,'conpass');
    $phone=filter_input(INPUT_POST,'mobile');
    $emailid=filter_input(INPUT_POST,'email');

    $conn=new mysqli("localhost","root","","form validation");

    if(mysqli_connect_error()){
        die('connection error('.mysqli_connect_error().')'.mysqli_connect_error());
    }
    else{
        $sql="INSERT INTO registration (username,password,confirm,mobile,email) values ('$username','$password','$confirm','$phone','$emailid')";

        if($conn->query($sql)){
            echo "submitted successfully!";
        }
        else{
            echo "Error: ".$sql."<br>".$conn->error;
        }
        $conn->close();
    }

?>