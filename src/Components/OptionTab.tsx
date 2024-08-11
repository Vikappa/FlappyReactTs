import { setGravity, setSpeed } from '../reducers/optionsSlice';
import { AppDispatch, RootType } from '../store';
import { useSelector, useDispatch } from 'react-redux';

const OptionTab = () =>{
    const speed = useSelector((state: RootType) => state.options.speed);
    const gravity = useSelector((state: RootType) => state.options.gravity);
    const dispatch = useDispatch<AppDispatch>();

    const increaseSpeed = () => {
        dispatch(setSpeed(speed - 1));
    };

    const decreaseSpeed = () => {
        dispatch(setSpeed(speed + 1));
    };

    const increaseGravity = () => {
        dispatch(setGravity(parseFloat((gravity * 1.1).toFixed(1))));
    };
    
    const decreaseGravity = () => {
        dispatch(setGravity(parseFloat((gravity * 0.9).toFixed(1))));
    };
    


    return(
        <div id="optionTab"
        style={{
            userSelect: 'none',
        }}
        >

            <h5>Options</h5>

            <div className='opt-container'>
            <p>Speed:</p>
            <button onClick={decreaseSpeed} className='option-button'>-</button>
                <p
                style={{
                    userSelect: 'none',
                }}>{13-speed}</p>
            <button onClick={increaseSpeed} className='option-button'>+</button>
            </div>

            <div className='opt-container'>
            <p>Gravity:</p>
            <button onClick={decreaseGravity} className='option-button'>-</button>
                <p style={{
                    userSelect: 'none',
                }}>{gravity}</p>
            <button onClick={increaseGravity} className='option-button'>+</button>

            </div>

        </div>
    )
}

export default OptionTab