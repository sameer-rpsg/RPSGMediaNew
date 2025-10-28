import React,{useEffect,useRef} from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import BottomLineAnimation from "../common/BottomLineAnimation";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger,SplitText)
const HomeAbout = () => {
const paraRef = useRef(null);

  useEffect(() => {
    const el = paraRef.current;

    // Split paragraph into lines first
    const splitLines = new SplitText(el, {
      type: "lines",
      linesClass: "extra-split-line",
    });

    // Then split each line into words
    const splitWords = new SplitText(splitLines.lines, {
      type: "lines",
      // wordsClass: "extra-split-word",
       linesClass: "extra-split-line",
    });

    // Animate the words inside each line
    const tl = gsap.timeline({scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },});
    
    tl.from(splitWords.lines, {
      opacity: 0,
      yPercent: 100,
      ease: "power3.out",
      duration: 1,
      stagger: 0.05, // each word staggered
    },"a").to(".split",{
      transform:"scaleX(1)",
      transformOrigin:"left",
      delay:0.5
    },"a"),
    tl.fromTo(".will-animate",{
      opacity:0
    },{
      duration:1,
      ease:"linear",
      opacity:1
    })
    
    // Cleanup
    return () => {
      splitWords.revert();
      splitLines.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="Home_about_wrapper">
      <div className="tagline">
        <div className="tagline__wrapper home-tagline">
          <div className="space" />
          <div className="Home_about_content">
            {/*[*/}
            <div>
              <div className="about_para">
                <p ref={paraRef}>
                    We build Iconic Media Brands That Shape Culture, Spark
                    Conversations, And Drive Influence &mdash; Across
                    Entertainment, Lifestyle, Luxury.
                </p>
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
            <div className="split" style={{ top: 0 }} data-v-fa27c953="" />
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
