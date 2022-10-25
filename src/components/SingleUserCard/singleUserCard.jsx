import React from "react";
import "./singleUserCard.scss";
import img from "../img/profile.jpg";
import Button from "../Button/Button";

const singleUserCard = ({ allUsers }) => {
    return (
        <>
            <div className="single">
                {allUsers.map((user) => {
                    return <div className="single__card" key={user.id}>
                        <img src={user.avatar} alt="" className="single__card--img" />
                        <h3 className="single__card--name">{user.first_name + " " + user.last_name}</h3>
                        <p className="single__card--email">{user.email}</p>
                        <a href="mailto:{`${user.email}`}" className="single__card--link">
                            <Button className="single__card--button">
                                Contact
                            </Button>
                        </a>
                    </div>
                })}
            </div>
        </>
    );
};

export default singleUserCard;
