import React from 'react';
import LogoPequeno from "../assets/logo-pequeno.png"
import Setinha from "../assets/setinha.png"
import Festa from "../assets/party.png"
import Triste from "../assets/sad.png"

export default function TelaFlashcards() {
    const deckPerguntas = [
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
    
    function Icone (props) {
        const icones = {
          acerto: <ion-icon name="checkmark-circle-outline"></ion-icon>,
          erro: <ion-icon name="close-circle-outline"></ion-icon>,
          duvida: <ion-icon name="help-circle-outline"></ion-icon>,
        };
        const {icone} = props;
        return <>{icones[icone]}</>
    }
    
    function Flashcard(props) {
        const [status, setStatus] = React.useState({ tela: "fechado", resultado: "" });
        const { tela, resultado } = status;

        if (tela === "fechado") {
            return (
                <div className="pergunta" onClick={() => setStatus({ ...status, tela: "abrirPergunta" })}>
                    <h2>Pergunta {props.numero} </h2>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            )
        }
        if (tela === "abrirPergunta") {
            return (
                <div className="pergunta-clicada">
                    <p>{props.pergunta}</p>
                    <img src={Setinha} alt="" onClick={() => { setStatus({ ...status, tela: "abrirResposta" }) }} />
                </div>
            )
        }
        if (tela === "abrirResposta") {
            return (
                <div className="resposta">
                    <p>{props.resposta}</p>
                    <div className="botoes">
                        <button className="erro" onClick={() => { setStatus({ tela: "perguntaRespondida", resultado: "erro" }) }}>Não lembrei</button>
                        <button className="duvida" onClick={() => { setStatus({ tela: "perguntaRespondida", resultado: "duvida" }) }}>Quase não lembrei</button>
                        <button className="acerto" onClick={() => { setStatus({ tela: "perguntaRespondida", resultado: "acerto" })}}>Zap!</button>
                    </div>
                </div>
            )
        }
        if (tela === "perguntaRespondida") {
            return (
                <div className="pergunta respondida">
                    <h2 className={resultado}>Pergunta {props.numero}</h2>                    
                    <Icone icone={resultado} />
                </div>
            )
        }
    }

    function Flashcards() {
        deckPerguntas.sort(embaralhar);
        return (
            <>
                {deckPerguntas.map((obj, index) => (<Flashcard key={index} numero={index + 1} pergunta={obj.pergunta} resposta={obj.resposta}/>))}
            </>

        )
    }

    const [perguntasRespondidas, setPerguntasRespondidas] = React.useState([]);

    function Footer() {
                
        if (perguntasRespondidas.length !== deckPerguntas.length) {
            return (
                <footer className="footer">
                    <h2>{perguntasRespondidas.length}/{deckPerguntas.length} CONCLUÍDOS</h2>
                    <div>
                        {perguntasRespondidas.map(resposta => <img src="" alt="" className="acerto" />)}
                    </div>
                </footer>
            )
        }
        if (perguntasRespondidas.length === deckPerguntas.length && perguntasRespondidas.length > 0) {
            if (perguntasRespondidas.includes("erro")) {
                return (
                    <footer className="footer-concluido">
                        <h1>
                            <img src={Triste} alt="" className="acerto" />
                            Putz...</h1>
                        <h2>Ainda faltam alguns...
                            Mas não desanime!</h2>
                        <h2>{perguntasRespondidas.length}/{deckPerguntas.length} CONCLUÍDOS</h2>
                        <div>
                            {perguntasRespondidas.map(resposta => <img src="" alt="" className="acerto" />)}
                        </div>
                    </footer>
                )
            } else {
                return (
                    <footer className="footer-concluido">
                        <h1>
                            <img src={Festa} alt="" className="acerto" />
                            Parabéns!</h1>
                        <h2>Você não esqueceu de nenhum flashcard!</h2>
                        <h2>{perguntasRespondidas.length}/{deckPerguntas.length} CONCLUÍDOS</h2>
                        <div>
                            {perguntasRespondidas.map(resposta => <img src="" alt="" className="acerto" />)}
                        </div>
                    </footer>
                )
            }
        }


    }

    return (
        <div className="tela-2 ">
            <header className="topo">
                <img src={LogoPequeno} alt="" />
                <h1>ZapRecall</h1>
            </header>

            <section className="conteudo">

                <Flashcards />

            </section>

            <Footer />

        </div>
    );
}

function embaralhar() {
    return Math.random() - 0.5;
}