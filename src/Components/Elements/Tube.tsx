import { useEffect, useState, useRef } from "react";
import React from 'react';
import { useSelector } from "react-redux";
import { RootType } from "../../store";
import { useDispatch } from "react-redux";
import { setGameover } from "../../reducers/flapReducer";
import { setPointsEditable } from "../../reducers/optionsSlice";

export interface TubeProps  {
    screenHeight: number,
    id: number,
    screenWidth: number,
}

const Tube: React.FC<TubeProps> = ({screenHeight, id, screenWidth}) => {

    const dispatch = useDispatch()
    const speed = useSelector((state:RootType)=>state.options.speed)
    const [deltaX, setDeltaX] = useState(800)
    const points = useSelector((state:RootType)=>state.options.points)
    const storedX = useSelector((state: RootType) => state.bird.X)

    const EMPTY_SPACE = 350

    const topSizeRef = useRef(Math.random() * 50 + 2);
    const topSize = topSizeRef.current;
    const bottomSizeRef = useRef((screenHeight?screenHeight:450) - topSize - EMPTY_SPACE);
    const bottomSize = bottomSizeRef.current;
    const birdX = useSelector((state:RootType)=>state.bird.X)
    const birdY = useSelector((state:RootType)=>state.bird.Y)

    const [topLength, setTopLength] = useState<number[]>([])
    const [bottomLength, setBottomLength] = useState<number[]>([])

    useEffect(() => {
        const topArray: number[] = []
        const bottomArray: number[] = []

        for (let i = 0; i < topSize; i++) {
            topArray.push(i);
        }
        for (let i = 0; i < bottomSize; i++) {
            bottomArray.push(i)
        }

        setTopLength(topArray)
        setBottomLength(bottomArray)

    }, [screenHeight, topSize, bottomSize])

 const checkCollision = () => {
        const tubeLeftEdge = deltaX;
        const tubeRightEdge = deltaX + 60;
        console.log(topSize  +EMPTY_SPACE -bottomSize, birdY)
        if(!(storedX <= screenWidth / 4)){
        if (
            birdX+10 >= tubeLeftEdge &&
            birdX+10 <= tubeRightEdge &&
            (
                birdY+10 <= topSize * 4 +30 || 
                birdY+10 >= topSize  + EMPTY_SPACE -bottomSize 
            )
        ) {                
            document.documentElement.style.setProperty('--background-speed', `${0}s`)
            document.documentElement.style.setProperty('--floor-speed', `${0}s`)
            dispatch(setPointsEditable(false))
            dispatch(setGameover())

            return
        }
    }
    }
    

    useEffect(() => {
        setDeltaX(deltaX - speed)
        checkCollision()
    }, [points])    

    return (
        <div className="tube-wrapper"
        id={`id${id}`}
        style={{
            left: `${deltaX}px`
        }}
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
            <div className="bottom-tube" id="bottomTubeID"
            style={{
                top: `${(topSize*4)+EMPTY_SPACE/1.75}px`
            }}
            >
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
