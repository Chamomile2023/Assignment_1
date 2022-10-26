import React, { useState, useEffect } from "react";
import UnknownCard from "../UnknownCard/UnknownCard";
import "./Unknown.scss";

const Unknown = ({ unknownData }) => {
  return (
    <>
      <div className="unknown">
        <div className="container">
          <div className="unknown__hero">
            <h1 className="unknown__title">All Unknown</h1>
            <div className="unknown__cards">
              {unknownData.map((unknown) => {
                return <UnknownCard unknown={unknown} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unknown;
