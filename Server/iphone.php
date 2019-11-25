<?php

function iphone($name, $priceList)
{
	include 'header.php';

	$priceListHTML = '';

	foreach($priceList as $listName => $listPrice) {
	$priceListHTML .= "<div class='pricelist_item'><div class='pricelist_item_name'>$listName</div><div class='pricelist_item_price'>$listPrice</div></div>";
}

echo <<<EOT
<section class='page5'><h2 class='text-center'>Прайс-лист на ремонт<br>$name</h2><div class='d-flex_pricelist'><div class='left pricelist'>$priceListHTML</div><div class='rite'><div class='popout_window'><h4 class='text-center'>Готовы оформить заявку?</h4><input class='value_input input_name4' placeholder='Имя'/><br/><input class='value_input input_number4' placeholder='Номер'/><br/><input class='value_input input_comments4' placeholder='Комментарий'/><br/><div class='connect_me_wrap' onclick="connect2 = 'Позвонить'; togle2(this)"><div class='check2' style='background-image: url(&quot;img/check.svg&quot;)'><div class='border'></div></div><div class='connect_me'>Позвонить</div></div><div class='connect_me_wrap' onclick="connect2 = 'Viber'; togle2(this)"><div class='check2'><div class='border'></div></div><div class='connect_me'>Написать в Viber</div></div><div class='connect_me_wrap' onclick="connect2 = 'WhatsApp'; togle2(this)"><div class='check2'><div class='border'></div></div><div class='connect_me'>Написать в WhatsApp</div></div><div class='btn send4' onclick='send4()'>Заказать</div><div class='consent' onclick='page4()'>Нажимая на кнопку, вы даете <a href='#'>согласие на обработку персональных данных.</a></div></div></div></div></section>
EOT;

include 'footer.php';

}

?>