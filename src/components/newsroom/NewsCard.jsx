import Link from "next/link";
import React from "react";
import FadeSpan from "../common/FadeSpan";

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
              <FadeSpan delay={200}>
                <div className="image__picture">
                  <img
                    src={val.image}
                    className="image universal-item-card__image"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </FadeSpan>
              <FadeSpan delay={400}>
              <p className="news_card_para">{val.title}</p>
              </FadeSpan>
              <FadeSpan delay={500}>
              <h3 className="news_desc">
                <span className="news_desc_word">{val.description} </span>
              </h3>
              </FadeSpan>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default NewsCard;
