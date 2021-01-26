<?php
$data = [];
if ($_POST) {
    $name = "";
    $email = "";
    $subject = "";
    $comments = "";
    $recipient="ferreira.everton@icloud.com"; // Your email comes here

    if (isset($_POST['name'])) {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    }

    if (isset($_POST['email'])) {
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    if (isset($_POST['subject'])) {
        $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    }

    if (isset($_POST['comments'])) {
        $comments = htmlspecialchars($_POST['comments']);
    }


    $headers = 'MIME-Version: 1.0' . "\r\n"
        . 'Content-type: text/html; charset=utf-8' . "\r\n"
        . 'From: ' . $email . "\r\n";
    if (mail($recipient, $subject, $comments, $headers)) {
        $data = array(
            'status' => 'Congratulation',
            'message' => 'Your message sent successfully.'
        );
    } else {
        $data = array(
            'status' => 'Error',
            'message' => 'Your message did not send.'
        );
    }
} else {
	$data = array(
		'status' => 'Warning',
		'message' => 'Something went wrong, Please try again.'
	);
}
echo json_encode($data);
