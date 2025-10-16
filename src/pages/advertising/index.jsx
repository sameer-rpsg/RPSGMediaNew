import Advertising from "@/components/advertising/Advertising";
import AdvertisingVideo from "@/components/advertising/AdvertisingVideo";
// import Counter from "@/components/common/Counter";
import OurEvents from "@/components/common/OurEvents";
import Support from "@/components/common/Support";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import React from "react";

const index = () => {
  // useGSAP(() => {
  //   gsap.from(".advertising_main_wrapper", {
  //     opacity: 0,
  //     duration: 1,
  //     // delay: 3,
  //     ease: "power4.in",
  //   });
  // });
  return (
    <div className="advertising_main_wrapper">
      <AdvertisingVideo />
      {/* <Counter /> */}
      <Advertising />
      <OurEvents />
      <Support />
    </div>
  );
};

export default index;
