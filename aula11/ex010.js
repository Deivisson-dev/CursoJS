function calcVel(){
    const velocidade = document.getElementById('vel');
    const resultado = document.getElementById('resultado');
    
    const vel = Number(velocidade.value)

    resultado.innerHTML = `Sua Velocidade atual é de ${vel}`
    
    if (vel > 60){
        resultado.innerHTML += `Você está multado por excesso de velocidade`
    }
    resultado.innerHTML += `Dirija sempre com cinto de segurança`
}
