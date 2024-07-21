import { useEffect, useState } from "react";

const GameScreen = () => {
    const [animationSpeed, setAnimationSpeed] = useState(6); // Velocità di default

    useEffect(() => {
        const images = document.querySelectorAll('.backgroundImg');
        images.forEach((image) => {
            image.classList.add("movingBackground");
        });

        const roadImage = document.querySelector('#movingRoad');
        if (roadImage) {
            roadImage.classList.add("movingRoad");
        }

        document.documentElement.style.setProperty('--animation-speed', `${animationSpeed}s`);
        document.documentElement.style.setProperty('--road-animation-speed', `${animationSpeed * 1.5}s`);
    }, [animationSpeed]);

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
