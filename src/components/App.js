import React from "react";
import TelaInicio from "./TelaInicio";
import TelaFlashcards from "./TelaFlashcards";

export default function App() {

   const [tela, setTela] = React.useState(true);

    return (
        <>
            {
                tela === true ? <TelaInicio setTela={setTela}/> : <TelaFlashcards />
            }
        </>

    );
}