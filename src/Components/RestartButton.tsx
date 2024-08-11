import { useDispatch } from "react-redux"
import { setRestart } from "../reducers/flapReducer"
import { setPosition } from "../reducers/birdSlice"
import { resetPoints } from "../reducers/optionsSlice"

const RestartButton = () => {

    const dispatch = useDispatch()

    const restartGame = () => {
        dispatch(setRestart())
        dispatch(setPosition({X: 0, Y: 80}))
        dispatch(resetPoints())
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