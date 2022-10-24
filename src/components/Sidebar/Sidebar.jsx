import React from "react";
import './Sidebar.scss'

const Sidebar = () => {
    return <>
        <div className="sidebar">
            <div className="sidebar__hero">
                <div className="sidebar__left">
                    <div className="sidebar__start">
                        <h2 className="sidebar__start--title">Category</h2>
                        <i class="fa-solid fa-xmark sidebar__start--close"></i>
                    </div>
                    <div className="sidebar__middle">
                        <input type="text" className="sidebar__middle--input" placeholder="Search" />
                        <i class="fa-solid fa-magnifying-glass sidebar__middle--search"></i>
                    </div>
                    <div className="sidebar__end"></div>
                </div>
                <div className="sidebar__right">
                    <div className="sidebar__right--overlay">
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Sidebar;
