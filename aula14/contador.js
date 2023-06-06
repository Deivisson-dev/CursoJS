function contador(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let count = document.getElementById('count')
    let result = document.getElementById('result')

    let init_valor = Number(inicio.value)
    let fim_valor = Number(fim.value)
    let passo_valor = Number(passo.value)

    for (let c = init_valor; c <= fim_valor; c += passo_valor){
        result.innerHTML += `${c} 👉`
    }

    result.innerHTML += `🏁`
}