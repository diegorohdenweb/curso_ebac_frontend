class Funcionario {
    constructor(nome, salario) {
        if (new.target === Funcionario) {
            throw new TypeError("Não é possível instanciar uma classe abstrata.");
        }
        this.nome = nome;
        this.salario = salario;
    }

    obterNome() {
        return this.nome;
    }

    obterSalario() {
        return this.salario;
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario);
        this.departamento = departamento;
    }

    obterDepartamento() {
        return this.departamento;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, salario, linguagem) {
        super(nome, salario);
        this.linguagem = linguagem;
    }

    obterLinguagem() {
        return this.linguagem;
    }
}

const gerente1 = new Gerente("João", 10000, "TI");
const gerente2 = new Gerente("Maria", 12000, "RH");

const desenvolvedor1 = new Desenvolvedor("Fernanda", 8000, "JavaScript");

console.log(gerente1.obterNome()); // João
console.log(gerente1.obterDepartamento()); // TI

console.log(gerente2.obterNome()); // Maria
console.log(gerente2.obterDepartamento()); // RH

console.log(desenvolvedor1.obterNome()); // Fernanda
console.log(desenvolvedor1.obterLinguagem()); // JavaScript
