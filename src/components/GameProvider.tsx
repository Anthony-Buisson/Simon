import React, { createContext, useContext, useEffect, useState } from 'react';

interface GameContextState {
    isReady: boolean;
    setIsReady: (ready: boolean) => void;
    sequence: any;
    tileToClick: number | null;
    updateNextTile: () => void;
    level: number;
    progression: number;
}

const GameContext = createContext({} as GameContextState);

const Provider = ({ children }: { children: JSX.Element}) => {
    const [isReady, setIsReady] = useState(false);
    const [sequence, setSequence] = useState<any>(new Array(5).fill(0));
    const [level, setLevel] = useState<number>(0);
    const [tileToClick, setTileToClick] = useState<number|null>(null);
    const [nextTileIndex, setNextTileIndex] = useState<number>(0);
    const [progression, setProgression] = useState<number>(0);

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

    function updateNextTile() {
        const newTileIndex = nextTileIndex+1;
        if(newTileIndex > level && level < 4) {//next level
            setLevel(level+1);
            setTileToClick(sequence[0]);
            setNextTileIndex(0);
        } else if (newTileIndex > level) { //end of game
            console.log('FIN DU GAME');
            generateSequence();
            setIsReady(false);
        } else {
            setTileToClick(sequence[newTileIndex]);
            setNextTileIndex(newTileIndex)
        }
        setProgression(progression+1)
    }

    const providerValues = {
        isReady,
        sequence,
        setIsReady,
        tileToClick,
        level,
        updateNextTile,
        progression
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
