<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Validate and sanitize user inputs
$firstName = htmlspecialchars(trim($_POST['firstName']));
$lastName = htmlspecialchars(trim($_POST['lastName']));
$email = htmlspecialchars(trim($_POST['email']));
$tel = htmlspecialchars(trim($_POST['tel']));
$message = htmlspecialchars(trim($_POST['message']));

require "Mailer/PHPMailer.php";
require "Mailer/SMTP.php";
require "Mailer/Exception.php";

$mail = new PHPMailer();

// try {
    // Server settings
$mail->CharSet = 'utf-8';
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';           // Set smtp server
$mail->SMTPAuth = true;
$mail->Username = '';         // Login from email
$mail->Password = '';                   // Password from email
$mail->SMTPSecure = "ssl";                    // Enable encryption
$mail->Port = 465;                      // Port

    // Recipients
$mail->setFrom('', 'Project tool');     // Sender
$mail->addAddress('kovib48001@aosod.com', 'Joe User'); // Recipient

    // Email content
$mail->isHTML(true);
$mail->Subject = 'Subject';        // Email subject
$mail->Body = 'Name: ' . $firstName . '<br>Last name: ' . $lastName .'<br>Email: ' . $email .'<br>Phone: ' . $tel . '<br>Message: ' . $message;     // Email body
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';    // Email body for non-HTML clients

$mail->send();
//     header('Location: ../Landinglast');
// } catch (Exception $e) {
//     error_log($e->getMessage());
//     echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
// }