
$to = "petr.pawlikov@yandex.ru";
$to = "be4huu@gmail.com";
		file_get_contents('https://api.telegram.org/bot808970621:AAEaA0jzGTzo5yKb4AQT0Pf-Pm3n-eEt63U/sendMessage?chat_id=666543398&text=' . $message)
    $headers = "From: info@sviter.kz\r\nReply-to: info@sviter.kz\r\nContent-type: text/plain; charset=utf-8\r\n";
    mail($to, $subject, $message, $headers);
1) В телеграм в поиске найдите @BotFather (с галочкой в конце). 
2) нажмите старт 
3) напишите /newbot . 
4) напишите имя *** (или как хотите). 
5) напишите имя ***_bot (в конце _bot обязательно!). 
6) пришлите мне код который получите типа (808970621:AAEaA0jzGTzo5yKb4AQT0Pf-Pm3n-eEt63U)
7) В телеграм в поиске найдите бота по имени из пункта 5 и напишите чтото ему.
https://api.telegram.org/bot808970621:AAEaA0jzGTzo5yKb4AQT0Pf-Pm3n-eEt63U/getUpdates
<?php
$to = "petr.pawlikov@yandex.ru";
    $subject = "******";
    $message = implode (" | ", $_POST );
    mail($to, $subject, $message);
?>