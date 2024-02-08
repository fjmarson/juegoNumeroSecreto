let numeroGenerado = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 100;

console.log(numeroGenerado);
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (isNaN(numeroDeUsuario) || numeroDeUsuario < 1 || numeroDeUsuario > numeroMaximo) {
        asignarTextoElemento('p', 'Ingresa un número válido dentro del rango.');
        return;
    }
    
    if (numeroDeUsuario === numeroGenerado) {
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos === 1 ? 'intento' : 'intentos')}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (intentos < 4) {
            if (numeroDeUsuario > numeroGenerado) {
                asignarTextoElemento('p', 'El número secreto es menor. Intenta de nuevo.');
            } else {
                asignarTextoElemento('p', 'El número secreto es mayor. Intenta de nuevo.');
            }
            intentos++;
            limpiarCaja();
        } else {
            asignarTextoElemento('p', `Agotaste los 4 intentos. El número secreto era ${numeroGenerado}.`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumeroSorteado.length == numeroMaximo) {
        
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
          
    } else {
        
    // Si el número generado está incluido en la lista

        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteado.push(numeroGenerado);}
            return numeroGenerado;
        }
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Y Andrés?? Vas a indicar un número del 1 al ${numeroMaximo}?`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de númros
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
