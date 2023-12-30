function soma(a, b) {
	return a+b;
}

var num1 = parseInt(prompt('Digite um número: '));
var num2 = parseInt(prompt('Digite outro número: '));

document.getElementById('teste').innerHTML += soma(num1, num2);