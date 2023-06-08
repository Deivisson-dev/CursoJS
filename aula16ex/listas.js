let valores = []

let lista = document.getElementById('listas')
let num = document.getElementById('num')
let numeros = Number(num.value)
let result = document.getElementById('result')
let resultado = document.getElementById('resultado')

function adicionar(){
    let numeros = Number(num.value)
    if (numeros > 100){
        alert('Valor Inválido ou ja encontrado na lista')
    } else {
        valores.push(numeros)
        console.log(valores)
        let item = document.createElement('option')
        item.text = `Valor ${numeros} adicionado.`
        lista.appendChild(item)
    }
}

function finish(){
    resultado.innerHTML += `<h4>Ao todo temos ${valores.length} números cadastrados</h4>`
    var max = valores.reduce(function(a, b) {
        return Math.max(a, b);
      }, -Infinity);
    resultado.innerHTML += `<h4>O Maior valor informado foi ${max}</h4>`
    var min = valores.reduce(function(a, b) {
        return Math.min(a, b);
      });
    resultado.innerHTML += `<h4>O Menor valor informado foi ${min}</h4>`
    var sum = 0
    for (var i = 0; i<valores.length; i++){
       sum += valores[i]
    }
    resultado.innerHTML += `<h4>Somando todos os valores, temos ${sum}</h4>`
    let media = sum / valores.length
    resultado.innerHTML += `<h4>A média dos valores digitados é ${media}</h4>`
}   