import React, { useState, useEffect } from "react";
import "./User.scss";
import UserCard from "../UserCard/UserCard";
import Button from "../Button/Button";

const User = ({ userData }) => {
  const [userTwoData, setUserTwoData] = useState([]);
  const getUserTwoData = async () => {
    const request = await fetch("https://reqres.in/api/users?page=2");
    const response = await request.json();
    setUserTwoData([...userData, ...response.data]);
  };
  useEffect(() => {
    setUserTwoData(userData);
  }, []);
  return (
    <>
      <div className="all-user">
        <div className="container">
          <div className="all-user__hero">
            <div className="all-user__cards">
              {userTwoData.map((user) => {
                return <UserCard user={user} className="all-user__card" />;
              })}
            </div>
            <Button
              className="all-user__button"
              onClick={(e) => {
                getUserTwoData(), (e.target.style.display = "none");
              }}
            >
              Load more
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
