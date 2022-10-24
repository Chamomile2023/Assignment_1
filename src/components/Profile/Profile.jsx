import React from "react";
import "./Profile.scss";
import img from '../img/profile.jpg'

const Profile = () => {
  return <>
    <div className="profile">
      <div className="container">
        <div className="profile__hero">
          <div className="profile__card">
            <div className="profile__card--shape1"></div>
            <div className="profile__card--shape"></div>
            <img src={img} alt="" className="profile__card--img" />
            <h1 className="profile__card--name">Sarvinoz Jumaboeva</h1>
            <p className="profile__card--job">Web Developer</p>
            <p className="profile__card--description">
              Student of the National University of Uzbekistan in Ciber Security in third grade.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default Profile;
