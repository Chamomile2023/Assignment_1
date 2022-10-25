import React from "react";
import "./UnknownCard.scss";
import '../UserCard/UserCard'
import Button from "../Button/Button";

const UnknownCard = ({ unknown, unknownData }) => {
    return <>
        <div className="unknown">
            <div className="user__card">
                <div className="unknown__card--img" style={{ backgroundColor: unknown.color }}></div>
                <h2 className="user__card--name">
                    Color: {unknown.color}
                </h2>
                <p className="user__card--email">Year: {unknown.year}</p>
                <p className="user__card--email unknown__card--value">Pantone value: {unknown.pantone_value}</p>
                <Button className="user__card--button">See more</Button>
            </div>
        </div>
    </>;
};

export default UnknownCard;
