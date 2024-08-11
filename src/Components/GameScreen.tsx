import { useEffect } from "react";
import { useSelector } from 'react-redux';
import {  RootType } from '../store';

const GameScreen = ({ handleFlapUp }: { handleFlapUp: () => void }) => {

    const speed = useSelector((state: RootType) => state.options.speed);

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
        <div id="game-screen"
        onClick={handleFlapUp}
        >
            <div className="background1"></div>    
            <div className="background2"></div>  
            <div className="movingroad1"></div>  
            <div className="movingroad2"></div>  
            </div>
    );
}

export default GameScreen;
