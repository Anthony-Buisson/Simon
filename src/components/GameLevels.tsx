import React from 'react';
import useGame from "./GameProvider";

function GameLevels () {
    const { level, sequence } = useGame();

    return (
        <div style={{width: sequence.length*50+'px', display: 'flex', justifyContent: 'space-around', margin: '20px'}}>
            {sequence.map((seq: number, index: number) => (
                <div style={{width: '15px', height: '15px', borderRadius: '15px', backgroundColor: index > level ? 'transparent' : 'darkBlue', border: '1px solid darkBlue'}}/>
            ))}
        </div>
    )
}

export default GameLevels;
