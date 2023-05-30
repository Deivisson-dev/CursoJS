var now = new Date()
var hora = now.getHours()

console.log(`Agora são ${hora} horas`)
if (hora < 12){
    console.log('Bom dia ')
} else if (hora <= 18){
    console.log('Boa Tarde')
} else if (hora > 18){
    console.log('Boa Noite')
}