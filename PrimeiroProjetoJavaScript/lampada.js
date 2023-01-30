const turnOn = document.getElementById('turnOn');
const turnOf = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/lampadaAcesa.png'

    }
}
function lampOf() {
    if (!isLampBroken()) {
        lamp.src = './img/lampadaApagada.png'
    }
}

function lampbroken() {
    lamp.src = './img/quebrada.png'
}

turnOn.addEventListener('click', lampOn);
turnOf.addEventListener('click', lampOf);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOf);
lamp.addEventListener('dblclick', lampbroken);