import React from "react";
import Button from "../Button/Button";
import UnknownCard from "../UnknownCard/UnknownCard";
import UserCard from "../UserCard/UserCard";
import "./Main.scss";
import { NavLink } from "react-router-dom";

const Main = ({ userData, unknownData }) => {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__hero">
            <div className="main__user">
              <h2 className="main__user--title">Top Users:</h2>
              <div className="main__cards">
                {userData.slice(0, 4).map((user) => {
                  return <UserCard userData={userData} user={user} />;
                })}
              </div>
              <NavLink to="/users">
                <Button className="main__user--button">All users</Button>
              </NavLink>
            </div>
            <div className="main__unknown">
              <h2 className="main__user--title">Top Unknown:</h2>
              <div className="main__cards">
                {unknownData.slice(0, 4).map((unknown) => {
                  return (
                    <UnknownCard unknown={unknown} unknownData={unknownData} />
                  );
                })}
              </div>
              <NavLink to="/unknown">
                <Button className="main__user--button">All unknown</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
