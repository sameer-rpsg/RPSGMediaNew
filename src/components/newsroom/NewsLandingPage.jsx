import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsLandingPage = () => {
  useGSAP(() => {
    gsap.to(".news-landing-page", {
      opacity: 1,
      // delay: 3,
      duration: 1,
      ease: "linear",
    });
  });
  return (
    <>
      <div className="news-landing-page">
        <div className="news-landing-page_image-wrap">
          <picture className="image__pictures">
            <img
              src={
                "/assets/selectedimagescompressed/Manifest x Vaani Kapoor 14-08-254048 copy 2_11zon.jpg"
              }
              className=""
            />
          </picture>
          <div className="news-landing-page_overlay">
            <div className="news-landing-page_content">
              {/* <p className="news-landing-page_content_para">DEPT®/Insights </p> */}
              <h3 className="typography">
                Keep up-to-speed with all the latest trends in digital. Check
                out{" "}
                <Link
                  href={""}
                  target="_blank"
                  className="hover-underline-animation news_line"
                >
                  articles
                </Link>
                , download{" "}
                <Link href={""} target="_blank" className="news_line">
                  {" "}
                  whitepapers
                </Link>
                , or sign-up for an{" "}
                <Link href={""} target="_blank" className="news_line">
                  {" "}
                  event
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLandingPage;
