import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import "./Search.scss";

const Search = ({ userTwoData, userData, search }) => {
    return (
        <>
            <div className="search">
                <div className="container">
                    <div className="search__hero">
                        {
                            search.length > 0 ? search.map((user, index) => {
                                return <UserCard key={index} user={user} />;
                            })
                                :
                                <p className="Not_found">Nothing found, the user does not exit.</p>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
