import React, { useState, useEffect } from "react";
import "./Sidebar.scss";
import Button from "../Button/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar = ({
  show,
  setShow,
  setSearch,
  userTwoData,
  userData,
  search,
}) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("")

  const handleSearchResult = (e) => {
    // if (!e.target.value) return setSearch([...userData, userTwoData]);
    // else if (e.target.value == "") { "Nothing found" };
    // const result = [...userData, ...userTwoData].filter((data) =>
    //   (data.first_name.toLowerCase() || data.last_name.toLowerCase()).includes(
    //     e.target.value.toLowerCase()
    //   )
    // );
    // setSearch(result);
    e.preventDefault()
    const result = [...userData, ...userTwoData].filter((data) =>
      (data.first_name.toLowerCase() || data.last_name.toLowerCase()).includes(
        searchValue.toLowerCase()
      )
    );
    setSearch(result);
    setShow(false)
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
              <form onSubmit={
                handleSearchResult
              }>
                <input
                  type="text"
                  className="sidebar__middle--input"
                  placeholder="Search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <Button type="submit" className="sidebar__middle--search" onClick={() => navigate("/search")} >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
              </form></div>
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
            <div className="sidebar__right--overlay" onClick={() => setShow(!show)}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
