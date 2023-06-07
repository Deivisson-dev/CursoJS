function contador(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let count = document.getElementById('count')
    let result = document.getElementById('result')
    const erro = document.getElementById('alert_boot')

    erro.style.display = "none"

    let init_valor = Number(inicio.value)
    let fim_valor = Number(fim.value)
    let passo_valor = Number(passo.value)
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        result.innerHTML += `Impossivel contar!`
    } else if (passo.value == 0){
        erro.style.display = "flex"
        result.innerHTML = `Contando: <br>`
        for (let c = init_valor; c <= fim_valor; c++){
            result.innerHTML += `${c} 👉`
        }
        result.innerHTML += `🏁`
    } else{
        result.innerHTML = `Contando: <br>`
        if (init_valor < fim_valor){
            for (let c = init_valor; c <= fim_valor; c += passo_valor){
                result.innerHTML += `${c} 👉`
            }
            result.innerHTML += `🏁`
        } else {
            for (let c = init_valor; c >= fim_valor; c -= passo_valor){
                result.innerHTML += `${c} 👉`
            }
            result.innerHTML += `🏁`
        }
    }
}