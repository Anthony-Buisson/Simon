import React from 'react';
import { Container } from '../style/components/GameMessage.style';
import useGame from "./GameProvider";
import Button from "./shared/Button";

function GameMessage () {
    const { resetGame, gameDuration, gameState, pseudo, setPseudo, setGameState } = useGame();

    let messages = {
        title: 'Jeu du simon',
        subTitle: `prêt à commencer ?`,
        pseudo: true,
        button: 'Commencer'
    }

    const pseudoInput = (
        <>
            <label htmlFor="pseudo">Pseudo : </label>
            <input type="text" id={pseudo} onChange={(val)=>setPseudo(val.target.value)} value={pseudo} />
        </>
    )
    switch (gameState) {
        case 'finished':
            messages = {
                title: `Bien joué ${pseudo} !`,
                subTitle: `Simon réussi en ${gameDuration} secondes.`,
                pseudo: false,
                button: 'Recommencer'
            }
            break;
        case 'failed':
            messages = {
                title: 'Raté',
                subTitle: `retenter ?`,
                pseudo: false,
                button: 'oui'
            }
            break;
        default:
            break;
    }
    return (
        <Container>
            <h1>{messages.title}</h1>
            <h2>{messages.subTitle}</h2>
                {messages.pseudo && pseudoInput}
            <div>
                <Button text={'Quitter'} action={()=>setGameState('ready')} buttonStyle={'primary'} />
                <Button text={messages.button} action={resetGame} buttonStyle={'primary'} />
            </div>
        </Container>
    )
}

export default GameMessage;
