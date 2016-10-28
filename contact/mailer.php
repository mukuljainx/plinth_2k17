<?php

require '/mail/phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

if(empty($_GET['info'])==false){
$info=unserialize($_GET['info']);
//echo $info[0]."<br>".$info[1]."<br>".$info[2]."<br>".$info[3]."<br>";


}
else{
	die("error found");
}

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'ravichanchlani47@gmail.com';                 // SMTP username
$mail->Password = 'aspirine123';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('ravichanchlani48@gmail.com', 'Ravi');
$mail->addAddress($info[1], $info[0]);     // Add a recipient
//$mail->addAddress('ravichanchlani48@gmail.com');               // Name is optional
$mail->addReplyTo($info[1], 'Information');
$mail->addCC($info[0]);
$mail->addBCC('ravichanchlani48@gmail.com');

$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Query is the Subject';
$mail->Body    = $info[3];
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
/*echo "true";
echo $info[0];
echo $info[1];
echo $info[2];
echo $info[3];
*/
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
	header('location:way2sms/example.php?tomob='.$info[2]);
    echo 'Mail has been sent';
}
?>