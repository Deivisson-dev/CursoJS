function somar(){
    const tone = document.getElementById('txtone');
    const ttwo = document.getElementById('txttwo');
    const resultado = document.getElementById('res')
    const n1 = Number(tone.value);
    const n2 = Number(ttwo.value);
    var soma = n1 + n2
    resultado.innerHTML = `A Soma entre ${n1} e ${n2} é igual a ${soma}`
}