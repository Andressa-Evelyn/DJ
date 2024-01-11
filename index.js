'use strict';

const sons = {
    'Midnight Forest' : 'midnight-forest-184304.mp3',
    'Mellow Future Bass' : 'mellow-future-bass-bounce-on-it-184234.mp3',
    'Drive Breakbeat' : 'drive-breakbeat-173062.mp3',
    'Titanium' : 'titanium-170190.mp3'
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
const letraPermitida = sons.hasOwnProperty(letra);
if(letraPermitida){
    tocarSom(letra);
}

}

exibir(sons);

document.getElementById('container').addEventListener('click',ativarDiv);