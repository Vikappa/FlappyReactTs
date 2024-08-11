import { useEffect, useRef, useState } from "react";
import React from 'react';
import { useSelector } from "react-redux";
import { RootType } from "../../store";

export interface TubeProps  {
    screenHeight: number,
    id: number,
}

const Tube: React.FC<TubeProps> = ({screenHeight, id}) => {

    // const speed = useSelector((state:RootType)=>state.options.speed)
    // const gameover = useSelector((state:RootType)=>state.flapflap.gameover)
    // const storedY = useSelector((state:RootType)=>state.bird.Y)
    const storedX = useSelector((state:RootType)=>state.bird.X)
    const points = useSelector((state:RootType)=>state.options.points)

    const thisOnDom = useRef(document.getElementById(`tube${id}`));

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

    useEffect(() => {
        if (thisOnDom.current) {
            thisOnDom.current.style.left = `${storedX}px`
        }
    }, [points])
    

    return (
        <div className="tube-wrapper"
        id={`id${id}`}
        >
            <div className="top-tube">
                {topLength.length > 0 ?
                topLength.map((item) => {
                        return (
                            <img className="top-tube-slice" src="/assets/img/base.png" key={item}/>
                        )
                    })
                    
                    :
                    ""
                }
                {topLength.length > 0 && <img className="topslice" src="/assets/img/top.png"/>}
            </div>
            <div className="bottom-tube" id="bottomTubeID">
            {bottomLength.length > 0 && <img className="topslice" src="/assets/img/top.png"/>}
            {bottomLength.length > 0 ?
                bottomLength.map((item) => {
                        return (
                            <img className="bottom-tube-slice" src="/assets/img/base.png" key={item}/>
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
