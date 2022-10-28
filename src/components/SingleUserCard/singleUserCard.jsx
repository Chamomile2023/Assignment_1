import React, { useState, useEffect } from "react";
import "./singleUserCard.scss";
import Button from "../Button/Button";
import { useParams } from "react-router-dom";

const singleUserCard = ({ userData, userTwoData }) => {
  const { id } = useParams();
  const [all, setAll] = useState([]);
  const [idNum, setIdNum] = useState([]);
  const getIdData = async () => {
    const request = await fetch(`https://reqres.in/api/users/${id}`);
    const response = await request.json();
    setIdNum(response.data);
    setAll([...userData, ...userTwoData]);
  };
  useEffect(() => {
    getIdData();
  }, []);
  return (
    <>
      <div className="single">
        {all
          .filter((user) => user.id == id)
          .map((user) => {
            return (
              <div className="single__card" key={user.id}>
                <img src={user.avatar} alt="" className="single__card--img" />
                <h3 className="single__card--name">
                  {user.first_name + " " + user.last_name}
                </h3>
                <p className="single__card--email">{user.email}</p>
                <a
                  href="mailto:{`${user.email}`}"
                  className="single__card--link"
                >
                  <Button className="single__card--button">Contact</Button>
                </a>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default singleUserCard;
