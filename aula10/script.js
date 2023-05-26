var box = document.getElementById('area');

box.addEventListener('click', clicar);
box.addEventListener('mouseenter', entrar);
box.addEventListener('mouseout', sair);

function clicar(){
        box.innerText = 'Clicou'
        box.style.background = 'brown'
    }

function entrar(){
        box.innerText = 'Entrou'
    }

function sair(){
        box.innerText = 'Saiu'
        box.style.background = 'green'
    }