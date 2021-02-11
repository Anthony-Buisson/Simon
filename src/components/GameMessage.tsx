import React from 'react';
import useGame from "./GameProvider";
import Button from "./shared/Button";

function GameMessage () {
    const { resetGame, gameDuration, gameState } = useGame();

    let messages = {
        title: 'Jeu du simon',
        subTitle: `prêt à commencer ?`,
        button: 'Commencer'
    }
    console.log(messages)

    switch (gameState) {
        case 'finished':
            messages = {
                title: 'Bien joué !',
                subTitle: `Simon réussi en ${gameDuration} secondes.`,
                button: 'Recommencer'
            }
            break;
        case 'failed':
            messages = {
                title: 'Raté',
                subTitle: `retenter ?`,
                button: 'oui'
            }
            break;
        default:
            break;
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <h1>{messages.title}</h1>
            <h2>{messages.subTitle}</h2>
            <div>
                <Button text={messages.button} action={resetGame} buttonStyle={'primary'} />
            </div>
        </div>
    )
}

export default GameMessage;