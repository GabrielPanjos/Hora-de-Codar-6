var registros = []
var contagem_de_registros = 0

inicio()

function inicio() {
    let escolha = parseInt(prompt("Selecione uma opção \n \n 1.) Cadastrar funcionário \n 2.) Pesquisar funcionário \n 3.) Apresentar funcionários \n 4.) sair"))

    switch (escolha) {
        case 1:
            cadastrar_funcionario()
            break
        case 2:
            pesquisar_funcionario()
            break
        case 3:
            apresentar_funcionarios()
            break
        case 4:
            sair()
            break
        default:
            erro()
            break
    }
}

function cadastrar_funcionario() {

    // Não permitindo cadastrar caso esteja com o máximo de registros
    if (contagem_de_registros >= 20) {
        alert("Você ja alcançou a quantidade de registros máxima")
        inicio()
    }

    // Cadastrando
    let nome = prompt("Qual o nome do funcionário?")
    while (!isNaN(nome) || nome == "") {
        alert("Digite o nome do funcionário")
        nome = prompt("Qual o nome do funcionário?")
    }

    let matricula = parseInt(prompt(`Qual a matricula de ${nome}?`))
    while (isNaN(matricula) || matricula == "") {
        alert(`Digite a matrícula de ${nome}?`)
        matricula = parseInt(prompt(`Qual a matricula de ${nome}?`))
    }

    while (registros.find((funcionario) => funcionario.matricula === matricula)) {
        alert("Esta matrícula já está vinculada. Digite outra");
        matricula = parseInt(prompt(`Qual a matrícula de ${nome}?`));
        while (isNaN(matricula) || matricula == "") {
            alert(`Digite uma matrícula válida para ${nome}`);
            matricula = parseInt(prompt(`Qual a matrícula de ${nome}?`));
        }
    }

    let salario = parseFloat(prompt(`Quanto ${nome} ganha?`))
    while (isNaN(salario) || salario == "") {
        alert(`Digite o salário de ${nome}`)
        salario = parseFloat(prompt(`Quanto ${nome} ganha?`))
    }

    // Registrando o cadastro
    registros[contagem_de_registros] = { nome: nome, matricula: matricula, salario: salario }

    alert(`Usuário ${nome} cadastrado com sucesso!`)
    contagem_de_registros++

    inicio()

}

function pesquisar_funcionario() {

    if (registros.length === 0) {
        alert("Não há registros de funcionários. Registre para pesquisar");
        inicio()
    }

    let matricula = parseInt(prompt(`Digite a matricula que queria pesquisar`))
    while (isNaN(matricula) || matricula == "") {
        alert(`Digite uma matricula`)
        matricula = parseInt(prompt(`Digite a matricula que queria pesquisar`))
    }

    let pessoa = registros.find(registros => registros.matricula === matricula);

    if (pessoa) {
        alert(`Matricula ${pessoa.matricula} \n\n Nome: ${pessoa.nome} \n Salário: R$${pessoa.salario} por mês`)
    }

    inicio()

}

function apresentar_funcionarios() {
    let escolha = parseInt(prompt("Selecione uma opção \n \n 1.) Apresentar funcionários que recebem salários acima de R$1.000,00 \n 2.) Apresentar funcionários que recebem salários abaixo de R$1.000,00 \n 3.) Apresentar funcionários que recebem salários iguais a R$1.000,00 \n 4.) voltar"))

    switch (escolha) {
        case 1:
            apresentar_acima()
            break
        case 2:
            apresentar_abaixo()
            break
        case 3:
            apresentar_iguais()
            break
        case 4:
            inicio()
            break
        default:
            erro_apresentar()
            break

    }

    function apresentar_acima() {

        let acimaMil = registros.filter((funcionario) => funcionario.salario > 1000);

        acimaMil.sort((a, b) => a.matricula - b.matricula);

        if (acimaMil.length > 0) {
            let resultado = "Funcionários com salário acima de R$1.000,00:\n";
            acimaMil.forEach(funcionario => {
                resultado += `Matrícula: ${funcionario.matricula} - Nome: ${funcionario.nome} - Salário: R$${funcionario.salario}\n`;
            });
            alert(resultado);
        } else {
            alert("Não há funcionários com salário acima de R$1.000,00.");
        }

        inicio();
    }

    function apresentar_abaixo() {

        let abaixoMil = registros.filter((funcionario) => funcionario.salario < 1000);

        abaixoMil.sort((a, b) => a.matricula - b.matricula);

        if (abaixoMil.length > 0) {
            let resultado = "Funcionários com salário abaixo de R$1.000,00:\n";
            abaixoMil.forEach(funcionario => {
                resultado += `Matrícula: ${funcionario.matricula} - Nome: ${funcionario.nome} - Salário: R$${funcionario.salario}\n`;
            });
            alert(resultado);
        } else {
            alert("Não há funcionários com salário abaixo de R$1.000,00.");
        }

        inicio();
    }

    function apresentar_iguais() {

        let iguaisMil = registros.filter((funcionario) => funcionario.salario === 1000);

        iguaisMil.sort((a, b) => a.matricula - b.matricula);

        if (iguaisMil.length > 0) {
            let resultado = "Funcionários com salário igual a R$1.000,00:\n";
            iguaisMil.forEach(funcionario => {
                resultado += `Matrícula: ${funcionario.matricula} - Nome: ${funcionario.nome} - Salário: R$${funcionario.salario}\n`;
            });
            alert(resultado);
        } else {
            alert("Não há funcionários com salário igual a R$1.000,00.");
        }

        inicio();
    }

    function erro_apresentar() {
        alert('Por favor, informe um número entre 1 e 4');
        apresentar_funcionarios()
    }

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