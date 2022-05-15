function Perguntas(props) {
    return (
        <div className="pergunta">
            <h2>Pergunta</h2>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    );
}

function PerguntaClicada(props) {
    return (
        <div className="pergunta-clicada">
            <p>{props.pergunta}</p>
            <img src="assets/setinha.png" alt="" />
        </div>
    );
}

function Resposta(props) {
    return (
        <div className="resposta">
            <p>{props.resposta}</p>
            <div className="botoes">
                <button className="vermelho">Não lembrei</button>
                <button className="amarelo">Quase não lembrei</button>
                <button className="verde">Zap!</button>
            </div>
        </div>
    )
}


export default function TelaPerguntas() {

    const perguntas = [
        {
            pergunta: "O que é JSX?",
            resposta: "Uma extensão de linguagem do JavaScript"
        },
        {
            pergunta: "O React é __ ",
            resposta: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            pergunta: "Componentes devem iniciar com __ ",
            resposta: "letra maiúscula"
        },
        {
            pergunta: "Podemos colocar __ dentro do JSX ",
            resposta: "expressões"
        },
        {
            pergunta: "O ReactDOM nos ajuda __ ",
            resposta: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            pergunta: "Usamos o npm para __ ",
            resposta: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            pergunta: "Usamos props para __ ",
            resposta: "passar diferentes informações para componentes"
        },
        {
            pergunta: "Usamos estado (state) para __ ",
            resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        },
    ];

    return (
        <div className="tela-2 ">
            <header className="topo">
                <img src="assets/logo-pequeno.png" alt="" />
                <h1>ZapRecall</h1>
            </header>

            <section className="conteudo">

                {perguntas.map(() => (<Perguntas />))}

                {perguntas.map((obj) => (<PerguntaClicada pergunta={obj.pergunta} />))}

                {perguntas.map((obj) => (<Resposta resposta={obj.resposta} />))}



            </section>

            <footer className="bottom">0/4 CONCLUÍDOS</footer>
        </div>
    );
}

function embaralhar() {
    return Math.random() - 0.5;
}