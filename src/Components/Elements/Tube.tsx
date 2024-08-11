import { useEffect, useState } from "react";
import React from 'react';

export interface TubeProps  {
    screenHeight: number
}

const Tube: React.FC<TubeProps> = ({screenHeight}) => {
    const EMPTY_SPACE = 409;

    const [topLength, setTopLength] = useState<number[]>([]);
    const [bottomLength, setBottomLength] = useState<number[]>([]);

    useEffect(() => {
        const topSize = Math.random() * 50 + 2;
        const bottomSize = screenHeight - topSize - EMPTY_SPACE;

        const topArray: number[] = []
        const bottomArray: number[] = []

        for (let i = 0; i < topSize; i++) {
            topArray.push(i);
        }
        for (let i = 0; i < bottomSize; i++) {
            bottomArray.push(i);
        }

        setTopLength(topArray);
        setBottomLength(bottomArray);

        console.log(topArray, bottomArray);
        const bottomTube = document.getElementById('bottomTubeID');
        if (bottomTube) {
            bottomTube.style.top = `${ EMPTY_SPACE +20 }px`;
        }
    }, [screenHeight]);

    return (
        <div className="tube-wrapper">
            <div className="top-tube">
                {topLength.length > 0 ?
                topLength.map((item) => {
                        return (
                            <img className="top-tube-slice" src="/public/assets/img/base.png" key={item}/>
                        )
                    })
                    
                    :
                    ""
                }
                {topLength.length > 0 && <img className="topslice" src="/public/assets/img/top.png"/>}
            </div>
            <div className="bottom-tube" id="bottomTubeID">
            {bottomLength.length > 0 && <img className="topslice" src="/public/assets/img/top.png"/>}
            {bottomLength.length > 0 ?
                bottomLength.map((item) => {
                        return (
                            <img className="bottom-tube-slice" src="/public/assets/img/base.png" key={item}/>
                        )
                    })
                    :
                    ""
                }
            </div>
        </div>
    );
}

export default Tube;
