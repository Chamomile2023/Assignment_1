import React, { useState, useEffect } from "react";
import './SingleUnknownCard.scss'
import Button from '../Button/Button'
import { useParams } from "react-router-dom";

const SingleUnknownCard = ({ unknownData }) => {
    const { id } = useParams()
    const [idColorData, setIdColorData] = useState([]);
    const ColorData = async () => {
        const request = await fetch(`https://reqres.in/api/unknown/${id}`);
        const response = await request.json();
        setIdColorData(response.data);
    };
    useEffect(() => {
        ColorData();
    }, []);

    return <>
        <div className="single">
            {unknownData.filter((unknown) => unknown.id == id).map((unknown) => {
                return <div className="card" key={unknown.id}>
                    <div className="single__card--img" style={{ backgroundColor: unknown.color }}></div>
                    <h2 className="single__card--heading">Contrast: {unknown.name}</h2>
                    <p className="single__card--color">Color: {unknown.color}</p>
                    <p className="single__card--year">Pantone Value: {unknown.pantone_value}</p>
                    <p className="single__card--year">Year: {unknown.year}</p>
                    <Button className="single__card--btn">Copy color</Button>
                </div>
            })}
        </div>
    </>;
};

export default SingleUnknownCard;
