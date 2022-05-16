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

export default function Respostas() {
    return (
        <>
            {perguntas.map((obj, index) => (<Resposta resposta={obj.resposta} key={index} />))}
        </>
    )
}


                
