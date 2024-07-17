const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que você acorda, percebe que é criança, e, aos 5 anos, tem uma chance de fazer tudo de novo. O que voçê pensa e faz?",
        alternativas: [
            {
                texto: "Que incrível! Agora tudo vai poder ser do jeito que eu sempre quis!",
                afirmacao: "No início, você se empolgou e achou que tudo ia dar certo. "
            },
            {
                texto: "Não acredito! Eu estava tão feliz com a minha vida anterior!",
                afirmacao: "No início, sentiu-se descontente com a ideia de ter que viver tudo novamente."
            }
        ]
    },
    {
        enunciado: "Ao começar na escola, começam a reparar que você se dá muito bem em todas as matérias e chamam seus pais para uma reunião. O que você começa a fazer?",
        alternativas: [
            {
                texto: "Começa a finir ser um aluno normal para evitar futuros problemas.",
                afirmacao: "Em tempos futuros, teve uma infância e adolescencia tranquila."
            },
            {
                texto: "Resolve assumir o papel de Gênio Mirim.",
                afirmacao: "Em pouco tempo, começam a pereber que você tem algo de diferente, então você passa sua infância e adolescência sob muita pressão."
            }
        ]
    },
    {
        enunciado: "Anos depois, você começa a acertar previsões sobre coisas que acontecerão no futuro. Como vê isso?",
        alternativas: [
            {
                texto: "Uma ótima oportunidade para ficar famoso e rico.",
                afirmacao: "No fim de sua adolescência, você entra na mídia com previsões do futuro, mas em poucos anos, você começa a ficar sem previsões e é considerado uma fraude."
            },
            {
                texto: "Melhor ir guardando isso para mim.",
                afirmacao: "No fim de sua adolescência, você resolve começar a trabalhar para viver uma vida normal."
            }
        ]
    },
    {
        enunciado: "Tempos depois,",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
