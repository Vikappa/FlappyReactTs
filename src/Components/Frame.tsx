import { useSelector } from "react-redux"
import Bird from "./Elements/Bird"
import GameScreen from "./GameScreen"
import { RootType } from '../store';
import { useDispatch } from "react-redux";
import { addPoints, setPointsEditable } from "../reducers/optionsSlice";
import { useEffect, useState } from "react";
import { setPosition } from "../reducers/birdSlice";
import { flapDown, flapUp, setGameover, setRestart } from "../reducers/flapReducer";
import Tube, { TubeProps } from '../Components/Elements/Tube'

const Frame = () => {
    const dispatch = useDispatch()
    const storedX = useSelector((state: RootType) => state.bird.X)
    const storedY = useSelector((state: RootType) => state.bird.Y)
    const points = useSelector((state: RootType) => state.options.points)
    const speed = useSelector((state: RootType) => state.options.speed)
    const gravity = useSelector((state: RootType) => state.options.gravity)
    const flap = useSelector((state: RootType) => state.flapflap.flap)
    const flapPower = useSelector((state: RootType) => state.flapflap.flapPower)
    const gameover = useSelector((state: RootType) => state.flapflap.gameover)

    const [frameX, setFrameX] = useState(0)
    const [frameY, setFrameY] = useState(0)
    const [tubes, setTubes] = useState<TubeProps[]>([])

    useEffect(() => {
        setFrameX(document.getElementById('frame')?.offsetWidth || 0)
        setFrameY(document.getElementById('frame')?.offsetHeight || 0)
        dispatch(setRestart())
    }, [])

    const handleFlapUp = () => {
        if (!gameover && storedX >= frameX / 5) {
            dispatch(setPosition({ X: storedX, Y: storedY - flapPower * 2 - gravity }))
            dispatch(flapUp())
        }
    }

    useEffect(() => {
        
        if (storedX <= frameX / 12) {
            dispatch(setPointsEditable(true))
            dispatch(setPosition({ X: storedX + speed / 2, Y: storedY + gravity }))
        } else if (storedX <= frameX / 6) {
            dispatch(setPosition({ X: storedX + speed / 3, Y: storedY + gravity * 2 }))
        } else if (storedX <= frameX / 4) {
            dispatch(setPosition({ X: storedX + speed / 4, Y: storedY + gravity * 3 }))
        } else {

            if (storedY >= frameY * 85 / 100) {
                document.documentElement.style.setProperty('--background-speed', `${0}s`)
                document.documentElement.style.setProperty('--floor-speed', `${0}s`)

                dispatch(setGameover())

                return

            } else {
                if (flap) {
                    dispatch(setPosition({ X: storedX, Y: storedY - flapPower }))
                } else {
                    dispatch(setPosition({ X: storedX, Y: storedY + gravity - flapPower }))
                }
                dispatch(flapDown(gravity / 3))
            }
        }

        const timer = setTimeout(() => {
            dispatch(addPoints(speed / (10-gravity)))
        }, 20)

        return () => clearTimeout(timer)

    }, [points])

    const addNewTube = () => {

        setTubes(prevTubes => {
            const newTubes = [...prevTubes]

            if (newTubes.length > 2) {
                newTubes.shift(); // Rimuovi il tubo più vecchio
            }

            // Aggiungi un nuovo tubo con proprietà specifiche
            const newTube: TubeProps = {
                id: new Date().getTime(),  
                screenHeight: frameY,
                screenWidth: frameX,
            };

            newTubes.push(newTube)

            return newTubes
        })
    }

    useEffect(() => {
      let tubeInterval: NodeJS.Timeout | undefined
      if (gameover) {
        return
      } else {
        tubeInterval = setInterval(() => {
          addNewTube()
        }, 2000)
        return () => {
          if (tubeInterval) {
            clearInterval(tubeInterval)
          }
        };
      }
    }, [gameover])

    return (
        <div id="frame">
            <Bird x={storedX} y={storedY} />
            <GameScreen handleFlapUp={handleFlapUp} />
            {tubes.map(tube => (
                <Tube key={tube.id} {...tube} />
            ))}
        </div>
    )
}

export default Frame
