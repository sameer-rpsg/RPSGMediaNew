import React, { useState } from "react";
import NewsCard from "./NewsCard";
import Buttons from "./Buttons";
import NewsData from "./NewsData";
console.log("data", NewsData);
const NewsMedia = () => {
  const [item, setItem] = useState(NewsData);
  const filterButtons = [...new Set(NewsData.map((val) => val.category))];
  const filterItems = (cat) => {
    const newItems = NewsData.filter((newval) => newval.category === cat);
    setItem(newItems);
  };
  return (
    <>
      <div className="new-media_filter">
        <div className="filters">
          <div className="filter_option-cntr">
            <div className="filter_option">
              <Buttons
                filterButtons={filterButtons}
                filterItems={filterItems}
                setItem={setItem}
              />
            </div>
          </div>
          <div className="filter_items">
            <NewsCard item={item} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsMedia;
