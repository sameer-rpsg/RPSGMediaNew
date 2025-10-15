import React, { useEffect } from "react";
import styles from "@/components/about/About.module.css";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Office = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.photo}`);

    elements.forEach((el) => {
      // apply marginTop like the original
      el.style.marginTop = `${-0.1 * el.offsetHeight}px`;

      // disable animation for touch devices
      if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

      const fromVars = {
        y: -el.offsetHeight * 0.15,
      };
      const toVars = {
        y: el.offsetHeight * 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement,
          scrub: true,
        },
      };

      gsap.fromTo(el, fromVars, toVars);
    });

    // cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.globalTimeline.clear();
    };
  }, []);
  return (
    <section className={styles.studioShowcase}>
      <div className={`${styles.item_divider} ${styles.line_divider}`}></div>

      {/* PORTO */}
      <article className={styles.studioItem}>
        <div className={styles.gRow}>
          <p className={`${styles.gCol} ${styles.xxl6} ${styles.xs24}`}>
            Visit us
          </p>
          <h2
            className={`${styles.studioName} ${styles.gCol} ${styles.xxl18} ${styles.xs24} ${styles.midstatement}`}
          >
            Delhi
          </h2>
        </div>

        <div
          className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
        >
          <img
            alt="Bürostudios Porto #1"
            className={styles.photo}
            src="/assets/officeimages/img6.png"
          />
        </div>

        <div className={`${styles.infoRow} ${styles.gRow}`}>
          <div
            className={`${styles.info} ${styles.gCol} ${styles.xxl12} ${styles.xs19} ${styles.xsOffset5}`}
          >
            <a
              className={`${styles.location} ${styles.whitespacePreline}`}
              href=""
              target="_blank"
            >
              Rua de Alfredo Cunha 133 3º Frt 4450-023 Matosinhos Portugal
            </a>
            <a
              className={styles.contact}
              href="mailto:info@rpsgmedia.com"
              target="_blank"
            >
              info@rpsgmedia.com
            </a>
          </div>

          <div
            className={`${styles.gCol} ${styles.xxl12} ${styles.xs19} ${styles.xsOffset5}`}
          >
            <div
              className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
            >
              <img
                alt="Bürostudios Porto #2"
                className={styles.photo}
                src="/assets/officeimages/img7.png"
              />
            </div>
            <div
              className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
            >
              <img
                alt="Bürostudios Porto #3"
                className={styles.photo}
                src="/assets/officeimages/img2.jpg"
              />
            </div>
          </div>
        </div>
      </article>

      <div className={styles.itemDivider}></div>

      {/* COIMBRA */}
      <article className={styles.studioItem}>
        <div className={styles.gRow}>
          <p className={`${styles.gCol} ${styles.xxl6} ${styles.xs24}`}>
            Visit us
          </p>
          <h2
            className={`${styles.studioName} ${styles.gCol} ${styles.xxl18} ${styles.xs24} ${styles.midstatement}`}
          >
            Mumbai
          </h2>
        </div>

        <div
          className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
        >
          <img
            alt=""
            className={styles.photo}
            src="/assets/officeimages/img4.png"
          />
        </div>

        <div className={`${styles.infoRow} ${styles.gRow} ${styles.reversed}`}>
          <div
            className={`${styles.info} ${styles.gCol} ${styles.xxl12} ${styles.xs19} ${styles.xsOffset5}`}
          >
            <Link
              data-hitarea
              className={`${styles.location} ${styles.whitespacePreline}`}
              href=""
              target="_blank"
            >
              301, HSBC Building, Pali Road, Bandra West, Mumbai - 400050
            </Link>
            <Link
              data-hitarea
              className={styles.contact}
              href="mailto:info@rpsgmedia.com"
              target="_blank"
            >
              info@rpsgmedia.com
            </Link>
          </div>

          <div
            className={`${styles.gCol} ${styles.xxl12} ${styles.xs19} ${styles.xsOffset5}`}
          >
            <div
              className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
            >
              <img
                alt="Bürostudios Coimbra #2"
                className={styles.photo}
                src="/assets/officeimages/img5.png"
              />
            </div>
            <div
              className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
            >
              <img
                alt="Bürostudios Coimbra #3"
                className={styles.photo}
                src="/assets/officeimages/img1.jpg"
              />
            </div>
            <div
              className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
            >
              <img
                alt="Bürostudios Coimbra #4"
                className={styles.photo}
                src="/assets/officeimages/img3.jpg"
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Office;
