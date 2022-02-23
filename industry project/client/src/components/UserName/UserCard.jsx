import React from 'react';
import { isDOMComponent } from 'react-dom/cjs/react-dom-test-utils.production.min';
import './UserCard.scss'

const UserCard = ({ name, score, img, icon }) => {
    return (
        <div className={`user-card-gamescreen user-card-gamescreen__${score}`}>
            <img className="user-card-gamescreen__avatar" src={img} alt={name} />
            <div className="user-card-gamescreen__container">
                <div className="user-card-gamescreen__name">{name}</div>
                <div className="user-card-gamescreen__score">{`${score}pts`}</div>

            </div>
            <div className="user-card-gamescreen__icon">
                <img src={icon} />
            </div>
        </div>
    );
};

export default UserCard;