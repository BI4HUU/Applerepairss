<?php
require "iphone.php";

$name = "Watch 42mm";

$priceList = array(
"Замена стекла"=>"6 490 руб.",
"Поменять аккумулятор"=>"2 490 руб.",
"Замена кнопки"=>"2 490 руб.",
"Ремонт микрофона"=>"2 490 руб.",
"Поменять колёсико ( Digital Crown )"=>"2 490 руб.",
"Замена задней крышки"=>"2 990 руб.",
"Замена дисплея"=>"6 490 руб."
);

iphone($name, $priceList);
?>