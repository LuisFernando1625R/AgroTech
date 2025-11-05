//Declarações de Váriaveis
const cadastro = document.getElementById("cadastro-form") // Obtém o id no formulario usando dom
const listaUsuarios = document.getElementById("listaUsuarios") // Obtém a lista de usuário usando o dom

let usuariosCadastrados = []; // Array para armazenar os usuários cadastrados

//Função de validar email
function validarEmail(email){
    return email.includes("@") && email.includes(".");
}

//Função para exibir mensagem de erro
const exibirError =(inputElement,mensagem)=>{ //ARROW FUNCTION
    //DOM: manipula o elemento pai do input para adicionar uma classe de error
    inputElement.classlist.add("error");

    //DOM: cria um novo elemento para a emsagemd e erro
    // nextElementSibling é uma propriedade que retorna o próximo elemento, elementos que compartilha com o mesmo elemento pai
    let erroMensagem = inputElement.nextElementSibling;
    if(!erroMensagem || !erroMensagem.classList.contains("erro-mensage")){
        erroMensagem = document.createElement("small");
        erroMensagem.classList.add("erro-message")
        // Retorna o erro depois que não for validos os campos
        inputElement.parentNode.insertBefore(erroMessage, inputElement.nextElementSibling);
    }
    erroMensagem.textContent=mensagem;
    erroMensagem.style.color="red";

}

//Função para adicionar o Usuário
function adicionarUsusrio(usuario){
    //DOM: cria um novo item na lista (li)
    const li = document.createElement("li");
    let interessesTexto = "nenhum";

    //Condicional ternaria = se o usuario não escolher nenhuma opção aparece nenhum
    interessesTexto = usuario.interesses.length > 0 ? usuario.interesses.join(","): "nenhum";

    li.innerHTML = `
        <strong>Nome:</strong>${usuario.nome}<br>
        <strong>Email:</strong>${usuario.email}<br>
        <strong>Interesses:</strong>${usuario.interessesTexto}<br>
    `
    //DOM: adiciona o novo irtem na lista usuario;
    listaUsuarios.appendChild(li);

}

//Evento que vai executar o envio do formulario

