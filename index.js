function calcular() {
    min = inputTempo.value;
    distancia = inputDistancia.value;
    valordacorrida = 2 + distancia * 1.4 + min * 0.26;
    botaoCalcular.innerHTML = 'Total: R$ ' + valordacorrida.toFixed(2);
}
