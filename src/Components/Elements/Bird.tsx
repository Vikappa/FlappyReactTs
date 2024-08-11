import React from 'react';
import birdImageFile from '/assets/img/bird.png';
import wingImageFile from '/assets/img/birdwing.png'
import '../../style/BirdStyle.css';
import { useSelector } from 'react-redux';
import { RootType } from '../../store';

interface BirdProps {
    x: number;
    y: number;
}

const Bird: React.FC<BirdProps> = ({ x, y }) => {

    const flap = useSelector((state:RootType)=>state.flapflap.flap)
    const gameover = useSelector((state:RootType)=>state.flapflap.gameover)
    
    return (
        <div
            className="bird-container"
            style={{
                position: 'absolute',
                left: x,
                top: y,
                zIndex: 1000,
            }}
        >
            <img
                src={birdImageFile}
                alt="bird"
                className={`bird-image ${gameover && `falldown-animation`}`}
                style={{
                    width: '40px',
                    height: '30px',
                    zIndex: 1000,
                }}
            />

            {
                flap ?
                <img
                src={wingImageFile}
                className='wing-image flippedwing'
                style={{
                    top: 0,
                    left: 0,
                    position: 'absolute',
                    width: '40px',
                    height: '30px',
                    zIndex: 1001,         
                }}
                />
                :
                <img
                src={wingImageFile}
                className={`wing-image ${gameover && `falldown-animation`}`}
                style={{
                    top: 0,
                    left: 0,
                    position: 'absolute',
                    width: '40px',
                    height: '30px',
                    zIndex: 1001,         
                }}
                />
            }

        </div>
    );
};

export default Bird;
