function myFunction(){
    let tabuada = document.getElementById('tabuada')
    tabuada.style.display = "none"
}

function tabuada(){
    let num = document.getElementById('num')
    let result = document.getElementById('result')
    const erro = document.getElementById('alert_boot')
    let tabuada = document.getElementById('tabuada')

    erro.style.display = "none"
    tabuada.style.display = "block"
    let numero = Number(num.value)

    if (num.value.length == 0){
        alert('Digite Um Número')
    } else {
        tabuada.innerHTML = ''
        for (let c = 1; c<=10; c++){
            let multi = c * numero
            let item = document.createElement('option')
            item.text = `${numero} X ${c} = ${multi}`
            tabuada.appendChild(item)
        }   
    }
}