function calcularMDC(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Exemplo de uso:
const numero1 = 40;
const numero2 = 60;
const mdc = calcularMDC(numero1, numero2);
console.log(`O MDC de ${numero1} e ${numero2} é ${mdc}`);