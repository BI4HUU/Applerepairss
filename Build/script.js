var connect = 'Позвонить';
var connect2 = 'Позвонить';

var popout = document.getElementsByClassName("popout")[0];

function togle(_this){
	document.getElementsByClassName("check")[0].style.background = "transparent";
	document.getElementsByClassName("check")[1].style.background = "transparent";
	document.getElementsByClassName("check")[2].style.background = "transparent";
	_this.getElementsByClassName("check")[0].style.background = 'url("img/check.svg")';
}

function togle2(_this){
	document.getElementsByClassName("check2")[0].style.background = "transparent";
	document.getElementsByClassName("check2")[1].style.background = "transparent";
	document.getElementsByClassName("check2")[2].style.background = "transparent";
	_this.getElementsByClassName("check2")[0].style.background = 'url("img/check.svg")';
}

function popout_see(){
	popout.style.display = "block";
}

function popout_close(){
	if (event.target == popout) {
		popout.style.display = "none";
	}
	if (event.target == document.getElementsByClassName("popout_window_close")[0]) {
		popout.style.display = "none";
	}
}

function send1(){
	document.getElementsByClassName("send1")[0].style.background = "#4c4";
	document.getElementsByClassName("send1")[0].innerHTML = "Отправлен";
	var input_name1 = document.getElementsByClassName("input_name1")[0].value;
	var input_number1 = document.getElementsByClassName("input_number1")[0].value;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "mail.php", true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	var data = "name=" + input_name1 + "&tel=" + input_number1;
	xhr.send(data);
}

function send2(){
	document.getElementsByClassName("send2")[0].style.background = "#4c4";
	document.getElementsByClassName("send2")[0].innerHTML = "Отправлен";
	var input_name1 = document.getElementsByClassName("input_name2")[0].value;
	var input_number1 = document.getElementsByClassName("input_number2")[0].value;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "mail.php", true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	var data = "name=" + input_name1 + "&tel=" + input_number1 + "&connect=" + connect;
	xhr.send(data);
}


function send3(){
	document.getElementsByClassName("send3")[0].style.background = "#4c4";
	document.getElementsByClassName("send3")[0].innerHTML = "Отправлен";
	var input_name1 = document.getElementsByClassName("input_name3")[0].value;
	var input_number1 = document.getElementsByClassName("input_number3")[0].value;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "mail.php", true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	var data = "name=" + input_name1 + "&tel=" + input_number1;
	xhr.send(data);
}


function send4(){
	document.getElementsByClassName("send4")[0].style.background = "#4c4";
	document.getElementsByClassName("send4")[0].innerHTML = "Отправлен";
	var input_name1 = document.getElementsByClassName("input_name4")[0].value;
	var input_number1 = document.getElementsByClassName("input_number4")[0].value;
	var input_comments4 = document.getElementsByClassName("input_comments4")[0].value;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "mail.php", true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	var data = "name=" + input_name1 + "&tel=" + input_number1 + "&comments=" + input_comments4 + "&connect=" + connect2;
	console.log(data);
	xhr.send(data);
}

function send6(){
	document.getElementsByClassName("send6")[0].style.background = "#4c4";
	document.getElementsByClassName("send6")[0].innerHTML = "Отправлен";
	var input_name1 = document.getElementsByClassName("input_name6")[0].value;
	var input_number1 = document.getElementsByClassName("input_number6")[0].value;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "mail.php", true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	var data = "name=" + input_name1 + "&tel=" + input_number1;
	console.log(data);
	xhr.send(data);
}

$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				dots:true,
				nav:false
			},
			900:{
				items:2,
				dots:true,
				nav:false
			},
			1600:{
				items:3,
				nav:false,
				dots:false,
				loop:false
			}
		}
	});
});

// if (document.documentElement.clientWidth > 1000) {
// 	new Siema({
// 		selector: '.siema',
// 		duration: 200,
// 		easing: 'ease-out',
// 		perPage: 3,
// 		startIndex: 2,
// 		draggable: true,
// 		threshold: 20,
// 		loop: true,
// 	});
// } else {
// 	new Siema({
// 		selector: '.siema',
// 		duration: 200,
// 		easing: 'ease-out',
// 		perPage: 1,
// 		startIndex: 2,
// 		draggable: true,
// 		threshold: 20,
// 		loop: true,
// 	});
// }

// var viewport = document.createElement("meta");
// viewport.setAttribute("name", "viewport");
// if (screen.width < 700) {
// 	if (screen.width < 600) {
// 		if (screen.width < 540) {
// 			if (screen.width < 470) {
// 				viewport.setAttribute("content", "width=470");
// 			} else {
// 				viewport.setAttribute("content", "width=540");
// 			}
// 		} else {
// 			viewport.setAttribute("content", "width=600");
// 		}
// 	} else {
// 		viewport.setAttribute("content", "width=700");
// 	}
// } else {
// 	viewport.setAttribute("content", "width=device-width, initial-scale=1");
// }
// document.head.appendChild(viewport);

