
function adicionaUsuario(inputNome, inputSobrenome, inputFilial, inputCidade, inputCargo, inputData, inputSalario) {
    const sectionUsuarioCadastrado = document.getElementById('funcionarioCadastrado');
    
    const paragrafoUsuario = document.createElement('p');
    paragrafoUsuario.innerHTML = 
    `
    <style>
        p {
            text-align: center;  
        } 
        p div strong {
            color: rgb(117, 40, 128);
        }
    </style>
    
    <p>
        <h3>Dados do Funcionário: </h3>
        <div><strong>Nome:</strong> ${inputNome} ${inputSobrenome}</div>
        <div><strong>Filial:</strong> ${inputFilial}</div>
        <div><strong>Cidade:</strong> ${inputCidade}</div>
        <div><strong>Cargo:</strong> ${inputCargo}</div>
        <div><strong>Data de admissão:</strong> ${inputData}</div>
        <div><strong>Salário:</strong> R$ ${inputSalario},00</div>
    </p>
    `;
  
    sectionUsuarioCadastrado.appendChild(paragrafoUsuario);
}

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputNome = document.getElementById('nome').value;
    const inputSobrenome = document.getElementById('sobrenome').value;
    const inputFilial = document.getElementById('filial').value;
    const inputCidade = document.getElementById('cid').value;
    const inputCargo = document.getElementById('cargo-funcionario').value;
    const inputData = document.getElementById('dataadmissao').value;
    const inputSalario = document.getElementById('sal').value;

  adicionaUsuario(inputNome, inputSobrenome, inputFilial, inputCidade, inputCargo, inputData, inputSalario);
});
