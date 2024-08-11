import { useSelector } from "react-redux"
import Bird from "./Elements/Bird"
import GameScreen from "./GameScreen"
import { RootType } from '../store';
import { useDispatch } from "react-redux";
import { addPoints } from "../reducers/optionsSlice";
import { useEffect } from "react";
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

    const handleFlapUp = () => {
      console.log('flap up')
      if(storedX >= 90 && !gameover ){
        dispatch(flapUp())
      }
    }

    useEffect(() => {

       if(storedX < 90){
        dispatch(setPosition({X:storedX+(speed/12), Y:storedY})) //aggiustamenti per il rendering
      } else {
        if(flap){
            dispatch(flapDown(gravity))
            dispatch(setPosition({X:90, Y:storedY-(flapPower)}))
        } else{
            dispatch(setPosition({X:90, Y:storedY+((gravity*8)-flapPower) }))
        }
      }

      if(storedY > 410){
        dispatch(setGameover())
        return
      }
      const timer = setTimeout(() => {
        dispatch(addPoints(speed/2.5*gravity))
      }, 18)

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
