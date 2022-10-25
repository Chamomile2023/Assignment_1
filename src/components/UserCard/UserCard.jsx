import React from "react";
import "./UserCard.scss";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const UserCard = ({ userData, user }) => {
  return (
    <>
      <div className="user" key={user.id}>
        <div className="user__card">
          <img src={user.avatar} alt="" className="user__card--img" />
          <h2 className="user__card--name">
            {user.first_name + " " + user.last_name}
          </h2>
          <p className="user__card--email">{user.email}</p>
          <NavLink to={`/users/${user?.id}`}>
            <Button className="user__card--button">See more</Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserCard;
