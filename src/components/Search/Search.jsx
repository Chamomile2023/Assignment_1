import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import "./Search.scss";

const Search = ({ userTwoData, userData, search }) => {
    return (
        <>
            <div className="search">
                <div className="container">
                    <div className="search__hero">
                        {search.map((user) => {
                            return <UserCard key={user.id} user={user} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
