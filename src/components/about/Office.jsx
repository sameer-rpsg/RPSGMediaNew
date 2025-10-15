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
    // <section className="_studio-showcase p-small" tagline="Visit us">
    //   <div className="item-divider line-divider" />
    //   <article className="studio-item">
    //     <div className="g-row">
    //       <p className="g-col xxl-6 xs-24">Visit us</p>
    //       <h2 className="studio-name g-col xxl-18 xs-24 mid-statement">
    //         Porto
    //       </h2>
    //     </div>
    //     <div
    //       className="mb-grid-margin m-c masked-img"
    //       style={{
    //         "--height": "2547",
    //         "--width": "3820",
    //       }}
    //     >
    //       <img
    //         alt="Bürostudios Porto #1"
    //         className="photo m-t"
    //         data-uid="lpifn003"
    //         height="2547"
    //         sizes="(max-width: 743px) 100vw, (max-width: 1023px) 150vw, (max-width: 1290px) 200vw, 200vw"
    //         src="/_nuxt/image/11b51e.jpg"
    //         srcSet="                          /_nuxt/image/d9b67b.jpg  743w,                          /_nuxt/image/a474df.jpg 1535w,                          /_nuxt/image/130b2f.jpg 2580w,                          /_nuxt/image/11b51e.jpg 3400w                        "
    //         width="3820"
    //       />
    //     </div>
    //     <div className="info-row g-row">
    //       <div className="info g-col xxl-12 xs-19 xs-offset-5">
    //         <a
    //           aria-label="Open studio location"
    //           className="location whitespace-preline"
    //           data-hitarea=""
    //           href="/data=!3m2!4b1!5s0xd246f47a833da01:0x1116db6997ed7a16!4m6!3m5!1s0xd246f2fded1eefb:0x410ce87bb9a00916!8m2!3d41.1844989!4d-8.6822833!16s%2Fg%2F11c1pcft2h?entry=ttu"
    //           target="_blank"
    //         >
    //           Rua de Alfredo Cunha 133 3º Frt 4450-023 Matosinhos Portugal
    //         </a>
    //         <a
    //           aria-label="Contact studio"
    //           className="contact opacity-40"
    //           data-hitarea=""
    //           href="mailto:info@rpsgmedia.com"
    //           target="_blank"
    //         >
    //           info@rpsgmedia.com
    //         </a>
    //       </div>
    //       <div className="g-col xxl-12 xs-19 xs-offset-5">
    //         <div
    //           className="m-c masked-img mb-grid-margin"
    //           style={{
    //             "--height": "1333",
    //             "--width": "2000",
    //           }}
    //         >
    //           <img
    //             alt="Bürostudios Porto #2"
    //             className="m-t"
    //             data-uid="lpifn5q5"
    //             height="1333"
    //             sizes="(max-width: 743px) 100vw, (max-width: 1023px) 100vw, (max-width: 1290px) 100vw, 100vw"
    //             src="/_nuxt/image/99e3db.jpg"
    //             srcSet="/_nuxt/image/be4750.jpg  743w,/_nuxt/image/f2bd42.jpg 1023w,/_nuxt/image/50c2b6.jpg 1290w,/_nuxt/image/99e3db.jpg 1700w                            "
    //             width="2000"
    //           />
    //         </div>
    //         <div
    //           className="m-c masked-img mb-grid-margin"
    //           style={{
    //             "--height": "1333",
    //             "--width": "2000",
    //           }}
    //         >
    //           <img
    //             alt="Bürostudios Porto #3"
    //             className="m-t"
    //             data-uid="lpifn8zq"
    //             height="1333"
    //             sizes="(max-width: 743px) 100vw, (max-width: 1023px) 100vw, (max-width: 1290px) 100vw, 100vw"
    //             src="/_nuxt/image/ef001d.jpg"
    //             srcSet="/_nuxt/image/a428d4.jpg  743w,/_nuxt/image/646d14.jpg 1023w,/_nuxt/image/908c4f.jpg 1290w,/_nuxt/image/ef001d.jpg 1700w                            "
    //             width="2000"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </article>
    //   <div className="item-divider line-divider" />
    //   <article className="studio-item">
    //     <div className="g-row">
    //       <p className="g-col xxl-6 xs-24">Visit us</p>
    //       <h2 className="studio-name g-col xxl-18 xs-24 mid-statement">
    //         Coimbra
    //       </h2>
    //     </div>
    //     <div
    //       className="mb-grid-margin m-c masked-img"
    //       style={{
    //         "--height": "2548",
    //         "--width": "3820",
    //       }}
    //     >
    //       <img
    //         alt=""
    //         className="photo m-t"
    //         data-uid="m3ymryhl"
    //         height="2548"
    //         sizes="(max-width: 743px) 100vw, (max-width: 1023px) 150vw, (max-width: 1290px) 200vw, 200vw"
    //         src="/_nuxt/image/c4883e.jpg"
    //         srcSet="                          /_nuxt/image/2fa6d2.jpg  743w,                          /_nuxt/image/0fb790.jpg 1535w,                          /_nuxt/image/3efdb0.jpg 2580w,                          /_nuxt/image/c4883e.jpg 3400w                        "
    //         width="3820"
    //       />
    //     </div>
    //     <div className="info-row g-row reversed">
    //       <div className="info g-col xxl-12 xs-19 xs-offset-5">
    //         <a
    //           aria-label="Open studio location"
    //           className="location whitespace-preline"
    //           data-hitarea=""
    //           href="/@40.2391766,-8.4681253,13z/data=!4m14!1m7!3m6!1s0xd22f92ec9504511:0xcde7aaff4083290a!2sB%C3%BCrocratik+Coimbra!8m2!3d40.2392688!4d-8.4344836!16s%2Fg%2F1tfbpltd!3m5!1s0xd22f92ec9504511:0xcde7aaff4083290a!8m2!3d40.2392688!4d-8.4344836!16s%2Fg%2F1tfbpltd?entry=ttu"
    //           target="_blank"
    //         >
    //           Parque Emp. de Eiras Lote 22 3020-430 Coimbra Portugal
    //         </a>
    //         <a
    //           aria-label="Contact studio"
    //           className="contact opacity-40"
    //           data-hitarea=""
    //           href="mailto:info@rpsgmedia.com"
    //           target="_blank"
    //         >
    //           info@rpsgmedia.com
    //         </a>
    //       </div>
    //       <div className="g-col xxl-12 xs-19 xs-offset-5">
    //         <div
    //           className="m-c masked-img mb-grid-margin"
    //           style={{
    //             "--height": "1601",
    //             "--width": "2400",
    //           }}
    //         >
    //           <img
    //             alt="Bürostudios Coimbra #2"
    //             className="m-t"
    //             data-uid="m3ymv95g"
    //             height="1601"
    //             sizes="(max-width: 743px) 100vw, (max-width: 1023px) 100vw, (max-width: 1290px) 100vw, 100vw"
    //             src="/_nuxt/image/7a4e67.jpg"
    //             srcSet="/_nuxt/image/35568f.jpg  743w,/_nuxt/image/c79e3b.jpg 1023w,/_nuxt/image/bb78ea.jpg 1290w,/_nuxt/image/7a4e67.jpg 1700w                            "
    //             width="2400"
    //           />
    //         </div>
    //         <div
    //           className="m-c masked-img mb-grid-margin"
    //           style={{
    //             "--height": "1334",
    //             "--width": "2000",
    //           }}
    //         >
    //           <img
    //             alt="Bürostudios Coimbra #3"
    //             className="m-t"
    //             data-uid="m3ymw25n"
    //             height="1334"
    //             sizes="(max-width: 743px) 100vw, (max-width: 1023px) 100vw, (max-width: 1290px) 100vw, 100vw"
    //             src="/_nuxt/image/bce884.jpg"
    //             srcSet="/_nuxt/image/368c22.jpg  743w,/_nuxt/image/02928d.jpg 1023w,/_nuxt/image/c0b40a.jpg 1290w,/_nuxt/image/bce884.jpg 1700w                            "
    //             width="2000"
    //           />
    //         </div>
    //         <div
    //           className="m-c masked-img mb-grid-margin"
    //           style={{
    //             "--height": "1333",
    //             "--width": "2000",
    //           }}
    //         >
    //           <img
    //             alt="Bürostudios Coimbra #4"
    //             className="m-t"
    //             data-uid="m3yoyf7r"
    //             height="1333"
    //             sizes="(max-width: 743px) 100vw, (max-width: 1023px) 100vw, (max-width: 1290px) 100vw, 100vw"
    //             src="/_nuxt/image/f1e5ef.jpg"
    //             srcSet="/_nuxt/image/f0cdc0.jpg  743w,/_nuxt/image/89dd10.jpg 1023w,/_nuxt/image/079a6d.jpg 1290w,/_nuxt/image/f1e5ef.jpg 1700w                            "
    //             width="2000"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </article>
    // </section>

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
            src="https://www.burocratik.com/_nuxt/image/11b51e.jpg"
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
                src="https://www.burocratik.com/_nuxt/image/99e3db.jpg"
              />
            </div>
            <div
              className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
            >
              <img
                alt="Bürostudios Porto #3"
                className={styles.photo}
                src="https://www.burocratik.com/_nuxt/image/ef001d.jpg"
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
            src="https://www.burocratik.com/_nuxt/image/c4883e.jpg"
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
                src="https://www.burocratik.com/_nuxt/image/7a4e67.jpg"
              />
            </div>
            <div
              className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
            >
              <img
                alt="Bürostudios Coimbra #3"
                className={styles.photo}
                src="https://www.burocratik.com/_nuxt/image/bce884.jpg"
              />
            </div>
            <div
              className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
            >
              <img
                alt="Bürostudios Coimbra #4"
                className={styles.photo}
                src="https://www.burocratik.com/_nuxt/image/f1e5ef.jpg"
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Office;
