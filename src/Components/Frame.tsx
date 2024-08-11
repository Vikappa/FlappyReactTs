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
      if(!gameover && storedX >= frameX/5)
      dispatch(setPosition({X:storedX, Y:storedY-flapPower*2}))
         dispatch(flapUp())
    }

    useEffect(() => {
      console.log('flappower', flapPower, 'gravity', gravity)

    }, [points])
    

    useEffect(() => {

    if(storedX <= frameX/5){
      dispatch(setPosition({X:storedX+speed/5, Y:storedY}))
    } else {
      if(storedY >= frameY*8/10){
        dispatch(setGameover())
        return
      } else {
        if(flap){
          dispatch(setPosition({X:storedX, Y:storedY-flapPower}))
        } else {
          dispatch(setPosition({X:storedX, Y:storedY+gravity-flapPower}))
        }
        dispatch(flapDown(gravity/4))

      }
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
