var connect = 'Позвонить';

var div = document.getElementById("testDiv");
div.pseudoStyle("before","color","purple");

function togle(_this){

}

function send(){
    var input_name1 = document.getElementsByClassName("input_name1");
    var input_number1 = document.getElementsByClassName("input_number1");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "mail.php", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var data = "name=" + input_name1 + "&tel=" + input_number1;
    xhr.send(data);
}