/* Funcionários
Considerando os registros de 20 funcionários, contendo os campos: matrícula, nome e salário,
desenvolver um programa que, por meio de um menu, execute as seguintes etapas:

a) Cadastrar os 20 empregados e classificar os registros por número de matrícula.
b) Pesquisar um determinado empregado pelo número de matrícula.
c) Apresentar de forma ordenada (por matrícula) os registros dos empregados que recebem salários
acima de R$1.000,00.
d) Apresentar de forma ordenada (por matrícula) os registros dos empregados que recebem salários
abaixo de R$1.000,00.
e) Apresentar de forma ordenada (por matrícula) os registros dos empregados que recebem salários
iguais a R$1.000,00.
f) Sair do programa. */

var funcionarios = [];

function inicio() {
    var opcaoMenu = parseInt(prompt("O que você deseja fazer?\n1 - Cadastrar Funcionário\n2 - Pesquisar Funcionário\n3 - Ver funcionários c/ salário acima de R$1.000\n4 - Ver funcionários c/ salário abaixo de R$1.000\n5 - Ver funcionários c/ salário igual de R$1.000\n6- Sair"))

    switch (opcaoMenu) {
        case 1:
            cadastrarFuncionario();
            break;

        case 2:
            pesquisarFuncionario();
            break;

        case 3:
            mostrarFuncionarioAcimaMil();
            break;

        case 4:
            mostrarFuncionarioAbaixoMil();
            break;

        case 5:
            mostrarFuncionarioIgualMil();
            break;

        case 6:
            sair();
            break;

        default:
            break;
    }
}



function cadastrarFuncionario() {

    var pararCadastro = false;

    while (pararCadastro == false) {
        var matriculaFuncionario = parseInt(prompt("Digite o número de matricula do funcionario"))
        var nomeFuncionario = prompt("Agora digite o nome do funcionário")
        var salarioFuncionario = parseFloat(prompt("E agora por favor, o salário do funcionário"))

        var funcionario = { matricula: matriculaFuncionario, nome: nomeFuncionario, salario: salarioFuncionario }
        funcionarios.push(funcionario);

        let escolhaUsuario = parseInt(prompt("Deseja cadastrar mais um funcionario?\n1 - Sim\n2 - Não"))
        if (escolhaUsuario == 2) {
            pararCadastro = true;
        }
    }

    funcionarios.sort(function (a, b) {
        return a.matricula - b.matricula;
    });

    inicio();
}

function pesquisarFuncionario() {
    var BuscaMatriculaFuncionario = parseInt(prompt("Digite o número da matrícula do funcionário que você deseja procurar"));
    var buscaFuncionario = funcionarios.find(funcionario => funcionario.matricula == BuscaMatriculaFuncionario)

    if (buscaFuncionario) {
        alert(`Funcionário encontrado\nMatrícula:${buscaFuncionario.matricula}\nNome:${buscaFuncionario.nome}\nSalário: R$${buscaFuncionario.salario}`)
    } else {
        alert("Funcionário não encontrado")
    }

    inicio();
}

function mostrarFuncionarioAcimaMil() {
    var funcionariosAcimaMil = funcionarios.filter(f => f.salario > 1000);

    for (i = 0; i < funcionariosAcimaMil.length; i++) {
        alert(`Matrícula:${funcionariosAcimaMil[i].matricula}\nNome:${funcionariosAcimaMil[i].nome}\nSalário: R$${funcionariosAcimaMil[i].salario}`)
    }

    inicio();
}

function mostrarFuncionarioAbaixoMil() {
    var mostrarFuncionarioAbaixoMil = funcionarios.filter(f => f.salario < 1000);

    for (i = 0; i < mostrarFuncionarioAbaixoMil.length; i++) {
        alert(`Matrícula:${mostrarFuncionarioAbaixoMil[i].matricula}\nNome:${mostrarFuncionarioAbaixoMil[i].nome}\nSalário: R$${mostrarFuncionarioAbaixoMil[i].salario}`)
    }

    inicio();
}

function mostrarFuncionarioIgualMil(){
    var mostrarFuncionarioIgualMil = funcionarios.filter(f => f.salario == 1000);

    for (i = 0; i < mostrarFuncionarioIgualMil.length; i++) {
        alert(`Matrícula:${mostrarFuncionarioIgualMil[i].matricula}\nNome:${mostrarFuncionarioIgualMil[i].nome}\nSalário: R$${mostrarFuncionarioIgualMil[i].salario}`)
    }

    inicio();
}

function sair(){
    alert("Obrigado e até a próxima!")
}

inicio();