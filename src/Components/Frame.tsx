import { useSelector } from "react-redux"
import Bird from "./classes/Bird"
import GameScreen from "./GameScreen"
import { RootType } from '../store';

const Frame = () =>{

    const storedX = useSelector((state:RootType)=>state.bird.X)
    const storedY = useSelector((state:RootType)=>state.bird.Y)

    return(
        <div id="frame">
        <Bird x={storedX} y={storedY}/>
        <GameScreen/>
        </div>
    )
}

export default Frame