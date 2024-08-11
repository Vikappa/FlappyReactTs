import { useSelector } from "react-redux"
import Bird from "./Elements/Bird"
import GameScreen from "./GameScreen"
import { RootType } from '../store';
import { useDispatch } from "react-redux";
import { addPoints } from "../reducers/optionsSlice";
import { useEffect, useState } from "react";
import { setPosition } from "../reducers/birdSlice";
import { flapDown, flapUp, setGameover } from "../reducers/flapReducer";

const Frame = () => {
    const dispatch = useDispatch()
    const storedX = useSelector((state:RootType)=>state.bird.X)
    const storedY = useSelector((state:RootType)=>state.bird.Y)
    const points = useSelector((state:RootType)=>state.options.points)
    const speed = useSelector((state:RootType)=>state.options.speed)
    const gravity = useSelector((state:RootType)=>state.options.gravity)
    const flap = useSelector((state:RootType)=>state.flapflap.flap)
    const flapPower = useSelector((state:RootType)=>state.flapflap.flapPower)
    const gameover = useSelector((state:RootType)=>state.flapflap.gameover)

    const [frameX, setFrameX] = useState(0)
    const [frameY, setFrameY] = useState(0)

    useEffect(() => {
      setFrameX(document.getElementById('frame')?.offsetWidth || 0) 
      setFrameY(document.getElementById('frame')?.offsetHeight || 0) 
    }, [])

    const handleFlapUp = () => {
      console.log('StoredX', storedX, 'StoredY', storedY, 'FrameX', frameX, 'FrameY', frameY)
         dispatch(flapUp())
    }

    useEffect(() => {


    dispatch(setPosition({X:storedX, Y:storedY+speed}))

    if(storedY >= frameY*8/10){
      dispatch(setGameover())
      return
    }
        

      const timer = setTimeout(() => {
        dispatch(addPoints(speed/gravity))
      }, 20)
      return () => clearTimeout(timer)
    }, [points])
    
    return(
        <div id="frame">
        <Bird x={storedX} y={storedY}/>
        <GameScreen handleFlapUp={handleFlapUp} />
        </div>
    )
}

export default Frame
