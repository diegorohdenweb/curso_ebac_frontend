// função que retorna a soma de dois números
function sum(c, d) {
    return c + d;
}

// função que retorna o quadrado de um número
function square(z) {
    return z * z;
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
