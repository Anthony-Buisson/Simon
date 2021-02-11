import React from 'react';
import useGame from "./GameProvider";
import {chunk} from "../utils/sequence";
import PadTile from "./PadTile";

function Leaderboard () {
    const { tileToClick, sequence } = useGame();

    const pad = chunk(new Array(9).fill(0).map((a, i)=>i), 3);

    return (
        <div>
        <div>
            SCORES
        </div>
        </div>
    )
}

export default Leaderboard;
