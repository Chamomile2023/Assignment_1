import React, { useState, useEffect } from "react";
import "./SingleUnknownCard.scss";
import Button from "../Button/Button";
import { useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

const SingleUnknownCard = ({ unknownData }) => {
  const [copy, setCopy] = useState(false);
  const [value, setValue] = useState("");
  const { id } = useParams();
  const [idColorData, setIdColorData] = useState([]);
  const ColorData = async () => {
    const request = await fetch(`https://reqres.in/api/unknown/${id}`);
    const response = await request.json();
    setIdColorData(response.data);
  };
  useEffect(() => {
    ColorData();
  }, []);

  const copyBtn = (color) => {
    setValue(color);
  };
  const changeCopyText = () => {
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };
  return (
    <>
      <div className="single">
        {unknownData
          .filter((unknown) => unknown.id == id)
          .map((unknown) => {
            return (
              <div className="card" key={unknown.id}>
                <div
                  className="single__card--img"
                  style={{ backgroundColor: unknown.color }}
                ></div>
                <h2 className="single__card--heading">
                  Contrast: {unknown.name}
                </h2>
                <p className="single__card--color">Color: {unknown.color}</p>
                <p className="single__card--year">
                  Pantone Value: {unknown.pantone_value}
                </p>
                <p className="single__card--year">Year: {unknown.year}</p>
                <CopyToClipboard
                  text={value}
                  onCopy={() => {
                    copyBtn(unknown.color);
                    setCopy(true);
                    changeCopyText();
                  }}
                >
                  <Button className="single__card--btn">
                    {copy ? "Copied" : "Copy color"}
                  </Button>
                </CopyToClipboard>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default SingleUnknownCard;
