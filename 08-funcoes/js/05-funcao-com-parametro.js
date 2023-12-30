function media(a,b,c,d){
	var media = (a + b + c + d)/4;
	if (media >= 7) {
		return 'Aprovado com média ' + media;
	}
	else{
		return 'Reprovado com média ' + media;
	}
}

var n1 = parseInt(prompt('Digite a primeira nota do aluno:'));
var n2 = parseInt(prompt('Digite a segunda nota do aluno:'));
var n3 = parseInt(prompt('Digite a terceira nota do aluno:'));
var n4 = parseInt(prompt('Digite a quarta nota do aluno:'));

document.getElementById('teste').innerHTML += media(n1,n2,n3,n4);