function encontrarIndicesMaiorEMenorValores(array) {
    if (array.length === 0) {
        return null;
    }

    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[indiceMaior]) {
            indiceMaior = i;
        }
        if (array[i] < array[indiceMenor]) {
            indiceMenor = i;
        }
    }

    return { indiceMaior, indiceMenor };
}

const meuArray = [10, 5, 8, 22, 3];
const indices = encontrarIndicesMaiorEMenorValores(meuArray);
console.log(`Índice do maior valor: ${indices.indiceMaior}`);
console.log(`Índice do menor valor: ${indices.indiceMenor}`);