// Codigo padrão para escrita de texto na tela
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número Segreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um Número entre 1 e 10';

let listaNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarnumeroAleatorio();
 console.log(numeroSecreto);
let tentativas = 1;

// Padrão simplificado usando função
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1});
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número Secreto1');
    exibirTextoNaTela('p', 'Escolha um Número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute(){
    // pegar valor do campo
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);

    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';

        mensagemTentativa = "'Voçê acertou :), Parabéns! O número secreto é: " + numeroSecreto + ' Tentativas ' + tentativas;
        
        exibirTextoNaTela('p',  mensagemTentativa);

        // habiliatar botão novo Jogo.
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'Voçê errou :( , O chute é Maior que o Número secreto');
        }
        if(chute < numeroSecreto){
            exibirTextoNaTela('p', 'Voçê errou :( , O chute é Menor que o Número secreto');
            
            if(chute <= 0 ){
                exibirTextoNaTela('p', 'Número Inválido! Tente Novamnete.');
                }
            
            }
        tentativas++;
        limparCampo();
    }
    }
    
    function gerarnumeroAleatorio() {
       let numeroEscolhido = parseInt(Math.random() * 10 + 1);
       let quantidadeElemantoLista = listaNumeroSorteados.length;

       if(quantidadeElemantoLista == 10){
        listaNumeroSorteados = [];

       }

       if(listaNumeroSorteados.includes(numeroEscolhido)){
        return gerarnumeroAleatorio()
         }
         else{
            listaNumeroSorteados.push(numeroEscolhido);
            console.log(listaNumeroSorteados);
            return numeroEscolhido;
         }


    }
    function limparCampo(){
        chute = document.querySelector('input');
        chute.value = null;
    }

    function reiniciarJogo(){
        numeroSecreto = gerarnumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
        
    }