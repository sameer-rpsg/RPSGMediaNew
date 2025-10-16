import React, { useState } from "react";
import NewsData from "./NewsData";
import Link from "next/link";
const Buttons = ({ filterButtons, setItem, filterItems }) => {
  return (
    <div>
      <label className="news_label_cntr" onClick={() => setItem(NewsData)}>
        <input type="radio" name="test" />
        <span className="checkmark"></span>
        All
      </label>
      <br />
      {filterButtons.map((val, index) => {
        return (
          <label
            key={index}
            className="news_label_cntr"
            onClick={() => filterItems(val)}
          >
            <input type="radio" name="test" />
            <span className="checkmark"></span>
            {val}
            <br />
          </label>
        );
      })}
    </div>
  );
};

export default Buttons;
