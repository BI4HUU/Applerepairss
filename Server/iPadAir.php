<?php
require "iphone.php";

$name = "iPad Air";

$priceList = array(
"Замена контроллера питания"=>"3 990 руб.",
"Замена стекла (Touchscreen)"=>"2 790 руб.",
"Замена нижнего шлейфа"=>"2 490 руб.",
"Замена дисплея LCD Display"=>"5 490 руб.",
"Замена динамика"=>"1 490 руб.",
"Замена аккумулятора"=>"3 990 руб.",
"Ремонт сим ридера"=>"2 990 руб.",
"Замена верхнего шлейфа"=>"2 490 руб.",
"Установка сим лотка"=>"500 руб.",
"Замена антенны"=>"1 990 руб.",
"Замена кнопки Home"=>"1 990 руб."
);

iphone($name, $priceList);
?>