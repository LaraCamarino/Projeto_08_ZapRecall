import React from 'react';
import Perguntas from './Perguntas';
import Footer from './Footer';

function Flashcard(props) {
    return (
        <div className="pergunta">
            <h2>Pergunta {props.numero} </h2>
            <ion-icon name={play}></ion-icon>
        </div>
    );
}



export default function TelaFlashcards() {
   
    const numero = [1, 2, 3, 4, 5, 6, 7, 8];
      

    return (
        <div className="tela-2 ">
            <header className="topo">
                <img src="assets/logo-pequeno.png" alt="" />
                <h1>ZapRecall</h1>
            </header>

            <section className="conteudo">

                {numero.map((num, index) => (<Flashcard numero={index + 1} key={index} />))}
              
            </section>

            <Footer />
            
        </div>
    );
}

function embaralhar() {
    return Math.random() - 0.5;
}