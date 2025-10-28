import React from "react";
import styles from "@/components/brand/Brand.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import BrandDetailsInfo from "@/components/brand/BrandDetailsInfo";
import Benefits from "@/components/brand/Benefits";
import Leadership from "@/components/about/Leadership";
import { leaders2 } from "@/utils/Data";

gsap.registerPlugin(ScrollTrigger);

const index = ({ params }) => {
  // useGSAP(() => {
  //   gsap.to(`.${styles.parallax_bg}`, {
  //     yPercent: 20,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: `.${styles.Brand_parallax_section}`,
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   });
  // });

  // useGSAP(()=>{
  //   gsap.to(`.${styles.parallax_bg} img`, {scrollTrigger: {
  // trigger: `.${styles.Brand_parallax_section}`,
  // toggleActions: "restart pause reverse pause",
  //    // pin: true,
  //    // pinSpacing:false,
  //     scrub:1,
  // start: "top top",
  //   end: "bottom bottom"
  //   },
  //       yPercent: 20,
  //     ease: "none",
  //   });
  // })
  return (
    <>
    <section id="section-5" className={styles.Brand_parallax_section}>
      <div
        className={styles.parallax_bg}
        style={{
          width: "100%",
          height: "100%",
          transformOrigin: "center center",
          transform: "translate(0%, 0%)",
        }}
      >
        <img
          src="/assets/images/Asset 8.webp"
          alt=""
        />
      </div>
      <div className="news-landing-page_overlay">
        <div className={styles.news_landing_page_overlay_inner}>
        <div className="tagline__wrapper home-tagline">
          <div className="space"></div>
          <div className="Home_about_content">
            <div>
              <div className="about_para">
                <span>
                  We build Iconic Media Brands That Shape Culture, Spark
                  Conversations, And Drive Influence — Across Entertainment,
                  Lifestyle, Luxury.
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    <BrandDetailsInfo/>
    <Benefits/>
    <Leadership title={"Editorial Team"} leaders={leaders2}/>
    </>
  );
};

export default index;
