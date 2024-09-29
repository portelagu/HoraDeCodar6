/* Qual a nota?
Considerando a necessidade de um programa que armazene o nome e as notas bimestrais de 20 alunos do curso de Técnicas de Programação, defina a estrutura de registro apropriada, o diagrama de blocos e a codificação de um programa que, por meio do uso de um menu de opções, execute as seguintes etapas:

a) Cadastrar os 20 registros (após o cadastro efetuar a classificação por nome).
b) Pesquisar os 20 registros, de cada vez, pelo campo nome. Nesta pesquisa o programa deverá
também apresentar a média do aluno e as mensagens: “Aprovado” caso sua média seja maior ou
igual a 5, ou “Reprovado” para média abaixo de 5.
c) Apresentar todos os registros, médias e a mensagem de aprovação ou reprovação.
d) Sair do programa de cadastro. */

var alunos = [];

function inicio() {
    var opcaoMenu = parseInt(prompt("O que você deseja fazer?\n1 - Realizar registro\n2 - Pesquisar registro\n3 - apresentar todos os registros\n4 - Sair"))

    switch (opcaoMenu) {
        case 1:
            realizarRegistro();
            break;

        case 2:
            pesquisarRegistro();
            break;

        case 3:
            apresentarRegistros();
            break;

        case 4:
            sair();
            break;

        default:
            break;
    }
}

function realizarRegistro() {

    if (alunos.length >= 20){
        alert("Quantidade de registros excedido.")
    }

    let pararRegistro = false;
    while (pararRegistro == false && alunos.length < 20) {
        var nomeDoAluno = prompt("Digite o nome do aluno")
        var av1 = parseFloat(prompt("Digite a nota AV1 do aluno"))
        var av2 = parseFloat(prompt("Digite a nota AV2 do aluno"))
        alert("Aluno registrado!")
        var mediaDoAluno = (av1 + av2) / 2;
        var statusDoAluno = "";
        if (mediaDoAluno >= 5) {
            statusDoAluno = "Aprovado"
        } else {
            statusDoAluno = "Reprovado"
        }

        var aluno = { nome: nomeDoAluno, av1: av1, av2: av2, media: mediaDoAluno, status: statusDoAluno }
        alunos.push(aluno);

        let escolhaUsuario = parseInt(prompt("Você deseja registrar mais um usuário?\n1 - Sim\n2 - Não"))

        while (escolhaUsuario != 1 && escolhaUsuario != 2) {
            escolhaUsuario = parseInt(prompt("Escolha inválida\nVocê deseja registrar mais um usuário?\n1 - Sim\n2 - Não"))
        }
        if (escolhaUsuario == 2) {
            pararRegistro = true
        }
    }

    alunos.sort((a,b) => a.nome.localeCompare(b.nome));

    inicio();
}

function pesquisarRegistro(){

    let buscaNomeAluno = prompt("Digite o nome do aluno que você deseja procurar")
    let buscarAluno = alunos.find(aluno => aluno.nome == buscaNomeAluno)
    let pararBusca = false

    while(pararBusca == false){

    if(buscarAluno){
        alert(`Nome: ${buscarAluno.nome}\nAV1: ${buscarAluno.av1}\nAV2: ${buscarAluno.av2}\nMédia: ${buscarAluno.media}\nStatus: ${buscarAluno.status}`)
    } else {
        alert("O aluno não foi encontrado.")
    }

    let escolhaUsuario = parseInt(prompt("Deseja buscar outro aluno?\n1 - Sim\n 2 - Não"))
    if (escolhaUsuario == 2){
        pararBusca = true;
    }
}
    inicio();
}

function apresentarRegistros(){
    for(i=0; i < alunos.length; i++){
        alert(`Nome:${alunos[i].nome}\nAV1: ${alunos[i].av1}\nAV2: ${alunos[i].av2}\nMédia: ${alunos[i].media}\nStatus: ${alunos[i].status}`)
    }
    alert("Fim da apresentação dos registros")
    inicio();
}

function sair(){
    alert("Obrigado e até a próxima!")
}

inicio();