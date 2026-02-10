function calcularNota(notas) {
    let suma = 0;
    let pesos = 0;

    for (let i = 0; i < notas.length; i++) {
        suma = suma + (notas[i].score * notas[i].weight);
        pesos = pesos + notas[i].weight;
    }

    const resultado = suma / pesos;
    return resultado;
}

function calcularPercentil(p, numeros) {
    if (numeros.length === 0) {
        return 0;
    }

    const ordenados = [];
    for (let i = 0; i < numeros.length; i++) {
        ordenados[i] = numeros[i];
    }

    for (let i = 0; i < ordenados.length; i++) {
        for (let j = 0; j < ordenados.length - 1; j++) {
            if (ordenados[j] > ordenados[j + 1]) {
                let temp = ordenados[j];
                ordenados[j] = ordenados[j + 1];
                ordenados[j + 1] = temp;
            }
        }
    }

    if (p <= 0) {
        return ordenados[0];
    }
    if (p >= 100) {
        return ordenados[ordenados.length - 1];
    }

    const posicion = Math.ceil((ordenados.length * p) / 100) - 1;

    return ordenados[posicion];
}

module.exports = { calcWeightedGrade: calcularNota, percentile: calcularPercentil };