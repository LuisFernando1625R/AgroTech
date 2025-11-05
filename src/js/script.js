//Declarações de Váriaveis
const cadastro = document.getElementById("cadastro-form") // Obtém o id no formulario usando dom
const listaUsuarios = document.getElementById("listaUsuarios") // Obtém a lista de usuário usando o dom

let usuariosCadastrados = []; // Array para armazenar os usuários cadastrados

//Função de validar email
function validarEmail(email) {
    return email.includes("@") && email.includes(".");
}

//Função para exibir mensagem de erro
const exibirError = (inputElement, mensagem) => { //ARROW FUNCTION
    //DOM: manipula o elemento pai do input para adicionar uma classe de error
    inputElement.classlist.add("error");

    //DOM: cria um novo elemento para a emsagemd e erro
    // nextElementSibling é uma propriedade que retorna o próximo elemento, elementos que compartilha com o mesmo elemento pai
    let erroMensagem = inputElement.nextElementSibling;
    if (!erroMensagem || !erroMensagem.classList.contains("erro-mensage")) {
        erroMensagem = document.createElement("small");
        erroMensagem.classList.add("erro-message")
        // Retorna o erro depois que não for validos os campos
        inputElement.parentNode.insertBefore(erroMensagem, inputElement.nextElementSibling);
    }
    erroMensagem.textContent = mensagem;
    erroMensagem.style.color = "red";

}

const removeErro = (inputElement) => {
    //DOM: remove a classe de erro
    inputElement.classList.remove("error");
    let erroMensagem = inputElement.nextElementSibling;
    if (erroMensagem && erroMensagem.classList.contains("erro-mensage")) {
        erroMensagem.remove();
    }

}

//Função para adicionar o Usuário
function adicionarUsuario(usuario) {
    //DOM: cria um novo item na lista (li)
    const li = document.createElement("li");
    let interessesTexto = "nenhum";

    //Condicional ternaria = se o usuario não escolher nenhuma opção aparece nenhum
    interessesTexto = usuario.interesses.length > 0 ? usuario.interesses.join(",") : "Nenhum";

    li.innerHTML = `
        <strong>Nome:</strong>${usuario.nome}<br>
        <strong>Email:</strong>${usuario.email}<br>
        <strong>Interesses:</strong>${interessesTexto}<br>
    `
    //DOM: adiciona o novo item na lista usuario;
    listaUsuarios.appendChild(li);

}

//Evento que vai executar o envio do formulario
cadastro.addEventListener("submit", function (e) {
    e.preventDefault(); //previne o comportamento padrão, não deixa fazer o reload da pagina automatico

    //DOM: declaração dos valores dos campos dos formulario
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const interessesCheck = document.querySelectorAll('input[name="interesses"]:checked');

    const nome = nomeInput.Value.trim(); //Remove espaços em branco no inicio e no fim
    const email = emailInput.value.trim();

    //VALIDAÇÃO: verifica se os campos estão prenchidos e válidos
    let isValid = true;

    //remove erros anteriores
    removeErro(nomeInput);
    removeErro(emailInput);


    // === compara e verifica o tipo da variavel
    if (nome === "") {
        exibirError(nomeInput, "O nome é obrigatório");
        isValid = false;
    }
    if (email === "") {
        exibirError(emailInput, "email Obrigatório");
        isValid = false;
    } else if (!validarEmail(email)) {
        exibirError(emailInput, "Por favor, insira um email válido")
        isValid = false;
    }
    //Se a validação falhar
    if (!isValid) {
        return;
    }

    //array para armazenar os interesses selecionados
    let interessesSelecionados = [];

    //FOR: percorre sobre os checkbox de interesses selecionados
    for (let i = 0; i < interessesCheck.length; i++) {
        interessesSelecionados.push(interessesCheck[i].value)
    }

    //objeto para armazenar o novo usuário
    const novousuario = {
        nome: nome,
        email: email,
        interesses: interessesSelecionados
    }
    //Adicionar o novo usuário so array de usuário cadastrado
    usuariosCadastrados.push(novousuario)

    //chama a função para adicioanr a lista na tela
    adicionarUsuario(novousuario);

    //limpa o formulario após o cadastro
    cadastro.reset();

    console.log("usuário cadastrado:", usuariosCadastrados)

})
