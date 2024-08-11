import Frame from './Components/Frame'
import OptionTab from './Components/OptionTab'
import Titolo from './Components/Titolo'
import './style/Style.css'
import './style/Animations.css'
import './style/BirdStyle.css'
import PointsDisplay from './Components/PointsDisplay'

function App() {

  return (
    <div>
    <Titolo/>
    <PointsDisplay/>
    <Frame/>
    <OptionTab/>
    </div>
  )
}

export default App
