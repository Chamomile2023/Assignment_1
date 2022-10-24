import React from "react";
import "./Sidebar.scss";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar__hero">
                    <div className="sidebar__left">
                        <div className="sidebar__start">
                            <h2 className="sidebar__start--title">Category</h2>
                            <Button>
                                <i class="fa-solid fa-xmark sidebar__start--close"></i>
                            </Button>
                        </div>
                        <div className="sidebar__middle">
                            <input
                                type="text"
                                className="sidebar__middle--input"
                                placeholder="Search"
                            />
                            <i class="fa-solid fa-magnifying-glass sidebar__middle--search"></i>
                        </div>
                        <div className="sidebar__end">
                            <NavLink to="/users" className={`sidebar__end--btn ${({ isActive }) => (isActive ? "active" : "")}`}>
                                <Button className="sidebar__end--component">
                                    <p className="sidebar__end--button">Users</p>
                                </Button>
                            </NavLink>
                            <NavLink to="/unknown" className={`sidebar__end--btn ${({ isActive }) => (isActive ? "active" : "")}`}>
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
