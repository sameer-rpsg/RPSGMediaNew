import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const AdvertisingVideo = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".advertising_media-wrapper", {
      scrollTrigger: {
        trigger: ".advertising_media-wrapper",
        start: "top 0%",
        scrub: true,
        // markers: true,
        // duration: 0.5,
      },
      y: window.innerWidth < 639 ? "0px" : "500px",
      clipPath:
        window.innerWidth < 639
          ? `polygon(5% 1.5%, 95% 1.5%, 95% 98%, 5% 98%)`
          : `polygon(2% 1.5%, 98.5% 1.5%, 98.5% 98.5%, 2% 98.5%)`,
    });
  });
  return (
    <div className="advertising_home-hero">
      <div className="advertising_media-wrapper">
        <div className="advertising_video-wrapper">
          <div className="advertising_video_cover">
            <video
              className="exception-video"
              src="https://strapi-bus-eng-prod.s3.amazonaws.com/CN_Sizz_Header_Video_v2_c0c87772db.mp4"
              autoPlay
              loop
              playsInline
              //   preload="none"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingVideo;
