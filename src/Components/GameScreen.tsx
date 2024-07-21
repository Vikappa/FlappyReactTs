import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store';

const GameScreen = () => {

    const speed = useSelector((state: RootState) => state.options.speed);
    // const gravity = useSelector((state: RootState) => state.options.gravity);


    useEffect(() => {
        const images = document.querySelectorAll('.backgroundImg');
        images.forEach((image) => {
            image.classList.add("movingBackground");
        });

        const roadImage = document.querySelector('#movingRoad');
        if (roadImage) {
            roadImage.classList.add("movingRoad");
        }

        document.documentElement.style.setProperty('--animation-speed', `${(speed*2)-10}s`);
        document.documentElement.style.setProperty('--road-animation-speed', `${(speed*2)-5}s`);
    }, [speed]);

    return (
        <div id="game-screen">
            <img src="/assets/img/background.png" className="backgroundImg" alt="background1" id="background1" />
            <img src="/assets/img/background.png" className="backgroundImg" alt="background2" id="background2" />
            <img src='/assets/img/154256.png' alt="road" className="movingRoad" id="movingRoad1" />
            <img src='/assets/img/154256.png' alt="road" className="movingRoad" id="movingRoad2" />
        </div>
    );
}

export default GameScreen;
