import Link from "next/link";
import React from "react";

const NewsCard = ({ item }) => {
  return (
    <>
      {item.map((val) => {
        return (
          <div key={val.id} className="news_card_cntr">
            <Link
              href={`../../newsroom/${val.id}`}
              className="image-wrap universal-item-card__image-wrap"
              data-align="center center"
            >
              <div className="image__picture">
                <img
                  src={val.image}
                  className="image universal-item-card__image"
                  alt=""
                  loading="lazy"
                />
              </div>

              <p className="news_card_para">{val.title}</p>
              <h3 className="news_desc">
                <span className="news_desc_word">{val.description} </span>
              </h3>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default NewsCard;
