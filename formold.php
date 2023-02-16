<?php
use PHPMailer\PHPMailer\PHPMailer;

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$message = $_POST['message'];

require_once "Mailer/PHPMailer.php";
require_once "Mailer/SMTP.php";
require_once "Mailer/Exception.php";

$mail = new PHPMailer();

try {
    //Серверные настройки
    $mail->isSMTP();
    $mail->Host         = 'smtp.gmail.com';           // Установка smtp сервера
    $mail->SMTPAuth     = true;                     
    $mail->Username     = '';         // Логин от почты
    $mail->Password     = '';                   // Пароль от почты
    $mail->SMTPSecure   = "ssl";                    // Включение шифрования
    $mail->Port         = 465;                      // Порт

    //Recipients
    $mail->setForm('', 'Project tool');     // Отправитель
    $mail->addAddress('fawafan285@breazeim.com', 'Joe User'); // Получатель


    // Добавление документов
    // $mail->addAttachment('/var/tmp/file.tar.gz');
    // $mail->addAttackment('/tmp/image.jpg', 'new.jpg');

    // Контент письма
    $mail->isHTML(true);
    $mail->Subject = 'Theme';        // Тема письма
    $mail->Body = 'Name: ' . $firstName . '<br>Last name: ' . $lastName .'<br>Micle: ' . $email .'<br>Phone: ' . $tel . '<br>Message: ' . $message;     // Тело письма
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';    // Тело письма для клиентов не обрабатывающих 

    $mail->send();
    header('Location: ../Landing')
}
catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}


?>

// second version

<?php
use PHPMailer\PHPMailer\PHPMailer;

// Validate and sanitize user inputs
$firstName = htmlspecialchars(trim($_POST['firstName']));
$lastName = htmlspecialchars(trim($_POST['lastName']));
$email = htmlspecialchars(trim($_POST['email']));
$tel = htmlspecialchars(trim($_POST['tel']));
$message = htmlspecialchars(trim($_POST['message']));

require_once "Mailer/PHPMailer.php";
require_once "Mailer/SMTP.php";
require_once "Mailer/Exception.php";

$mail = new PHPMailer();

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';           // Set smtp server
    $mail->SMTPAuth = true;
    $mail->Username = 'cookieqookie@gmail.com';         // Login from email
    $mail->Password = 'Anton22032003';                   // Password from email
    $mail->SMTPSecure = "ssl";                    // Enable encryption
    $mail->Port = 465;                      // Port

    // Recipients
    $mail->setFrom('cookieqookie@gmail.com', 'Project tool');     // Sender
    $mail->addAddress('fawafan285@breazeim.com', 'Joe User'); // Recipient

    // Email content
    $mail->isHTML(true);
    $mail->Subject = 'Subject';        // Email subject
    $mail->Body = 'Name: ' . $firstName . '<br>Last name: ' . $lastName .'<br>Email: ' . $email .'<br>Phone: ' . $tel . '<br>Message: ' . $message;     // Email body
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';    // Email body for non-HTML clients

    $mail->send();
    header('Location: ../Landing');
} catch (Exception $e) {
    error_log($e->getMessage());
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
