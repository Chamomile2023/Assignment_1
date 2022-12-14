import React from "react";
import "./UnknownCard.scss";
import "../UserCard/UserCard";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const UnknownCard = ({ unknown, unknownData }) => {
  return (
    <>
      <div className="unknown" key={unknown.id}>
        <div className="user__card">
          <div
            className="unknown__card--img"
            style={{ backgroundColor: unknown.color }}
          ></div>
          <h2 className="user__card--name">Color: {unknown.color}</h2>
          <p className="user__card--email">Year: {unknown.year}</p>
          <p className="user__card--email unknown__card--value">
            Pantone value: {unknown.pantone_value}
          </p>
          <NavLink to={`/unknown/${unknown?.id}`}>
            <Button className="user__card--button">See more</Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UnknownCard;
