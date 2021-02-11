import React, {useEffect, useState} from 'react';
import useGame from "./GameProvider";

function PadTileIndicator (props: any) {
    const { value } = props;
    const { level, sequence } = useGame();
    const [color, setColor] = useState<'blue' | 'black'>('black');

    function blink (delay: number) {
        setTimeout(()=>{
            setColor('blue');
        }, delay);
        setTimeout(()=> {
            setColor('black');
        }, 500 + delay);
    }

    useEffect(()=>{
        const currentSeq = [...sequence].splice(0, level+1);
        currentSeq.forEach((tile: number, index: number) => {
            if(tile === value) {
                blink(index*600)
            }
        });
    }, [level])

    return (
        <div style={{display: 'inline-block', width: '75px', height: '75px', backgroundColor: color}} />
    )
}

export default PadTileIndicator;
