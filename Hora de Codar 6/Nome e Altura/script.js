var registros = [];
var contagem_de_registros = 0;

var menores = [];
var maiores = [];
var media = [];

function inicio() {
    let escolha = parseInt(prompt(`Escolha uma opção \n 1.) Cadastrar registro \n 2.) Apresentar registros \n 3.) Apresentar média das alturas \n 4.) Sair`));

    switch (escolha) {
        case 1:
            cadastrar();
            break;
        case 2:
            apresentar();
            break;
        case 3:
            media_altura();
            break;
        case 4:
            sair();
            break;
        default:
            erro();
            break;
    }
}

function cadastrar() {
    alert("Cadastrando");

    if (contagem_de_registros >= 15) {
        alert("Você já alcançou a quantidade máxima de registros.");
        inicio();
        return;
    }

    let nome = prompt("Qual o nome da pessoa que será registrada?");
    while (!isNaN(nome) || nome.trim() === "") {
        alert(`Uma pessoa não pode se chamar de ${nome}`);
        nome = prompt("Qual o nome da pessoa que será registrada?");
    }

    let altura = parseFloat(prompt(`${nome} tem quanto de altura?`));
    while (isNaN(altura) || altura > 2.5 || altura < 0) {
        alert(`Altura inválida. Digite outra`);
        altura = parseFloat(prompt(`${nome} tem quanto de altura?`));
    }

    registros[contagem_de_registros] = { nome: nome, altura: altura };

    if (altura <= 1.5) {
        menores.push({ nome: nome, altura: altura });
    } else if (altura > 1.5 && altura < 2.0) {
        media.push({ nome: nome, altura: altura });
    } else {
        maiores.push({ nome: nome, altura: altura });
    }

    contagem_de_registros++;
    alert(`${nome} registrado com sucesso!`);

    inicio();
}

function apresentar() {
    alert("Apresentando registros");

    let escolha = parseInt(prompt(`Escolha uma opção \n 1.) Apresentar menores ou iguais a 1.5m \n 2.) Apresentar maiores que 1.5m \n 3.) Apresentar entre 1.5m e 2.0m \n 4.) Voltar`));

    switch (escolha) {
        case 1:
            apresentarMenores();
            break;
        case 2:
            apresentarMaiores();
            break;
        case 3:
            apresentarMedia();
            break;
        case 4:
            inicio();
            break;
        default:
            alert('Por favor, informe um número entre 1 e 3');
            apresentar();
            break;
    }
}

// Função para apresentar menores ou iguais a 1.5m
function apresentarMenores() {
    if (menores.length === 0) {
        alert("Não há registros de pessoas menores ou iguais a 1.5m.");
    } else {
        let mensagem = "As pessoas menores ou iguais a 1.5m de altura são:\n\n";
        menores.forEach((registro) => {
            mensagem += `${registro.nome} - ${registro.altura}m\n`;
        });
        alert(mensagem);
    }
    apresentar();
}

// Função para apresentar maiores que 1.5m
function apresentarMaiores() {
    if (maiores.length === 0) {
        alert("Não há registros de pessoas maiores que 1.5m.");
    } else {
        let mensagem = "As pessoas maiores que 1.5m de altura são:\n\n";
        maiores.forEach((registro) => {
            mensagem += `${registro.nome} - ${registro.altura}m\n`;
        });
        alert(mensagem);
    }
    apresentar();
}

// Função para apresentar entre 1.5m e 2.0m
function apresentarMedia() {
    if (media.length === 0) {
        alert("Não há registros de pessoas entre 1.5m e 2.0m.");
    } else {
        let mensagem = "As pessoas entre 1.5m e 2.0m de altura são:\n\n";
        media.forEach((registro) => {
            mensagem += `${registro.nome} - ${registro.altura}m\n`;
        });
        alert(mensagem);
    }
    apresentar();
}

// Função para apresentar a média das alturas
function media_altura() {
    alert("Apresentando a Média");

    if (contagem_de_registros === 0) {
        alert("Não há registros para calcular a média.");
        inicio();
        return;
    }

    let soma = 0;
    for (let i = 0; i < contagem_de_registros; i++) {
        soma += registros[i].altura;
    }

    let media = soma / contagem_de_registros;
    alert(`A média das alturas é: ${media.toFixed(2)}m`);

    inicio();
}

// Função erro
function erro() {
    alert('Por favor, informe um número entre 1 e 4');
    inicio();
}

// Função sair
function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(`Muito obrigado e até logo.`);
        window.close();
    } else {
        inicio();
    }
}

// Iniciar o programa
inicio();
