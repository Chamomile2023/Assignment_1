import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import "./Search.scss";

const Search = ({ userTwoData, userData, value, setValue }) => {
    return <>
        <div className="search">
            <div className="container">
                <div className="search__hero">
                    {
                        ([...userData, ...userTwoData]).filter((user) => {
                            if (value == "") {
                                return "Nothing found, the user does not exit or correct the search params";
                            }
                            else if ((user.first_name && user.last_name).toLowerCase().includes(value.toLowerCase())) {
                                return user;
                            }
                        })
                            .map((user) => {
                                return <UserCard key={user.id} user={user} />
                            })
                    }
                </div>
            </div>
        </div>
    </>;
};

export default Search;
