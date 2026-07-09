// Banco de dados das salas de exposição
const bancoDeDadosSalas = [
    {
        id: "0",
        titulo: "A Diáspora Europeia e Asiática",
        conteudo: `
            <p>No final do século XIX e início do século XX, o mundo testemunhou um dos maiores movimentos humanos da história contemporânea. Impulsionados pelo sonho de uma vida melhor, pela fuga da miséria, de crises econômicas e de conflitos devastadores em suas terras natais, <strong>milhões de imigrantes cruzaram oceanos</strong> rumo ao desconhecido. Eles trouxeram na bagagem não apenas a esperança, mas a força de trabalho que ajudou a moldar a identidade, a cultura e a economia de novas nações.</p>

            <img src="https://raw.githubusercontent.com/anaandradesantos19-alt/projeto-parana/main/link-da-imagem" alt="Imigrantes desembarcando no porto no século XIX" onerror="this.style.display='none'">

            <p>Abaixo, explore as principais trajetórias que compuseram esse mosaico cultural fascinante:</p>

            <ul>
                <li><strong>Italianos:</strong> O maior fluxo migratório do período. Deixaram a península itálica devido à crise no campo e transformaram a cultura urbana e a produção cafeeira com suas tradições, culinária e forte espírito comunitário.</li>
                <li><strong>Alemães:</strong> Pioneiros na colonização de diversas regiões, estabeleceram pequenas propriedades agrícolas, introduzindo novas técnicas de cultivo, arquitetura enxaimel e a preservação rigorosa de suas raízes culturais e da língua.</li>
                <li><strong>Poloneses e Ucranianos:</strong> Enfrentando a opressão política e a escassez de terras na Europa Oriental, desbravaram matas densas no sul e interior, fundando colônias agrícolas resilientes que mantiveram vivas suas profundas tradições religiosas e folclóricas.</li>
                <li><strong>Japoneses:</strong> Iniciada formalmente em 1908, a imigração japonesa trouxe o rigor técnico e o conhecimento milenar para a agricultura. Superando barreiras linguísticas e preconceitos, revolucionaram a produção hortifrutigranjeira e enriqueceram a sociedade com sua filosofia de vida.</li>
            </ul>

            <p>Cada objeto, cada fotografia e cada relato preservado nesta sala celebra a coragem desses povos. Eles não apenas mudaram de país, mas <strong>reinventaram suas próprias histórias</strong> e ajudaram a construir o mundo moderno.</p>
        `
    },
    {
        id: "1",
        titulo: "Italianos",
        conteudo: `
            <p>Os imigrantes italianos representaram o maior fluxo migratório para o Paraná. Entre 1870 e 1920, milhares de famílias deixaram a Itália, principalmente do Vêneto, Lombardia e sul do país, fugindo da pobreza e da crise agrária.</p>
            <p>Estabeleceram-se em colônias agrícolas como Santa Felicidade (Curitiba), Colombo e Antonina, onde cultivavam uvas, trigo e produziam vinho. Sua influência é sentida até hoje na culinária, arquitetura e festas típicas.</p>
            <p><strong>Contribuições:</strong> Técnicas agrícolas avançadas, construção civil, gastronomia (polenta, risoto, vinho), música e festas tradicionais como a Festa da Uva.</p>
        `
    },
    {
        id: "2",
        titulo: "Alemães",
        conteudo: `
            <p>Os imigrantes alemães chegaram ao Paraná a partir de 1829, estabelecendo-se em regiões como Rio Negro, Campo Largo, Ponta Grossa e Curitiba. Trouxeram uma forte tradição de trabalho cooperativo e técnicas agrícolas modernas.</p>
            <p>Fundaram escolas, igrejas e mantiveram viva sua língua e cultura por gerações. A arquitetura enxaimel (fachwerk) é uma das marcas mais visíveis deixadas pelos colonos alemães na região.</p>
            <p><strong>Contribuições:</strong> Indústria, comércio, agricultura familiar, arquitetura enxaimel, festas típicas (Oktoberfest) e artesanato.</p>
        `
    },
    {
        id: "3",
        titulo: "Poloneses e Ucranianos",
        conteudo: `
            <p>A imigração polonesa e ucraniana para o Paraná começou no final do século XIX. Esses povos fugiam da opressão política, da pobreza e da falta de terras nos impérios russo e austro-húngaro.</p>
            <p>Estabeleceram colônias agrícolas em municípios como Mallet, Prudentópolis, Irati e Cruz Machado. Os ucranianos são especialmente conhecidos por suas icônicas igrejas de cúpulas em formato de cebola e pela decoração com ovos de Páscoa (pêssankas).</p>
            <p><strong>Contribuições:</strong> Agricultura diversificada, religiosidade marcante (igrejas ortodoxas e católicas de rito oriental), folclore rico em danças e músicas, bordados tradicionais.</p>
        `
    },
    {
        id: "4",
        titulo: "Japoneses",
        conteudo: `
            <p>A imigração japonesa para o Paraná começou oficialmente em 1908 com a chegada do navio Kasato Maru. Os primeiros imigrantes japoneses enfrentaram barreiras linguísticas, preconceito e condições de trabalho extremamente duras nas fazendas de café.</p>
            <p>Com o tempo, estabeleceram-se como agricultores independentes, revolucionando a produção hortifrutigranjeira. Hoje, a comunidade nikkei é parte fundamental da sociedade paranaense.</p>
            <p><strong>Contribuições:</strong> Técnicas agrícolas de precisão, cultivo de hortaliças e frutas, filosofia de trabalho (kodomo no tame ni — "pelas crianças"), festivais como o Tanabata e a culinária (sushi, tempurá, missô).</p>
        `
    }
];

// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('#navegacao-museu button');
    const salaContainer = document.getElementById('sala-exposicao');

    // Função para carregar uma sala
    function carregarSala(id) {
        const sala = bancoDeDadosSalas.find(s => s.id === id);
        if (!sala) return;

        salaContainer.innerHTML = `
            <div class="sala-exposicao ativa" id="sala-${sala.id}">
                <h2>${sala.titulo}</h2>
                ${sala.conteudo}
            </div>
        `;
    }

    // Função para ativar um botão
    function ativarBotao(botaoAtivo) {
        botoes.forEach(btn => btn.classList.remove('ativo'));
        botaoAtivo.classList.add('ativo');
    }

    // Adiciona evento de clique em cada botão
    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            const salaId = this.getAttribute('data-sala');
            carregarSala(salaId);
            ativarBotao(this);
        });
    });

    // Carrega a primeira sala (sala 0) ao iniciar
    carregarSala("0");
});
