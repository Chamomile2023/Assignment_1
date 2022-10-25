import React from "react";
import "./User.scss";
import UserCard from "../UserCard/UserCard";

const User = ({ userData }) => {
  return <>
    <div className="all-user">
      <div className="container">
        <div className="all-user__hero">
          <div className="all-user__cards">
            {userData.map((user) => {
              return <UserCard user={user} className="all-user__card" />
            })}
          </div>
        </div>
      </div>
    </div></>;
};

export default User;
