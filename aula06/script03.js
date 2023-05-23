var n1 = Number(prompt('Digite um número'));
var n2 = Number(prompt('Digite outro número'));

var operacao = prompt('Qual operação você quer fazer: Soma(S), Subtração(N), Divisão(D), Multiplicação(M)')

var soma = n1 + n2;
var sub = n1 - n2;
var divi = n1 / n2;
var multi = n1 * n2;

if (operacao == 'S'){
    alert('A Soma é ' + soma)
} else if (operacao == 'N'){
    alert('A Subtração é ' + sub)
} else if (operacao == 'D'){
    alert('A Divisão é' + divi)
} else if (operacao == 'M'){
    alert('A Multiplicação é ' + multi)
} else{
    alert('Tente novamente')
}