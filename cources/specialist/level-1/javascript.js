var name = prompt("Введите ваше имя", "");
var s = "<h1>Привет, "+name+"!</h1>";
document.write(s);

var x = prompt("Введите первое число", "");
var y = prompt("Введите второе число", "");
x = parseInt(x);
y = parseInt(y)

var z = x*y;
var s = "<h2>"+x+"*"+y+"="+z+"</h2>";
document.write(s);