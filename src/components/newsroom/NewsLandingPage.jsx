import React,{useEffect} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import FadeSpan from "../common/FadeSpan";
import Aos from "aos";

const NewsLandingPage = () => {
  useGSAP(() => {
    gsap.to(".news-landing-page", {
      opacity: 1,
      // delay: 3,
      duration: 1,
      ease: "linear",
    });
  });
    useEffect(() => {
    Aos.init();
    Aos.refreshHard();
  }, []);
      useEffect(() => {
    // Only run after component is mounted and DOM is ready
    const ctx = gsap.context(() => {
      gsap.fromTo(
       ".image__pictures img",
        { y: 0 },
        {
          y: 50,
          duration: 1,
          ease: "linear",
          scrollTrigger: {
            trigger: ".news-landing-page_image-wrap",
            start: "top 0%",
            scrub: true,
            // markers: true,
          },
        }
      );
    });

    // Cleanup GSAP/ScrollTrigger when unmounting
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="news-landing-page">
        <div className="news-landing-page_image-wrap">
          <picture className="image__pictures">
            <img
              src={
                "/assets/images/Asset 7.webp"
              }
              className=""
            />
          </picture>
                    <FadeSpan delay={400}>
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
            </FadeSpan>
        </div>
      </div>
    </>
  );
};

export default NewsLandingPage;
