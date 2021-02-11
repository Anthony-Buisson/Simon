import React, { createContext, useContext, useEffect, useState } from 'react';
import {addScore} from "../api/wrapper";

interface GameContextState {
    gameState: 'ready' | 'started' | 'finished' | 'failed';
    setGameState: (state: 'ready' | 'started' | 'finished' | 'failed') => void;
    sequence: any;
    tileToClick: number | null;
    updateNextTile: () => void;
    level: number;
    progression: number;
    resetGame: () => void;
    gameDuration: number;
    clickEnabled: boolean;
    setClickEnabled: (enabled: boolean) => void;
    pseudo: string;
    setPseudo: any;
}

const GameContext = createContext({} as GameContextState);

const Provider = ({ children }: { children: JSX.Element}) => {
    const [gameState, setGameState] = useState<'ready' | 'started' | 'finished' | 'failed'>('ready');
    const [sequence, setSequence] = useState<any>(new Array(5).fill(0));
    const [level, setLevel] = useState<number>(0);
    const [tileToClick, setTileToClick] = useState<number|null>(null);
    const [nextTileIndex, setNextTileIndex] = useState<number>(0);
    const [progression, setProgression] = useState<number>(0);
    const [gameDuration, setGameDuration] = useState<number>(0);
    const [clickEnabled, setClickEnabled] = useState<boolean>(false);
    const [pseudo, setPseudo] = useState<string>('User');

    function generateSequence() {
        const newSequence = sequence.map((seq: number) => Math.floor(Math.random()*100 % 9));
        setSequence(newSequence);
        setNextTileIndex(0);
        setTileToClick(newSequence[0]);
        setLevel(0);
    }

    useEffect(()=>{
        generateSequence();
    }, [])

    useEffect(()=>{
        let interval: any;
        if (gameState === 'started') {
            interval = setInterval(()=>{
                setGameDuration(duration => duration+1);
            }, 1000);
        } else if (gameState === "finished" || gameState === "failed") {
            clearInterval(interval);
        }
        return ()=>clearInterval(interval);
    }, [gameState])

    function updateNextTile() {
        const newTileIndex = nextTileIndex+1;
        if(newTileIndex > level && level < 4) {//next level
            setLevel(level+1);
            setTileToClick(sequence[0]);
            setNextTileIndex(0);
        } else if (newTileIndex > level) { //end of game
            setGameState('finished');
            addScore({
                pseudo,
                date: Date.now().toFixed(),
                score: gameDuration
            })
        } else {
            setTileToClick(sequence[newTileIndex]);
            setNextTileIndex(newTileIndex)
        }
        setProgression(progression+1)
    }

    function resetGame() {
        generateSequence();
        setGameState('started');
    }

    const providerValues = {
        gameState,
        sequence,
        setGameState,
        tileToClick,
        level,
        updateNextTile,
        progression,
        resetGame,
        gameDuration,
        clickEnabled,
        setClickEnabled,
        pseudo,
        setPseudo
    };

    return (
        <GameContext.Provider value={providerValues}>
            {children}
        </GameContext.Provider>
    );
};

export const GameProvider = Provider;

export default function useGame(): GameContextState {
    return useContext(GameContext);
}
