<?php
require "iphone.php";

$name = "Watch Sport";

$priceList = array(
"Замена стекла"=>"5 990 руб.",
"Поменять аккумулятор"=>"2 490 руб.",
"Замена кнопки"=>"2 490 руб.",
"Ремонт микрофона"=>"2 490 руб.",
"Поменять колёсико ( Digital Crown )"=>"2 490 руб.",
"Замена задней крышки"=>"2 990 руб.",
"Замена дисплея"=>"5 990 руб.",
"Заменить антенну Bluetooth"=>"1 990 руб."
);

iphone($name, $priceList);
?>