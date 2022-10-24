import React from "react";
import "./UserCard.scss";
import img from "../img/profile.jpg"
import Button from '../Button/Button'

const UserCard = () => {
    return <>
        <div className="user">
            <div className="user__card">
                <img src={img} alt="" className="user__card--img" />
                <h2 className="user__card--name">George Bluth</h2>
                <p className="user__card--email">Email: george.bluth@reqres.in</p>
                <Button className="user__card--button">See more</Button>
            </div>
        </div>
    </>;
};

export default UserCard;
