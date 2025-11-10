// import React, { useEffect } from "react";
// import styles from "@/components/about/About.module.css";
// import Link from "next/link";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import Image from "next/image";
// import FadeSpan from "../common/FadeSpan";
// gsap.registerPlugin(ScrollTrigger);
// const Office = () => {
//   useEffect(() => {
//     const elements = document.querySelectorAll(`.${styles.photo}`);

//     elements.forEach((el) => {
//       // apply marginTop like the original
//       el.style.marginTop = `${-0.1 * el.offsetHeight}px`;

//       // disable animation for touch devices
//       if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

//       const fromVars = {
//         y: -el.offsetHeight * 0.15,
//       };
//       const toVars = {
//         y: el.offsetHeight * 0.15,
//         ease: "none",
//         scrollTrigger: {
//           trigger: el.parentElement,
//           scrub: true,
//         },
//       };

//       gsap.fromTo(el, fromVars, toVars);
//     });

//     // cleanup on unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//       gsap.globalTimeline.clear();
//     };
//   }, []);
//   return (
//     <section className={styles.studioShowcase}>
//       <div className={`${styles.item_divider} ${styles.line_divider}`}></div>

//       {/* PORTO */}
//       <article className={styles.studioItem}>
//         <div className={styles.gRow}>
//           <FadeSpan delay={200}>
//           <p className={`${styles.gCol} ${styles.xxl6} ${styles.xs24}`}>
//             Visit us
//           </p>
//           </FadeSpan>
//           <FadeSpan  delay={400}>
//           <h2
//             className={`${styles.studioName} ${styles.gCol} ${styles.xxl18} ${styles.xs24} ${styles.midstatement}`}
//           >
//             Mumbai
//           </h2>
//           </FadeSpan>
//         </div>
//       <FadeSpan>
//         <div
//           className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
//         >
//           <Image width={1000} height={1000}
//             alt=""
//             className={styles.photo}
//             src="/assets/officeimages/img6.png"
//           />
//         </div>
//     </FadeSpan>
//         <div className={`${styles.infoRow} ${styles.gRow}`}>
//           <div
//             className={`${styles.info} ${styles.gCol} ${styles.xxl12} ${styles.xs19} ${styles.xsOffset5}`}
//           >
//             <Link
//               className={`${styles.location} ${styles.whitespacePreline}`}
//               href="#"
//               target="_blank"
//             >
//               301, HSBC Building, Pali Road, Bandra West, Mumbai - 400050
//             </Link>
//             <Link
//               className={styles.contact}
//               href="mailto:info@rpsgmedia.com"
//               target="_blank"
//             >
//               info@rpsgmedia.com
//             </Link>
//           </div>

//           <div
//             className={`${styles.gCol} ${styles.xxl12} ${styles.xs19} ${styles.xsOffset5}`}
//           >
//             <div
//               className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
//             >
//               <Image width={1000} height={1000}
//                 alt=""
//                 className={styles.photo}
//                 src="/assets/officeimages/img7.png"
//               />
//             </div>
//             <div
//               className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
//             >
//               <Image width={1000} height={1000}
//                 alt=""
//                 className={styles.photo}
//                 src="/assets/officeimages/img2.jpg"
//               />
//             </div>
//           </div>
//         </div>
//       </article>

//       <div className={styles.itemDivider}></div>

//       {/* COIMBRA */}
//       <article className={styles.studioItem}>
//         <div className={styles.gRow}>
//           <p className={`${styles.gCol} ${styles.xxl6} ${styles.xs24}`}>
//             Visit us
//           </p>
//           <h2
//             className={`${styles.studioName} ${styles.gCol} ${styles.xxl18} ${styles.xs24} ${styles.midstatement}`}
//           >
//             Delhi
//           </h2>
//         </div>

//         <div
//           className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
//         >
//           <Image width={1000} height={1000}
//             alt=""
//             className={styles.photo}
//             src="/assets/officeimages/img4.png"
//           />
//         </div>

//         <div className={`${styles.infoRow} ${styles.gRow} ${styles.reversed}`}>
//           <div
//             className={`${styles.info} ${styles.gCol} ${styles.xxl12} ${styles.xs19} ${styles.xsOffset5}`}
//           >
//             <Link
//               data-hitarea
//               className={`${styles.location} ${styles.whitespacePreline}`}
//               href=""
//               target="_blank"
//             >
//               301, HSBC Building, Pali Road, Bandra West, Mumbai - 400050
//             </Link>
//             <Link
//               data-hitarea
//               className={styles.contact}
//               href="mailto:info@rpsgmedia.com"
//               target="_blank"
//             >
//               info@rpsgmedia.com
//             </Link>
//           </div>

//           <div
//             className={`${styles.gCol} ${styles.xxl12} ${styles.xs19} ${styles.xsOffset5}`}
//           >
//             <div
//               className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
//             >
//               <Image width={1000} height={1000}
//                 alt=""
//                 className={styles.photo}
//                 src="/assets/officeimages/img5.png"
//               />
//             </div>
//             <div
//               className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
//             >
//               <Image width={1000} height={1000}
//                 alt=""
//                 className={styles.photo}
//                 src="/assets/officeimages/img1.jpg"
//               />
//             </div>
//             <div
//               className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
//             >
//               <Image width={1000} height={1000}
//                 alt=""
//                 className={styles.photo}
//                 src="/assets/officeimages/img3.jpg"
//               />
//             </div>
//           </div>
//         </div>
//       </article>
//     </section>
//   );
// };

// export default Office;

import React, { useEffect, useRef } from "react";
import styles from "@/components/about/About.module.css";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FadeSpan from "../common/FadeSpan";

gsap.registerPlugin(ScrollTrigger);

const OfficeSection = ({ city, address, email, images, reversed }) => (
  <article className={styles.studioItem}>
    <FadeSpan delay={200}>
      <div className={styles.gRow}>
        <p className={`${styles.gCol} ${styles.xxl6} ${styles.xs24}`}>
          Visit us
        </p>
        <h2
          className={`${styles.studioName} ${styles.gCol} ${styles.xxl18} ${styles.xs24} ${styles.midstatement}`}
        >
          {city}
        </h2>
      </div>
    </FadeSpan>

    <FadeSpan delay={400}>
      <div
        className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
      >
        <Image
          width={1000}
          height={1000}
          alt={`${city} main`}
          className={styles.photo}
          src={images[0]}
        />
      </div>
    </FadeSpan>
<FadeSpan delay={400}>
    <div
      className={`${styles.infoRow} ${styles.gRow} ${
        reversed ? styles.reversed : ""
      }`}
    >
      <div
        className={`${styles.info} ${styles.gCol} ${styles.xxl12} ${styles.xs19} ${styles.xsOffset5}`}
      >
        <Link
          className={`${styles.location} ${styles.whitespacePreline}`}
          href="#"
          target="_blank"
        >
          {address}
        </Link>
        <Link
          className={styles.contact}
          href={`mailto:${email}`}
          target="_blank"
        >
          {email}
        </Link>
      </div>

      <div
        className={`${styles.gCol} ${styles.xxl12} ${styles.xs19} ${styles.xsOffset5}`}
      >
        {images.slice(1).map((src, i) => (
          <FadeSpan delay={i * 200}>
            <div
              key={i}
              className={`${styles.maskedImg} ${styles.mbgridMargin} ${styles.mc}`}
            >
              <Image
                width={1000}
                height={1000}
                alt={`${city} image ${i + 2}`}
                className={styles.photo}
                src={src}
              />
            </div>
          </FadeSpan>
        ))}
      </div>
    </div>
    </FadeSpan>
  </article>
);

const Office = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return; // skip for touch devices

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(`.${styles.photo}`);
      elements.forEach((el) => {
        const height = el.offsetHeight;
        el.style.marginTop = `${-0.1 * height}px`;

        gsap.fromTo(
          el,
          { y: -height * 0.15 },
          {
            y: height * 0.15,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup GSAP/ScrollTrigger safely
  }, []);

  return (
    <section ref={sectionRef} className={styles.studioShowcase}>
      <div className={`${styles.item_divider} ${styles.line_divider}`}></div>

      <OfficeSection
        city="Mumbai"
        address="301, HSBC Building, Pali Road, Bandra West, Mumbai - 400050"
        email="info@rpsgmedia.com"
        images={[
          "/assets/officeimages/img6.png",
          "/assets/officeimages/img7.png",
          "/assets/officeimages/img2.jpg",
        ]}
      />

      <div className={styles.itemDivider}></div>

      <OfficeSection
        city="Delhi"
        address="301, HSBC Building, Pali Road, Bandra West, Mumbai - 400050"
        email="info@rpsgmedia.com"
        images={[
          "/assets/officeimages/img4.png",
          "/assets/officeimages/img5.png",
          "/assets/officeimages/img1.jpg",
          "/assets/officeimages/img3.jpg",
        ]}
        reversed
      />
    </section>
  );
};

export default Office;
