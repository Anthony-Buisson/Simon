import React, {useState} from 'react';
import useGame from "./GameProvider";

function PadTile (props: any) {
    const { shouldClick, value } = props;
    const { updateNextTile, setGameState, clickEnabled } = useGame();
    const [color, setColor] = useState<'orange'| 'blue' | 'red'>('orange');

    function checkSequence () {
        if(!clickEnabled) {
            return;
        }
        if(shouldClick) {
            setColor('blue');
            setTimeout(()=>{
                setColor('orange')
            }, 1000);
            updateNextTile();
        } else {
            setColor('red')
            setTimeout(()=>{
                setColor('orange')
                setGameState('failed')
            }, 1000);
        }
    }
    return (
        <button onClick={checkSequence} style={{width: '75px', height: '75px', backgroundColor: color}}>{value}</button>
    )
}

export default PadTile;
