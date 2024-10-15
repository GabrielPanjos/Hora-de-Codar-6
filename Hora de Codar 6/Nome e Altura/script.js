var registros = []
var contagem_de_registros = 0

for (let i = 1; i <= 15; i++) {
    registros.push({
        nome: "semnome",
        altura: "semaltura"
    })
}

function inicio() {
    let escolha = parseInt(prompt(`Escolha uma opção \n 1.) Cadastrar registro \n 2.) Apresentar registros \n 3.) Apresentar média das alturas \n 4.) Sair`))

    switch (escolha) {

        case 1:
            cadastrar()
            break
        case 2:
            apresentar()
            break
        case 3:
            media()
            break
        case 4:
            sair()
            break
        default:
            erro()
            break
    }
}

function cadastrar() {
    alert("Cadastrando")

    if (contagem_de_registros >= 15) {
        alert("Você ja alcançou a quantidade de registros máxima")
        inicio()
    }

    let nome = prompt("Qual o nome da pessoa que será registrada?")
    while (!isNaN(nome) || nome == "") {
        alert(`Uma pessoa não pode se chamar de ${nome}`)
        nome = prompt("Qual o nome da pessoa que será registrada?")
    }
    registros[contagem_de_registros].nome = nome

    let altura = parseFloat(prompt(`${nome} tem quanto de altura?`))
    while (isNaN(altura) || altura > 2.5 || altura < 0) {
        alert(`Altura inválida. Digite outra`)
        altura = parseFloat(prompt(`${nome} tem quanto de altura?`))
    }

    contagem_de_registros++
    alert(`${nome} registrado com sucesso!`)

    inicio()

}

function apresentar() {
    alert("Apresentando registror")



}

function media() {
    alert("Apresentando a Média")



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