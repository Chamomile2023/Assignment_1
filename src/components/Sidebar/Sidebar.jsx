import React, { useState, useEffect } from "react";
import "./Sidebar.scss";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const Sidebar = ({
  show,
  setShow,
  setSearch,
  userTwoData,
  userData,
  search,
}) => {
  const handleSearchResult = (e) => {
    if (!e.target.value) return setSearch([...userData, userTwoData]);
    const result = [...userData, ...userTwoData].filter((data) =>
      (data.first_name.toLowerCase() || data.last_name.toLowerCase()).includes(
        e.target.value.toLowerCase()
      )
    );
    setSearch(result);
  };

  return (
    <>
      <div className="sidebar">
        <div className={` ${show ? "sidebar__hero--active" : "sidebar__hero"}`}>
          <div className="sidebar__left">
            <div className="sidebar__start">
              <h2 className="sidebar__start--title">Category</h2>
              <Button onClick={() => setShow(!show)}>
                <i className="fa-solid fa-xmark sidebar__start--close"></i>
              </Button>
            </div>
            <div className="sidebar__middle">
              <input
                type="text"
                className="sidebar__middle--input"
                placeholder="Search"
                onChange={handleSearchResult}
              />
              <i className="fa-solid fa-magnifying-glass sidebar__middle--search"></i>
            </div>
            <div className="sidebar__end">
              <NavLink
                to="/users"
                className={`sidebar__end--btn ${({ isActive }) =>
                  isActive ? "active" : ""}`}
              >
                <Button className="sidebar__end--component">
                  <p className="sidebar__end--button">Users</p>
                </Button>
              </NavLink>
              <NavLink
                to="/unknown"
                className={`sidebar__end--btn ${({ isActive }) =>
                  isActive ? "active" : ""}`}
              >
                <Button className="sidebar__end--component">
                  <p className="sidebar__end--button">Unknown</p>
                </Button>
              </NavLink>
            </div>
          </div>
          <div className="sidebar__right">
            <div className="sidebar__right--overlay"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
