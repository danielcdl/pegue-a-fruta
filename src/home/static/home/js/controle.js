var tela = document.getElementById("myCanvas");
var contexto = tela.getContext("2d");

var posX = 0;
var posY = 0;
var frutas = [];


contexto.fillRect(posX, posY, 10, 10);

document.body.addEventListener('keydown', teclaPressionada);

function teclaPressionada(pressionada) {
    const teclas = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    let tecla = pressionada.key
    

    if (teclas.includes(tecla) ) {
        contexto.clearRect(0, 0, tela.width, tela.height);
    }

    if (tecla == 'ArrowUp') {
        posY = Math.max(posY - 10, 0);
    }
    if (tecla == 'ArrowDown') {
        posY = Math.min(posY + 10, tela.height - 10);
    }
    if (tecla == 'ArrowLeft') {
        posX = Math.max(posX - 10, 0);
    }
    if (tecla == 'ArrowRight') {
        posX = Math.min(posX + 10, tela.width - 10);
    }

    for (var i in frutas) {
        coordenada = frutas[i];

        if (posX == coordenada.x && posY == coordenada.y) {
            frutas.splice(i, 1);
        }
    }

    contexto.fillStyle = 'red'
    contexto.fillRect(posX, posY, 10, 10);

    contexto.fillStyle = 'blue'
    for (var i in frutas) {
        coordenada = frutas[i];
        contexto.fillRect(coordenada.x, coordenada.y, 10, 10);
    }
}

function novaFruta() {
    let posX = Math.floor(Math.random() * Math.floor(tela.width));
    let posY = Math.floor(Math.random() * Math.floor(tela.height));
    posX -= posX % 10;
    posY -= posY % 10;

    frutas.push({'x': posX, 'y': posY});
    contexto.fillRect(posX, posY, 10, 10);
}

setInterval(novaFruta, 2000);