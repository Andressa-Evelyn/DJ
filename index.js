'use strict';

const sons = {
    'mi' : 'midnight-forest-184304.mp3',
    'me' : 'mellow-future-bass-bounce-on-it-184234.mp3',
    'd' : 'drive-breakbeat-173062.mp3',
    't' : 'titanium-170190.mp3'
}


const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div)
}

const exibir = (sons) => {
    Object.keys(sons).forEach(criarDiv);
}

const tocarSom = (letra) => {
    const audio = new Audio(`./sons/${sons[letra]}`);
    audio.play();
}

const ativarDiv = (evento) => {
const letra = evento.target.id;
tocarSom(letra);
}

exibir(sons);

document.getElementById('container').addEventListener('click',ativarDiv);