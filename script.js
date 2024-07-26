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
        enunciado: "Tempos depois, você finalmente resolve mudar de vida e decide que vai se mudar. Para onde você vai?",
        alternativas: [
            {
                texto: "Comprar um rancho no interior e viver uma vida na fazenda.",
                afirmacao: "Você também resolveu passar bons anos da sua vida em tranquilidade."
            },
            {
                texto: "Ir para um grande centro viver uma vida agitada.",
                afirmacao: "Você percebeu que uma vida calma não era seu objetivo, mas sim um carossel de emoções."
            }
        ]
    },
    {
        enunciado: "Agora você está na virada de 2048 para 2049, como você sse sente diante de todos os anos que passou?",
        alternativas: [
            {
                texto: "Feliz, se sentindo único no planeta.",
                afirmacao: "Já é 2049 e você olha para o horizonte, reparando em famílias felizes assistindo os fogos, lembrando de todos os bons momentos que passou em sua vida!"
            },
            {
                texto: "Triste, por não ter tido uma vida normal.",
                afirmacao: "Já é 2049 e você olha para o horizonte, reparando em famílias felizes assistindo os fogos, lembrando de todos os bons momentos que passou em sua vida!"
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
