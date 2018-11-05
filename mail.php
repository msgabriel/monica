<?php
$to = "monica.carvalho.gabriel@gmail.com";
$subject = 'Contact Form Submission';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$header = "From: $name <$email>";

//honey pot field
$honeypot = $_POST['pot'];

if ($honeypot) {
  return;
} else {
  mail($to, $subject, $message, $header);
  header("Location: index.html#mailsuccess");
}