var registros = []
var contagem_de_registros = 0

for (let i = 1; i <= 10; i++) {
    registros.push({
        nome: "semnome",
        endereco: "semrendereco",
        telefone: "semtelefone"
    })
}

inicio()

function inicio() {
    let escolha = parseInt(prompt("Selecione uma opção \n \n 1.) Cadastrar registros \n 2.) Pesquisar registro \n 3.) Classificar registros \n 4.) Apresentar todos os registros \n 5.) sair"))

    switch (escolha) {
        case 1:
            cadastrar_registros()
            break
        case 2:
            pesquisar_registro()
            break
        case 3:
            classificar_registros()
            break
        case 4:
            apresentar_registros()
            break
        case 5:
            sair()
            break
        default:
            erro()
            break
    }
}

function cadastrar_registros() {
    alert("Vamos cadastrar um registro!")

    if (contagem_de_registros >= 10) {
        alert("Você ja alcançou a quantidade de registros máxima")
        inicio()
    }

    let nome = prompt("Qual o nome da pessoa que será registrada?")
    while (!isNaN(nome) || nome == "") {
        alert(`Uma pessoa não pode se chamar de ${nome}`)
        nome = prompt("Qual o nome da pessoa que será registrada?")
    }
    registros[contagem_de_registros].nome = nome

    let endereco = prompt(`Qual o endereço do(a) ${nome}?`)
    while (endereco == "") {
        alert(`Digite um endereço`)
        endereco = prompt(`Qual o endereço do(a) ${nome}?`)
    }
    registros[contagem_de_registros].endereco = endereco

    let telefone = prompt(`Qual o número de telefone do(a) ${nome}?`);
    while (isNaN(telefone) || telefone.length !== 11) {
        alert(`Por favor, insira um número de telefone válido com 11 dígitos.`);
        telefone = prompt(`Qual o número de telefone do(a) ${nome}?`);
    }
    registros[contagem_de_registros].telefone = telefone

    contagem_de_registros++
    alert(`${nome} registrado com sucesso!`)

    inicio()
}

function pesquisar_registro() {
    alert("Vamos pesquisar um registro!")

    let nome = prompt(`Digite o nome de quem quer pesquisar`).toUpperCase()
    while (!isNaN(nome) || nome == "") {
        alert("O nome que digitou é inválido")
        nome = prompt(`Digite o nome de quem quer pesquisar`)
    }

    let pessoa = registros.find(registro => registro.nome.toUpperCase() === nome);

    if (pessoa) {
        alert(`Nome: ${pessoa.nome} \nEndereço: ${pessoa.endereco} \nTelefone: ${pessoa.telefone}`);
    } else {
        alert("Nome não encontrado nos registros.");
    }

    inicio()
}

function classificar_registros() {
    alert("Vamos classificar os registros por ordem alfabética")

    registros.sort((a, b) => a.nome.localeCompare(b.nome));
    alert("Registros classificados com sucesso!");
    inicio()
}

function apresentar_registros() {
    alert("Vamor apresentar todos os registros")

    if (registros.length === 0) {
        alert("Não há registros cadastrados")
        inicio()
    }

    let todos_os_registros = ""
    for (let i = 0; i < registros.length; i++) {
        todos_os_registros += `${i + 1}° Registro:\nNome: ${registros[i].nome}\nEndereço: ${registros[i].endereco}\nTelefone: ${registros[i].telefone}\n\n`;
    }
    alert(todos_os_registros)
    inicio()
}

function erro() {
    alert('Por favor, informe um número entre 1 e 5');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(`Muito obrigado e até logo.`)
        window.close();
    } else {
        inicio();
    }
}