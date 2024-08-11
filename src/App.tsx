import Frame from './Components/Frame'
import OptionTab from './Components/OptionTab'
import Titolo from './Components/Titolo'
import './style/Style.css'
import './style/Animations.css'
import './style/BirdStyle.css'
import './style/frame.css'
import './style/TubeStyle.css'
import PointsDisplay from './Components/PointsDisplay'
import RestartButton from './Components/RestartButton'

function App() {

  return (
    <div>
    <Titolo/>
    <PointsDisplay/>
    <Frame/>
    <div className='restartButton-wrapper'>
    <RestartButton/>
    </div>
    <OptionTab/>
    </div>
  )
}

export default App
