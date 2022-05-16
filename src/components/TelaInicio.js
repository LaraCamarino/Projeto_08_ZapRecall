export default function TelaInicio ({setTela}) {
    return (
        <div className="tela-inicio"> 
            <img src="assets/logo.png" alt=""/>
            <h1>ZapRecall</h1>
            <button onClick={() => setTela(false)} className="botao-iniciar">Iniciar Recall!</button>
        </div>
    )
}