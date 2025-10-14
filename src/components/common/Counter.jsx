import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import "odometer/themes/odometer-theme-default.css";
const Odometer = dynamic(import("react-odometerjs"), {
  ssr: false,
  loading: () => 0,
});

const Counter = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [odometerValue, setOdometerValue] = useState(0);
  const [odometerValue2, setOdometerValue2] = useState(0);
  const [odometerValue3, setOdometerValue3] = useState(0);
  const [odometerValue4, setOdometerValue4] = useState(0);

  useEffect(() => {
    // GSAP animation with scrollTrigger
    const scrollAnimation = gsap.to(".counter-wrapper", {
      scrollTrigger: {
        trigger: ".counter-wrapper",
        start: "top 85%",

        // markers: true,
        onEnter: () => {
          // Run timeout logic when the trigger enters
          const timeoutId = setTimeout(() => {
            setOdometerValue(40);
            setOdometerValue2(520);
            setOdometerValue3(12);
            setOdometerValue4("4GB");
          }, 10);
          return () => clearTimeout(timeoutId);
        },
        // Optionally handle the onLeave, onEnterBack, onLeaveBack callbacks
        // onLeave: () => { /* Handle leaving trigger */ },
        // onEnterBack: () => { /* Handle re-entering trigger */ },
        // onLeaveBack: () => { /* Handle leaving trigger when scrolling back */ },
      },
      duration: 2,
      ease: "bounce.inOut",
    });
    // Cleanup scrollTrigger instance on component unmount
    return () => {
      scrollAnimation.kill();
    };
  }, []);

  return (
    <>
      <div className="counter-wrapper">
        <div className="counter-col">
          <div className="counter-col-card">
            <Odometer
              className="odoText"
              value={odometerValue}
              // suffix="+"
              format="(,ddd)"
              theme="default"
            />

            <p>
              Files for all design app like <br />
              Adobe XD,Sketch and Figma.
            </p>
          </div>
        </div>
        <div className="counter-col">
          <div className="counter-col-card">
            <h1>
              {" "}
              <Odometer
                className="odoText"
                value={odometerValue2}
                // suffix="+"
                format="(,ddd)"
                theme="default"
              />
            </h1>
            <p>
              Hours invested into these files <br />
              to get them all set up for you{" "}
            </p>
          </div>
        </div>
        <div className="counter-col">
          <div className="counter-col-card">
            <h1>
              {" "}
              <Odometer
                className="odoText"
                value={odometerValue3}
                // suffix="+"
                format="(,ddd)"
                theme="default"
              />
            </h1>
            <p>
              Templets with diffrents fonts, <br />
              colors,andguidlines.{" "}
            </p>
          </div>
        </div>
        <div className="counter-col">
          <div className="counter-col-card">
            <h1>
              {" "}
              <Odometer
                className="odoText"
                value={odometerValue4}
                // suffix="+"
                format="(,ddd)"
                theme="default"
              />
            </h1>
            <p>
              Multiple assets included:fonts,
              <br />
              images,videos, and .html files.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
