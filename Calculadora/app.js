function adicionar(valor) {
    const visor = document.getElementById('visor');
    visor.value = visor.value + valor;

}


// exemplo: adicionar("7") e adicionar("+")
// o visor passa a exibir: 7+

function limpar() {
    const visor = document.getElementById('visor')
    visor.value = '';

}

function calcular() {
    const visor = document.getElementById('visor');

    try {
        const resultado = eval(visor.value);

        if (resultado !== undefined) {
            visor.value = resultado;
        }
    } catch (erro) {
        visor.value = 'Erro';
    }
}

const potencia = (base, expoente) => base ** expoente;
// potencia(2, 3) retorna 8

const raizQuadrada = valor => Math.sqrt(valor);
// raizQuadrada(81) retorna 9

const resto = (dividendo, divisor) => dividendo % divisor;
// resto(17, 5) retorna 2

const valorAbsoluto = valor => Math.abs(valor);
// valorAbsoluto(-12) retorna 12