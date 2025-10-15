import React from "react";
import styles from "@/components/brand/Brand.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const BrandHero = () => {
  useGSAP(() => {
    gsap.to(`.${styles.parallax_bg}`, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: `.${styles.Brand_parallax_section}`,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
  return (
    <section id="section-5" className={styles.Brand_parallax_section}>
      <div className={styles.parallax_bg}>
        <img
          src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg"
          alt=""
        />
      </div>
      {/* <div className="content">
        <h2>Scroll Down</h2>
        <p>This is some section content.</p>
      </div> */}
    </section>
  );
};

export default BrandHero;
