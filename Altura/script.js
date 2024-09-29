/* Nome e Altura
Elaborar um programa que armazene o nome e a altura de 15 pessoas, por meio do uso de
registros. O programa deverá ser manipulado por um menu que execute as seguintes etapas:

a) Cadastrar os 15 registros.
b) Apresentar os registros (nome e altura) das pessoas menores ou iguais a 1.5m.
c) Apresentar os registros (nome e altura) das pessoas que sejam maiores que 1.5m.
d) Apresentar os registros (nome e altura) das pessoas que sejam maiores que 1.5m e menores que
2.0m.
e) Apresentar a média extraída de todas as alturas armazenadas.
f) Sair do programa. */

var pessoas = [];
var pessoasMenores = [];
var pessoasMaiores = [];
var pessoasEntreAltura = [];

function inicio() {
    var opcaoMenu = parseInt(prompt("O que você deseja fazer?\n1 - Cadastrar\n2 - Ver cadastro de pessoas menores ou iguais a 1.5m\n3 - Ver cadastro de pessoas maiores que 1.5m\n4 - Ver cadastro das pessoas maiores que 1.5m e menores q 2.0m\n5 - Ver média de alturas\n6 - Sair"));

    switch (opcaoMenu) {
        case 1:
            cadastrarPessoa();
            break;

        case 2:
            mostrarPessoasMenores();
            break;

        case 3:
            mostrarPessoasMaiores();
            break;

        case 4:
            mostrarPessoasEntreAltura();    
            break;

        case 5:
            mostrarMediaDeAltura();
            break;

        case 6:
            sair();
            break;

        default:
            break;

    }

}

function cadastrarPessoa() {

    pararCadastro = false;

    while (pararCadastro == false) {
        var nomeDaPessoa = prompt("Digite o nome da pessoa")
        var alturaDaPessoa = parseFloat(prompt("Agora informe a altura"))
        var pessoa = { nome: nomeDaPessoa, altura: alturaDaPessoa }
        pessoas.push(pessoa)

        if (alturaDaPessoa > 1.50) {
            pessoasMaiores.push(pessoa)
        }

        if (alturaDaPessoa <= 1.50) {
            pessoasMenores.push(pessoa)
        } 
        
        if (alturaDaPessoa > 1.50 && alturaDaPessoa < 2.0) {
            pessoasEntreAltura.push(pessoa)
        }

        let escolhaUsuario = parseInt(prompt("Deseja cadastrar mais uma pessoa?\n1 - Sim\n2 - Não"))
        if (escolhaUsuario == 2) {
            pararCadastro = true;
        }
    }

    inicio();
}

function mostrarPessoasMenores() {
    alert("Apresentando os registros das pessoas menores ou iguais a 1.5m.")
    for (i = 0; i < pessoasMenores.length; i++) {
        alert(`Nome:${pessoasMenores[i].nome}\nAltura:${pessoasMenores[i].altura}`)
    }
    inicio();
}

function mostrarPessoasMaiores(){
    alert("Apresentando os registros das pessoas maiores que 1.5m.")
    for (i = 0; i < pessoasMaiores.length; i++) {
        alert(`Nome:${pessoasMaiores[i].nome}\nAltura:${pessoasMaiores[i].altura}`)
    }
    inicio();
}

function mostrarPessoasEntreAltura(){
    alert("Apresentando os registros das pessoas maiores que 1.5m e menores que 2.0m")
    for (i = 0; i < pessoasEntreAltura.length; i++) {
        alert(`Nome:${pessoasEntreAltura[i].nome}\nAltura:${pessoasEntreAltura[i].altura}`)
    }
    inicio();
}

function mostrarMediaDeAltura(){
    var somaTotal = 0;
    for(i=0; i < pessoas.length; i++){
        somaTotal+= pessoas[i].altura;
    }

    var media = somaTotal / pessoas.length;
    alert(`A média de altura entre as pessoas cadastradas é: ${media}`);
    inicio();
}

function sair(){
    alert("Obrigado e até a próxima!")
}

inicio();