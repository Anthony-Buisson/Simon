import React, {useEffect, useState} from 'react';
import useGame from "./GameProvider";
import {chunk} from "../utils/sequence";
import PadTile from "./PadTile";
import {getScores} from "../api/wrapper";

interface Score {
    score: number;
    date: number;
    pseudo: string;
}

function Leaderboard () {
    const [scores, setScores] = useState<Score[]>([]);
    const {gameState} = useGame();

    async function fetch() {
        const { data } = await getScores();
        setScores(data.reverse());
    }

    useEffect(()=> {
         fetch();
    }, [gameState])

    return (
        <table style={{border: '1px solid black', marginTop: '50px'}}>
            <thead>
                <th>Pseudo</th>
                <th>Date</th>
                <th>Score</th>
            </thead>
            {scores.map(score => (
                <tr>
                    <td>{score.pseudo}</td>
                    <td>{new Date(score.date*1).toLocaleDateString()}</td>
                    <td>{score.score} secondes</td>
                </tr>
            ))}
        </table>
    )
}

export default Leaderboard;
