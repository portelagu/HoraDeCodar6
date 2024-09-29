/* Agenda
Considerando a necessidade de desenvolver uma agenda que contenha nomes, endereços e telefones de 10 pessoas, defina a estrutura de registro apropriada, o diagrama de blocos e a codificação de um programa que por meio do uso de um menu de opções, execute as seguintes etapas:

a) Cadastrar os 10 registros.
b) Pesquisar um dos 10 registros de cada vez pelo campo nome (usar o método seqüencial).
c) Classificar por ordem de nome os registros cadastrados.
d) Apresentar todos os registros.
e) Sair do programa de cadastro. */

var agenda = [];

function inicio() {
    var opcaoMenu = parseInt(prompt("O que você deseja fazer?\n1 - Cadastrar Contato(s)\n2 - Pesquisar Contato(s)\n3 - Classificação de Contato(s)\n4 - Apresentação de Contato(s)\n5 - Sair"));

    switch (opcaoMenu) {
        case 1:
            cadastrarContato();
            break;

        case 2:
            pesquisarContato();
            break;

        case 3:
            classificarContatos();
            break;

        case 4:
            apresentarContatos();
            break;

        case 5:
            sair();
            break;

        default:
            break;
    }
}

function cadastrarContato() {
    var cadastrarUmContato = true;

    while (cadastrarUmContato == true) {
        var nomeContato = prompt("Digite o nome do contato");
        var enderecoContato = prompt("Digite o endereço do contato");
        var telefoneContato = parseInt(prompt("Digite o número do contato"));
        var contato = { nome: nomeContato, endereco: enderecoContato, telefone: telefoneContato }
        agenda.push(contato);

        let escolha = parseInt(prompt("Deseja cadastrar mais um usuário?\n1 - Sim\n2 - Não"))
        while (escolha != 1 && escolha != 2) {
            escolha = parseInt(prompt("Escolha inválida. Digite novamente.\nDeseja cadastrar mais um usuário?\n1 - Sim\n2 - Não"))
        }
        if (escolha == 1 && agenda.length > 10) {
            alert("Desculpa. Limite máximo atiginido.")
        } else if (escolha == 1) {
            cadastrarUmContato = true;
        } else if (escolha == 2) {
            cadastrarUmContato = false;
        }
    }

    alert("Você será redirecionado(a) para a tela inicial.")
    inicio();
}

function pesquisarContato() {
    var pesquisaPorNome = prompt("Digite o nome do contato que você deseja buscar")
    var pararBusca = false;

    while (pararBusca == false) {
        for (i = 0; i < agenda.length; i++) {
            if (agenda[i].nome == pesquisaPorNome) {
                alert(`Contato encontrado.\nNome=${agenda[i].nome}\nEndereço=${agenda[i].endereco}\nTelefone=${agenda[i].telefone}`)
            }
        }

        let escolha = parseInt(prompt("Você deseja pesquisar outro contato?\n1 - Sim\n2 - Não"))
        if (escolha == 2) {
            pararBusca = true;
        }
    }

    inicio();
}

function classificarContatos() {
    agenda.sort((a, b) => a.nome.localeCompare(b.nome));
    alert("Estes são os contatos registrados na agenda classificado por ordem de nome")
    for (i=0; i < agenda.length; i++){
        alert(`Nome=${agenda[i].nome}\nEndereço=${agenda[i].endereco}\nTelefone=${agenda[i].telefone}`)
    }

    inicio();
}

function apresentarContatos(){
    alert("A seguir, será apresentado todos os contatos")
    for (i=0; i < agenda.length; i++){
        alert(`Nome=${agenda[i].nome}\nEndereço=${agenda[i].endereco}\nTelefone=${agenda[i].telefone}`)
    }

    inicio();
}

function sair(){
alert("Obrigado e até a próxima!")
}

inicio();