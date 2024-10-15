var registros = []
var contagem = 0
var bimestre = 1

// Criando a lista
for (let i = 0; i <= 20; i++) {
    registros.push({
        nome: "semnome",
        nota1: "semnota",
        nota2: "semnota",
        nota3: "semnota",
        nota4: "semnota",
    })
}

inicio()

function inicio() {
    let escolha = parseInt(prompt(`Escolha uma opção \n 1.) Cadastrar registro \n 2.) Pesquisar registro \n 3.) Apresentar registros \n 4.) Sair`))

    switch (escolha) {

        case 1:
            cadastrar_aluno()
            break
        case 2:
            pesquisar_aluno()
            break
        case 3:
            apresentar_aluno()
            break
        case 4:
            sair()
            break
        default:
            erro()
            break
    }
}

function cadastrar_aluno() {
    alert("Vamos cadastrar um aluno!")

    let aluno = prompt("Qual o nome do aluno?")
    while (!isNaN(aluno) || aluno === "") {
        alert("Nome inválido. Digite um nome")
        aluno = prompt("Qual o nome do aluno?")
    }

    registros[contagem].nome = aluno

    while (bimestre <= 4) {
        let nota = parseFloat(prompt(`Que nota o aluno ${aluno} tirou no ${bimestre}° bimestre?`))
        while (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Nota inválida. Digite uma nota")
            nota = parseFloat(prompt(`Que nota o aluno ${aluno} tirou no ${bimestre}° bimestre?`))
        }

        switch (bimestre) {
            case 1:
                registros[contagem].nota1 = nota
                break
            case 2:
                registros[contagem].nota2 = nota
                break
            case 3:
                registros[contagem].nota3 = nota
                break
            case 4:
                registros[contagem].nota4 = nota
                break
        }

        bimestre++
    }

    alert(`Aluno ${aluno} cadastrado com sucesso!`)
    bimestre = 1
    contagem++

    let registrar_novamente = prompt("Deseja registrar mais um aluno? S/N").toUpperCase()
    while (registrar_novamente !== "S" && registrar_novamente !== "N") {
        alert("Digite S/N")
        registrar_novamente = prompt("Deseja registrar mais um aluno? S/N").toUpperCase()
    }

    if (registrar_novamente === "S") {
        cadastrar_aluno()
    } else if (registrar_novamente === "N") {
        inicio()
    }

}

function pesquisar_aluno() {
    alert("Quer pesquisar um aluno?")

    let nome = prompt("Digite o nome do aluno").toUpperCase()
    while (!isNaN(nome) || nome === "") {
        alert("Nome inválido. Digite um nome")
        nome = prompt("Qual o nome do aluno?")
    }

    let pessoa = registros.find(registro => registro.nome.toUpperCase() === nome);



    if (pessoa) {

        let aprovado_ou_reprovado = ""
        let media = (pessoa.nota1 + pessoa.nota2 + pessoa.nota3 + pessoa.nota4) / 4
        if (media >= 5) {
            aprovado_ou_reprovado = "Aprovado"
        } else if (media < 5) {
            aprovado_ou_reprovado = "Reprovado"
        }

        alert(`Nome: ${pessoa.nome} \nNota do primeiro bimestre: ${pessoa.nota1} \nNota do segundo bimestre: ${pessoa.nota2} \nNota do terceiro bimestre: ${pessoa.nota3} \nNota do quarto bimestre: ${pessoa.nota4} \n\n Média do aluno: ${media} \nAluno ${aprovado_ou_reprovado}!`);
    } else {
        alert("Nome não encontrado nos registros.");
    }

    inicio()

}

function apresentar_aluno() {
    alert("Vamos apresentar todos os alunos");

    if (contagem === 0) {
        alert("Você não possui registros.");
        inicio();
        return;
    }

    let todos_os_registros = "";

    for (let i = 0; i < contagem; i++) {

        let media = (registros[i].nota1 + registros[i].nota2 + registros[i].nota3 + registros[i].nota4) / 4;

        let aprovado_ou_reprovado = "";

        if (media >= 5) {
            aprovado_ou_reprovado = "Aprovado";
        } else {
            aprovado_ou_reprovado = "Reprovado";
        }

        todos_os_registros += `${i + 1}° Aluno: ${registros[i].nome} \nMédia do aluno: ${media.toFixed(2)} \nAluno ${aprovado_ou_reprovado}!\n\n`;
    }

    alert(todos_os_registros);
    inicio();
}


function erro() {
    alert('Por favor, informe um número entre 1 e 4');
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