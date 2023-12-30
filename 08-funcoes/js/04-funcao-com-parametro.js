function media(a,b,c,d){
	return (a+b+c+d)/4;
}

alert('Informe as 4 notas do aluno');

var n1 = parseInt(prompt('Digite a primeira nota:'));
var n2 = parseInt(prompt('Digite a segunda nota:'));
var n3 = parseInt(prompt('Digite a terceira nota:'));
var n4 = parseInt(prompt('Digite a quarta nota:'));

document.getElementById('teste').innerHTML += media(n1, n2, n3, n4)
