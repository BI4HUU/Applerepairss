<?php
require "iphone.php";

$name = "iPad Mini 3";

$priceList = array(
"Поменять контроллер питания"=>"3 890 руб.",
"Замена стекла (Touchscreen)"=>"2 790 руб.",
"Замена передней камеры Face Time"=>"2 190 руб.",
"Замена кнопки Home"=>"1 490 руб.",
"Замена дисплея LCD Display"=>"6 490 руб.",
"Замена аккумулятора"=>"4 990 руб.",
"Прошивка"=>" 990 руб.",
"Замена материнской платы"=>"7 990 руб.",
"Замена контроллера сенсора"=>"3 490 руб.",
"Замена разъёма"=>"1 490 руб.",
"Восстановление шины"=>"1 490 руб.",
"Замена верхнего шлейфа"=>"2 190 руб.",
"Ремонт микросхемы подсветки"=>"3 690 руб."
);

iphone($name, $priceList);
?>