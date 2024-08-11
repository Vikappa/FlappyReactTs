import { useSelector } from "react-redux"
import { RootType } from "../store"

const PointsDisplay = () => {

    const points = useSelector((state:RootType) => state.options.points)

    return(
        <div className="pointsDisplay">
            <h1 className="pointsH1">{Math.floor(points/10)}</h1>
        </div>
    )
}

export default PointsDisplay