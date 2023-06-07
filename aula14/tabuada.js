function tabuada(){
    let num = document.getElementById('num')
    let result = document.getElementById('result')
    const erro = document.getElementById('alert_boot')

    erro.style.display = "none"
    let numero = Number(num.value)

    if (num.value.length == 0){
        alert('Digite Um Número')
    } else {
        result.innerHTML = `Tabuada do ${num.value} <br>`
        for (let c = 1; c<=10; c++){
            let multi = c * numero
            result.innerHTML += `<h4>${numero} X ${c} = ${multi} <br></h4>`
        }   
    }
}