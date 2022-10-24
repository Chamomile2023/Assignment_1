import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import ButtonCircle from "../ButtonCircle/ButtonCircle";

const Header = ({ show, setShow }) => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__hero">
            <div className="header__start">
              <ButtonCircle
                className="header__start--button"
                onClick={() => setShow(true)}
              >
                <i class="fa-solid fa-bars header__start--icon"></i>
              </ButtonCircle>
            </div>
            <div className="header__middle">
              <NavLink to="/">
                <h1 className="header__middle--logo">LYT</h1>
                <p className="header__middle--words">Stay with us!</p>
              </NavLink>
            </div>
            <div className="header__end">
              <NavLink to="/profile">
                <ButtonCircle>
                  <i class="fa-regular fa-user header__end--icon"></i>
                </ButtonCircle>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
