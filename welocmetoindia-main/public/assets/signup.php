<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password for security

    // Save the data to a file (you can use a database instead)
    $data = $username . "," . $password . "\n";
    file_put_contents('users.txt', $data, FILE_APPEND);

    echo "Signup successful!";
}
?>
