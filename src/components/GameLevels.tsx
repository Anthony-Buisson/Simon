import React from 'react';
import { Dot, Container } from '../style/components/GameLevels.style';
import useGame from "./GameProvider";

function GameLevels () {
    const { level, sequence } = useGame();

    return (
        <Container size={sequence.length*50}>
            {sequence.map((seq: number, index: number) => (
                <Dot active={index <= level} />
            ))}
        </Container>
    )
}

export default GameLevels;
