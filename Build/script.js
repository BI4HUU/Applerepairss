var connect = 'Позвонить';

var popout = document.getElementsByClassName("popout")[0];

function togle(_this){
	document.getElementsByClassName("check")[0].style.background = "transparent";
	document.getElementsByClassName("check")[1].style.background = "transparent";
	document.getElementsByClassName("check")[2].style.background = "transparent";
	_this.getElementsByClassName("check")[0].style.background = 'url("img/check.svg")';
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