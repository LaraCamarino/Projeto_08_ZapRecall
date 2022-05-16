import React from "react";

function Pergunta(props) {
    return (
        <div className="pergunta-clicada">
            <p>{props.pergunta}</p>
            <img src="assets/setinha.png" alt="" />
        </div>
    );
}

export default function Perguntas() {
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
        <>
            {perguntas.map((obj, index) => (<Pergunta pergunta={obj.pergunta} key={index} />))}
        </>
    )
}