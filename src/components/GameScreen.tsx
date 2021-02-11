import React, {useEffect, useState} from 'react';
import useGame from "./GameProvider";
import {chunk} from "../utils/sequence";
import PadTile from "./PadTile";
import PadTileIndicator from "./PadTileIndicator";

function GameScreen () {
    const pad = chunk(new Array(9).fill(0).map((a, i)=>i), 3);

    const content = pad.map((tileRow: any) => (
        <div style={{height: '75px'}}>
            {tileRow.map((tile: any, index: number) => {
                return (
                    <PadTileIndicator value={tile}/>
                )
            })}
        </div>
    ))

    return (
        <div>
            {content}
        </div>
    )
}

export default GameScreen;
