import React, {useEffect, useState} from 'react';
import useGame from "./GameProvider";

function PadTileIndicator (props: any) {
    const { value } = props;
    const { level, sequence, setClickEnabled } = useGame();
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
                if(index === 0) {
                    setClickEnabled(false)
                }
                if(index === currentSeq.length-1) {
                    setTimeout(()=>setClickEnabled(true), index*600+500)
                }
                blink(index*600)
            }
        });
    }, [level])

    return (
        <div style={{display: 'inline-block', width: '75px', height: '75px', backgroundColor: color}} />
    )
}

export default PadTileIndicator;
