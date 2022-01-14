import "./ButtonCameraMic.scss"
import React from 'react';

const ButtonCameraMic = ({ icon, title }) => {

    return (
        <div className="button">
            <button className="button__real-button">
                <img src={icon} alt={title} className="button__icon" />
            </button>
        </div>
    );
};

export default ButtonCameraMic;

