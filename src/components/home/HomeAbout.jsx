import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import BottomLineAnimation from "../common/BottomLineAnimation";

const HomeAbout = () => {
  return (
    <div className="Home_about_wrapper">
      <div className="tagline">
        <div className="tagline__wrapper home-tagline">
          <div className="space" />
          <div className="Home_about_content">
            {/*[*/}
            <div>
              <div className="about_para">
               We build Iconic Media Brands That Shape Culture, Spark Conversations, And Drive Influence &mdash; Across 
               <BottomLineAnimation animatedText=" Entertainment " />,
               <BottomLineAnimation animatedText="&nbsp;Lifestyle " /> , 
                And
               <BottomLineAnimation animatedText=" Luxury" />.
                  
                {/* <Link href="/services" target="_self" rel="noopener noreferrer">
                  
                </Link>, */}
                 {/* <Link href="/services" target="_self" rel="noopener noreferrer">
                  
                </Link>. */}
              </div>
            </div>
            {/*]*/}
          </div>
        </div>
      </div>
      <div className="key-value">
        <ul className="list">
          {/*[*/}
          <li className="Home_about_content_item">
            <div
              className="split"
              style={{ top: 0 }}
             
              data-v-fa27c953=""
            />
            <div className="Home_about_content_title">
              {/*[*/}
              <h2 className="will-animate">Tomorrow’s brands, today.</h2>
              {/*]*/}
            </div>
            <div className="Home_about_content">
              <div className="content-inner">
                {/*[*/}
                <div className="will-animate">
                  <p>
                    Since 2013, we have been recognized globally for helping
                    founders build market-defining brands.
                  </p>
                  <p>
                    <br />
                    We partner with five clients a year to give each one the
                    focus and care they deserve.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="b-arrow underlined link-active-full-small"
                 
                >
                  <span className="icon icon-b">
                  <GoArrowUpRight />
                  </span>
                  <span className="content_more">
                    {/*[*/}Learn more{/*]*/}
                  </span>
                  <span className="icon icon-a">
                    <GoArrowUpRight />
                  </span>
                </Link>
                {/*]*/}
              </div>
            </div>
          </li>
          {/*]*/}
        </ul>
      </div>
    </div>
  );
};

export default HomeAbout;
