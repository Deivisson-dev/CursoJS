const atual = new Date();
const hora = atual.getHours();

const show = document.getElementById('show')
const img = document.getElementById('imagem')

if (hora >= 0 && hora < 12){
    const txt = document.getElementById('txt').innerHTML = `Agora são ${hora} horas`
    img.src = 'manha.jpg'
    const body = document.querySelector("body").style.background = "#e2cd9f"
} else if (hora >= 12 && hora < 18){
    const txt = document.getElementById('txt').innerHTML = `Agora são ${hora} horas`
    img.src = 'tarde.jpg'
    const body = document.querySelector("body").style.background = "#b9846f"
} else {
    const txt = document.getElementById('txt').innerHTML = `Agora são ${hora} horas`
    img.src = 'noite.jpg'
    const body = document.querySelector("body").style.background = "#515154"
}