const form = document.getElementById('form-exercicio');
let formValido = false;


function validaDanumero(numerodois, numeroum){
    const comparacaodosDois = parseInt(numerodois) > parseInt(numeroum);
    return comparacaodosDois;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numero_um = document.getElementById('numero_um').value;
    const numero_dois = document.getElementById('numero_dois').value;
    const msgSucesso = `Ok! O número ${numero_dois} é maior que ${numero_um}`;
    const msgErro = `Opa! o número ${numero_um} não é maior que ${numero_dois}. Preencha o formulário novamente!`;

    formValido = validaDanumero(numero_dois, numero_um);

    if(!formValido){
        alert(msgErro)
    } else {
        alert(msgSucesso)
    }   
    

})

