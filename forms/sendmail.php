<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

header('Content-type: application/json');

$status = array(
    'type'=>'success',
    'message'=>'Gracias por contactarnos, te responderemos a la brevedad '
);

$errorStatus = array(
    'type'=>'error',
    'message'=>'Hubo un error, por favor intentá mas tarde o comunicate por teléfono '
);

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

$name = @trim(stripslashes($_POST['name']));
$surname = @trim(stripslashes($_POST['surname']));
$email = @trim(stripslashes($_POST['email']));
$celphone = @trim(stripslashes($_POST['celphone']));
$country = @trim(stripslashes($_POST['country']));
$nationality = @trim(stripslashes($_POST['nationality']));
$message = @trim(stripslashes($_POST['message']));
$terminos = @trim(stripslashes($_POST['terminos']));

// CAPTCHA
// if(isset($_POST['g-recaptcha-response'])){
//   $captcha=$_POST['g-recaptcha-response'];
// }
// $secretKey = '';
// $url =  'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($secretKey) .  '&response=' . urlencode($captcha);
// $response = file_get_contents($url);
// $responseKeys = json_decode($response,true);
// header('Content-type: application/json');
// if(!$responseKeys["success"]) {
//   echo json_encode(array('error' => 'you`re not a human'));
//   die();
// }

if (!$name) {
  $subject = 'Solicitud equipo - '.$email;
  $body = 'Han enviado una dirección de correo electrónico: '.$email;
} else {
  $subject = 'Contacto Web - '.$name.' '.$surname;
  $body = 'Mensaje de: ' . $email . "<br>\n\n" . 'Nombre: ' . $name . "<br>\n\n" . 'Apellido: ' . $surname . "<br>\n\n" . 'Teléfono: ' . $celphone . "<br>\n\n" . 'País: ' . $country . "<br>\n\n" . 'Nacionalidad: ' . $nationality . "<br>\n\n" . 'Mensaje: ' . $message;
}

try {
    //Server settings
    $mail->isSMTP();
    $mail->Host = 'localhost';
    $mail->SMTPAuth = false;
    $mail->SMTPAutoTLS = false; 
    $mail->Port = 25; 

    //Recipients
    $mail->setFrom('info@bordertransfer.com', 'Team Border');
    $mail->addAddress('info@bordertransfer.com');

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $body;
    $mail->AltBody = $body;

    $success = $mail->send();
    echo "{\"message\":\"success\"}";
} catch (Exception $e) {
    echo "{\"message\": \"Message could not be sent. Mailer Error: {$mail->ErrorInfo}\"}";
}
die;