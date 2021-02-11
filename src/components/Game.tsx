import React from 'react';
import Button from "./shared/Button";
import GamePad from "./GamePad";
import useGame from "./GameProvider";
import GameScreen from "./GameScreen";

function Game () {
    const {isReady, setIsReady} = useGame();
    let content;
    if(isReady) {
        content = (
            <div style={{display: 'flex'}}>
                <GameScreen />
                <GamePad />
            </div>
        )
    } else {
        content = <Button text={'Start'} action={() => setIsReady(true)} buttonStyle={'primary'} />
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default Game;
