import React from 'react';
import GamePad from "./GamePad";
import useGame from "./GameProvider";
import GameScreen from "./GameScreen";
import GameMessage from "./GameMessage";

function Game () {
    const {gameState, gameDuration} = useGame();
    let content;
    if(gameState === 'started') {
        content = (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2 style={{textAlign: 'center'}}>Temps : {gameDuration} secondes</h2>
                <div style={{display: 'flex'}}>
                    <GameScreen />
                    <GamePad />
                </div>
            </div>
        )
    } else {
        content = (
            <GameMessage />
        )
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {content}
        </div>
    )
}

export default Game;
