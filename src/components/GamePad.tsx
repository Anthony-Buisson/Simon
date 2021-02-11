import React from 'react';
import useGame from "./GameProvider";
import {chunk} from "../utils/sequence";
import PadTile from "./PadTile";

function GamePad () {
    const { tileToClick, sequence } = useGame();

    const pad = chunk(new Array(9).fill(0).map((a, i)=>i), 3);

    return (
        <div>
        <div>
            {pad.map((tileRow: any) => (
                <div>
                    {tileRow.map((tile: any, index: number) => (
                        <PadTile shouldClick={tile === tileToClick} value={tile}/>
                    ))}
                </div>
            ))}
        </div>
        <div>
            {sequence}
        </div>
        </div>
    )
}

export default GamePad;
