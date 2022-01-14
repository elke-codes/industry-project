import './GameScreen.scss';
import ButtonCameraMic from "../ButtonCameraMic/ButtonCameraMic";
import UserCard from "../UserName/UserCard";
import mic from "../../assets/icons/mic.png"
import camera from "../../assets/icons/camera.png"
import React from 'react';
import userData from "../../data/user.json";



const GameScreen = () => {

    const backHandler = (e) => {
        e.preventDefault();
        // props.history.push('/');
    }

    return (
        <div className="game-screen">
            <div className="game-screen__button-containers">
                <button className="game-screen__button-back" onClick={backHandler}>Back</button>
                <div className="game-screen__buttons-mic-camera">
                    <ButtonCameraMic icon={mic} title="mic-icon" />
                    <ButtonCameraMic icon={camera} title="camera-icon" />
                </div>
            </div>
            <div className="game-screen__lobby">
                <div className="game-screen__task">
                    <p className="game-screen__content-task">Let me tell you about my startup. It is basically ________ for __________.</p>
                </div>
                {userData.map((detail, { i }) => {
                    return <UserCard name={detail.name} score={detail.score} img={detail.img} icon={detail.icon} key={i} />
                })}
            </div>
            <div className="game-screen__task-option">
                <div className="game-screen__option-card">
                    <p className="game-screen__option-card-text">Figma</p>
                </div>
                <div className="game-screen__option-card">
                    <p className="game-screen__option-card-text">A Hydroflask.</p>
                </div>
                <div className="game-screen__option-card">
                    <p className="game-screen__option-card-text">The HR team.</p>
                </div>
            </div>
        </div>
    );
};

export default GameScreen;