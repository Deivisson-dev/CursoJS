function calcIdade(){
    const atual = new Date()
    const ano = atual.getFullYear()

    const res = document.getElementById('result')
    const nasc = document.getElementById('nasc')
    const img = document.getElementById('imagem')
    const erro = document.getElementById('alert_boot')

    erro.style.display = "none"

    if (nasc.value.length == 0 || nasc.value > ano){
        erro.style.display = "flex"
        erro.style.alignItems = "center"
        const txt = document.getElementById('txt').style.display = "none"
        img.style.display = "none"
    }
    const ano_digitado = Number(nasc.value)

    const data_nascimento = ano - ano_digitado

    if (document.getElementById('sxmas').checked == true && data_nascimento <= 2){
        const txt = document.getElementById('txt').innerHTML = `Detectamos Homem com ${data_nascimento} anos`
        img.src = 'foto-bebe-homem.jpg'
    } else if (document.getElementById('sxfem').checked == true && data_nascimento <= 2){
        const txt = document.getElementById('txt').innerHTML = `Detectamos Mulher com ${data_nascimento} anos`
        img.src = 'foto-bebe-mulher.jpg'
    } else if (document.getElementById('sxmas').checked == true && data_nascimento <= 12){
        const txt = document.getElementById('txt').innerHTML = `Detectamos Homem com ${data_nascimento} anos`
        img.src = 'foto-crianca-homem.jpg'
    } else if (document.getElementById('sxfem').checked == true && data_nascimento <= 12){
        const txt = document.getElementById('txt').innerHTML = `Detectamos Mulher com ${data_nascimento} anos`
        img.src = 'foto-crianca-mulher.jpg'
    } else if (document.getElementById('sxmas').checked == true && data_nascimento < 21){
        const txt = document.getElementById('txt').innerHTML = `Detectamos Homem com ${data_nascimento} anos`
        img.src = 'foto-jovem-homem.jpg'
    } else if (document.getElementById('sxfem').checked == true && data_nascimento < 21){
        const txt = document.getElementById('txt').innerHTML = `Detectamos Mulher com ${data_nascimento} anos`
        img.src = 'foto-jovem-mulher.jpg'
    } else if (document.getElementById('sxmas').checked == true && data_nascimento < 50){
        const txt = document.getElementById('txt').innerHTML = `Detectamos Homem com ${data_nascimento} anos`
        img.src = 'foto-homem-adulto.jpg'
    } else if (document.getElementById('sxfem').checked == true && data_nascimento < 50){
        const txt = document.getElementById('txt').innerHTML = `Detectamos Mulher com ${data_nascimento} anos`
        img.src = 'foto-mulher-adulta.jpg'
    } else if (document.getElementById('sxmas').checked == true && data_nascimento >= 50){
        const txt = document.getElementById('txt').innerHTML = `Detectamos Homem com ${data_nascimento} anos`
        img.src = 'foto-idoso-homem.jpg'
    } else if (document.getElementById('sxfem').checked == true && data_nascimento >= 50){
        const txt = document.getElementById('txt').innerHTML = `Detectamos Mulher com ${data_nascimento} anos`
        img.src = 'foto-idoso-mulher.jpg'
    }
}