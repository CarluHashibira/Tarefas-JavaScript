var totNomes = parseInt(prompt('Digite a quantidade de nomes',''));
var total = 0;
var nome = '';
for (var i = 1; i <= totNomes; i++) {
	nome = prompt('Digite um nome','');
	nome = nome.toUpperCase();
	if (nome != 'MARIA') {
		total = total + 1;
	}
}
document.getElementById('teste').innerHTML += total;