const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        DesmarcarBotaoSelecionado();

        SelecionarBotaoCarossel(botao);

        EsconderImagemAtiva();

        MostrarImagemDeFundo(indice);
        
    })
})

function MostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function SelecionarBotaoCarossel(botao) {
    botao.classList.add('selecionado');
}

function EsconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function DesmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
