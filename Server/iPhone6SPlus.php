<?php
require "iphone.php";

$name = "iPhone 6S Plus";

$priceList = array(
"Замена дисплейного модуля"=>"от 5 490  руб.",
"Замена дисплейного модуля (копия)"=>"от 3 990  руб.",
"Замена аккумулятора (АКБ)"=>"2 190 руб.",
"Замена микрофона"=>"от 1 890 руб.",
"Замена основной камеры"=>"от 2 990 руб.",
"Замена фронтальной камеры"=>"от 2 290 руб.",
"Замена нижнего динамика"=>"от 1 490 руб.",
"Замена кнопки включения/громкости"=>"по запросу",
"Ремонт гнезда зарядки"=>"от 990 руб.",
"Ремонт после воды"=>"от 1 490 руб.",
"Пайка контроллеров на плате"=>"от 2 890 руб.",
"Телефон не включается"=>"от 990 руб."
);

iphone($name, $priceList);
?>