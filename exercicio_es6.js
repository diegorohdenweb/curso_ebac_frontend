let alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 7 },
    { nome: 'Fernando', nota: 5 },
    { nome: 'Ana', nota: 9 },
    { nome: 'Paulo', nota: 4 },
];

function aprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

console.log(aprovados(alunos));
