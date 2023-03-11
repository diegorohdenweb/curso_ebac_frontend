// função que retorna a soma de dois números
function sum(a, b) {
    return a + b;
}

// função que retorna o quadrado de um número
function square(x) {
    return x * x;
}

// função que exibe uma mensagem de boas-vindas
function welcome(name) {
    console.log(`Bem-vindo, ${name}!`);
}

// chamada das funções
const result1 = sum(2, 3);
const result2 = square(4);
welcome('João');

// impressão dos resultados
console.log(`A soma é ${result1}`);
console.log(`O quadrado é ${result2}`);
