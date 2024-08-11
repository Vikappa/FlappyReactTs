import { useDispatch } from "react-redux"
import { setRestart } from "../reducers/flapReducer"
import { setPosition } from "../reducers/birdSlice"
import { resetPoints } from "../reducers/optionsSlice"
import { useSelector } from "react-redux"
import { RootType } from "../store"

const RestartButton = () => {

    const speed = useSelector((state:RootType)=>state.options.speed)
    const dispatch = useDispatch()

    const restartGame = () => {
        dispatch(setRestart())
        dispatch(setPosition({X: 0, Y: 80}))
        dispatch(resetPoints())
        document.documentElement.style.setProperty('--background-speed', `${(15-speed)/3}s`);
        document.documentElement.style.setProperty('--floor-speed', `${(15-speed)/4}s`);
    }

    return(
        <button className="restartButton"
        onClick={restartGame}
        >
            Restart!
        </button>
    )

}

export default RestartButton