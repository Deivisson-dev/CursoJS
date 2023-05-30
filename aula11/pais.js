function verifNac(){
    const pais = document.getElementById('pais')
    const resultado = document.getElementById('result')

     const local = pais.value

    resultado.innerHTML = `<p>Vivendo em ${local}</p>`
    
    if (local == 'Brasil'){
        resultado.innerHTML += `<p>Vocé é Brasileiro(a)</p>`
    } else {
        resultado.innerHTML += `<p>Você é estrangeiro</p>`
    }
}