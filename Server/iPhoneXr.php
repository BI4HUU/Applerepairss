<?php
require "iphone.php";

$name = "iPhone Xr";

$priceList = array(
"Замена дисплейного модуля"=>"от 19 990 руб.",
"Замена заднего стекла"=>"9 490 руб.",
"Замена аккумулятора (АКБ)"=>"4 990 руб.",
"Замена микрофона"=>"от 2 990 руб.",
"Замена основной камеры"=>"от 3 990 руб.",
"Замена фронтальной камеры"=>"от 2 990 руб.",
"Замена нижнего динамика"=>"от 1 990 руб.",
"Замена кнопки включения/громкости"=>"по запросу",
"Ремонт гнезда зарядки"=>"от 990 руб.",
"Ремонт после воды"=>"от 1 990 руб.",
"Пайка контроллеров на плате"=>"от 3 490 руб.",
"Телефон не включается"=>"от 990 руб."
);

iphone($name, $priceList);
?>