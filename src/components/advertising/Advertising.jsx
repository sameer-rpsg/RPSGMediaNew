// import React, { useEffect, useRef } from "react";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import SplitText from "gsap/dist/SplitText";
// import gsap from "gsap";
// gsap.registerPlugin(ScrollTrigger, SplitText);
// const Advertising = () => {
//   const paraRef = useRef(null);
//   const HeadingRef = useRef(null);

//   useEffect(() => {
//     const el = paraRef.current;
//     const el2 = HeadingRef.current;

//     // Split paragraph into lines first
//     const splitLines = new SplitText(el, {
//       type: "lines",
//       linesClass: "extra-split-line",
//     });

//     // Then split each line into words
//     const splitWords = new SplitText(splitLines.lines, {
//       type: "lines",
//       // wordsClass: "extra-split-word",
//       linesClass: "extra-split-line",
//     });

//     // Animate the words inside each line
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: [el, el2],
//         start: "top 85%",
//         toggleActions: "play none none reverse",
//       },
//     });

//     tl.from(
//       splitWords.lines,
//       {
//         opacity: 0,
//         yPercent: 100,
//         ease: "power3.out",
//         duration: 1,
//         stagger: 0.05, // each word staggered
//       }
//       // ,"a").to(".split",{
//       //   transform:"scaleX(1)",
//       //   transformOrigin:"left",
//       //   delay:0.5
//       // },"a"),
//       // tl.fromTo(".will-animate",{
//       //   opacity:0
//       // },{
//       //   duration:1,
//       //   ease:"linear",
//       //   opacity:1
//       // }
//     );

//     // Cleanup
//     return () => {
//       splitWords.revert();
//       splitLines.revert();
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);
//   return (
//     <>
//       <div className="Advertising_cntr">
//         <div className="advertising_cntr_row">
//           <div className="advertising_cntr_row_title">
//             <h2 ref={HeadingRef}>
//               Our legacy brands
//             </h2>
//           </div>
//           <div className="advertising_cntr_row_para">
//             <p ref={paraRef}>
//               Commitment to the highest quality production standards, a broad
//               expertise, and a genuine strive to help our clients have secured
//               us strategic cooperation with market-leading companies in many
//               sectors and regions.
//             </p>
//           </div>
//         </div>
//         <div className="partner_logo_cntr">
//           <ul className="clients-tile">
//             <li className="our_client_logo">
//               <div className="our_client_logo_card card--client-logo">
//                 {/* <div className="card__sizer"></div> */}
//                 <div className="card__center">
//                   <div className="card__image">
//                     <picture className=" " draggable="false">
//                       <img
//                         height="866"
//                         width="1540"
//                         loading="lazy"
//                         src="https://strapi-bus-eng-prod.s3.amazonaws.com/CROPPED_BRAND_AD_HERO_06a300de29.jpg"
//                         alt=""
//                       />
//                     </picture>
//                   </div>
//                 </div>
//                 <div className="card_center2">
//                   <img
//                     src="https://strapi-bus-eng-prod.s3.amazonaws.com/AD_logo_white_e22dd4aee8.svg"
//                     alt=""
//                   />
//                 </div>
//               </div>
//             </li>
//             <li className="our_client_logo">
//               <div className="our_client_logo_card card--client-logo">
//                 {/* <div className="card__sizer"></div> */}
//                 <div className="card__center">
//                   <div className="card__image">
//                     <picture className=" " draggable="false">
//                       <img
//                         height="866"
//                         width="1540"
//                         loading="lazy"
//                         src="https://strapi-bus-eng-prod.s3.amazonaws.com/CROPPED_BRAND_AD_HERO_06a300de29.jpg"
//                         alt=""
//                       />
//                     </picture>
//                   </div>
//                 </div>
//                 <div className="card_center2">
//                   <img src="/assets/logosimages/Allure_logo_black.svg" alt="" />
//                 </div>
//               </div>
//             </li>
//             <li className="our_client_logo">
//               <div className="our_client_logo_card card--client-logo">
//                 {/* <div className="card__sizer"></div> */}
//                 <div className="card__center">
//                   <div className="card__image">
//                     <picture className=" " draggable="false">
//                       <img
//                         height="866"
//                         width="1540"
//                         loading="lazy"
//                         src="https://strapi-bus-eng-prod.s3.amazonaws.com/CROPPED_BRAND_AD_HERO_06a300de29.jpg"
//                         alt=""
//                       />
//                     </picture>
//                   </div>
//                 </div>
//                 <div className="card_center2">
//                   <img
//                     src="/assets/logosimages/ars_technica_vector2.png"
//                     alt=""
//                   />
//                 </div>
//               </div>
//             </li>
//             <li className="our_client_logo">
//               <div className="our_client_logo_card card--client-logo">
//                 {/* <div className="card__sizer"></div> */}
//                 <div className="card__center">
//                   <div className="card__image">
//                     <picture className=" " draggable="false">
//                       <img
//                         height="866"
//                         width="1540"
//                         loading="lazy"
//                         src="https://strapi-bus-eng-prod.s3.amazonaws.com/CROPPED_BRAND_AD_HERO_06a300de29.jpg"
//                         alt=""
//                       />
//                     </picture>
//                   </div>
//                 </div>
//                 <div className="card_center2">
//                   <img src="/assets/logosimages/BA_final_.png" alt="" />
//                 </div>
//               </div>
//             </li>
//             <li className="our_client_logo">
//               <div className="our_client_logo_card card--client-logo">
//                 {/* <div className="card__sizer"></div> */}
//                 <div className="card__center">
//                   <div className="card__image">
//                     <picture className=" " draggable="false">
//                       <img
//                         height="866"
//                         width="1540"
//                         loading="lazy"
//                         src="https://strapi-bus-eng-prod.s3.amazonaws.com/CROPPED_BRAND_AD_HERO_06a300de29.jpg"
//                         alt=""
//                       />
//                     </picture>
//                   </div>
//                 </div>
//                 <div className="card_center2">
//                   <img src="/assets/logosimages/epicurious_.png" alt="" />
//                 </div>
//               </div>
//             </li>
//             <li className="our_client_logo">
//               <div className="our_client_logo_card card--client-logo">
//                 {/* <div className="card__sizer"></div> */}
//                 <div className="card__center">
//                   <div className="card__image">
//                     <picture className=" " draggable="false">
//                       <img
//                         height="866"
//                         width="1540"
//                         loading="lazy"
//                         src="https://strapi-bus-eng-prod.s3.amazonaws.com/CROPPED_BRAND_AD_HERO_06a300de29.jpg"
//                         alt=""
//                       />
//                     </picture>
//                   </div>
//                 </div>
//                 <div className="card_center2">
//                   <img src="/assets/logosimages/Glamour_NEW_.png" alt="" />
//                 </div>
//               </div>
//             </li>
//             <li className="our_client_logo">
//               <div className="our_client_logo_card card--client-logo">
//                 {/* <div className="card__sizer"></div> */}
//                 <div className="card__center">
//                   <div className="card__image">
//                     <picture className=" " draggable="false">
//                       <img
//                         height="866"
//                         width="1540"
//                         loading="lazy"
//                         src="https://strapi-bus-eng-prod.s3.amazonaws.com/CROPPED_BRAND_AD_HERO_06a300de29.jpg"
//                         alt=""
//                       />
//                     </picture>
//                   </div>
//                 </div>
//                 <div className="card_center2">
//                   <img
//                     src="/assets/logosimages/THEM_2022_logo_final_white_.png"
//                     alt=""
//                   />
//                 </div>
//               </div>
//             </li>
//             <li className="our_client_logo">
//               <div className="our_client_logo_card card--client-logo">
//                 {/* <div className="card__sizer"></div> */}
//                 <div className="card__center">
//                   <div className="card__image">
//                     <picture className=" " draggable="false">
//                       <img
//                         height="866"
//                         width="1540"
//                         loading="lazy"
//                         src="https://strapi-bus-eng-prod.s3.amazonaws.com/CROPPED_BRAND_AD_HERO_06a300de29.jpg"
//                         alt=""
//                       />
//                     </picture>
//                   </div>
//                 </div>
//                 <div className="card_center2">
//                   <img src="/assets/logosimages/GQ_FULL_WHITE_.png" alt="" />
//                 </div>
//               </div>
//             </li>
//             <li className="our_client_logo">
//               <div className="our_client_logo_card card--client-logo">
//                 {/* <div className="card__sizer"></div> */}
//                 <div className="card__center">
//                   <div className="card__image">
//                     <picture className=" " draggable="false">
//                       <img
//                         height="866"
//                         width="1540"
//                         loading="lazy"
//                         src="https://strapi-bus-eng-prod.s3.amazonaws.com/CROPPED_BRAND_AD_HERO_06a300de29.jpg"
//                         alt=""
//                       />
//                     </picture>
//                   </div>
//                 </div>
//                 <div className="card_center2">
//                   <img
//                     src="/assets/logosimages/House_And_Garden_MAIN.png"
//                     alt=""
//                   />
//                 </div>
//               </div>
//             </li>
//             <li className="our_client_logo">
//               <div className="our_client_logo_card card--client-logo">
//                 {/* <div className="card__sizer"></div> */}
//                 <div className="card__center">
//                   <div className="card__image">
//                     <picture className=" " draggable="false">
//                       <img
//                         height="866"
//                         width="1540"
//                         loading="lazy"
//                         src="https://strapi-bus-eng-prod.s3.amazonaws.com/CROPPED_BRAND_AD_HERO_06a300de29.jpg"
//                         alt=""
//                       />
//                     </picture>
//                   </div>
//                 </div>
//                 <div className="card_center2">
//                   <img
//                     src="/assets/logosimages/la_cucina_italiana_logo_.svg"
//                     alt=""
//                   />
//                 </div>
//               </div>
//             </li>
//             <li className="our_client_logo">
//               <div className="our_client_logo_card card--client-logo">
//                 {/* <div className="card__sizer"></div> */}
//                 <div className="card__center">
//                   <div className="card__image">
//                     <picture className=" " draggable="false">
//                       <img
//                         height="866"
//                         width="1540"
//                         loading="lazy"
//                         src="https://strapi-bus-eng-prod.s3.amazonaws.com/CROPPED_BRAND_AD_HERO_06a300de29.jpg"
//                         alt=""
//                       />
//                     </picture>
//                   </div>
//                 </div>
//                 <div className="card_center2">
//                   <img src="/assets/logosimages/Love_logo_black_.svg" alt="" />
//                 </div>
//               </div>
//             </li>
//             <li className="our_client_logo">
//               <div className="our_client_logo_card card--client-logo">
//                 {/* <div className="card__sizer"></div> */}
//                 <div className="card__center">
//                   <div className="card__image">
//                     <picture className=" " draggable="false">
//                       <img
//                         height="866"
//                         width="1540"
//                         loading="lazy"
//                         src="https://strapi-bus-eng-prod.s3.amazonaws.com/CROPPED_BRAND_AD_HERO_06a300de29.jpg"
//                         alt=""
//                       />
//                     </picture>
//                   </div>
//                 </div>
//                 <div className="card_center2">
//                   <img
//                     src="/assets/logosimages/pitchfork_logo_white.png"
//                     alt=""
//                   />
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Advertising;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import FadeSpan from "../common/FadeSpan";
import Aos from "aos";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Advertising = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = paraRef.current;
      const el2 = headingRef.current;

      if (!el || !el2) return;

      const splitLines = new SplitText(el, {
        type: "lines",
        linesClass: "extra-split-line",
      });
      const splitWords = new SplitText(splitLines.lines, {
        type: "lines",
        linesClass: "extra-split-line",
      });

      gsap.from(splitWords.lines, {
        opacity: 0,
        yPercent: 100,
        ease: "power3.out",
        duration: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ========================
  //  Brand Logos Data
  // ========================
  const brands = [
    {
      logo: "https://strapi-bus-eng-prod.s3.amazonaws.com/AD_logo_white_e22dd4aee8.svg",
    },
    { logo: "/assets/logosimages/Allure_logo_black.svg" },
    { logo: "/assets/logosimages/ars_technica_vector2.png" },
    { logo: "/assets/logosimages/BA_final_.png" },
    { logo: "/assets/logosimages/epicurious_.png" },
    { logo: "/assets/logosimages/Glamour_NEW_.png" },
    { logo: "/assets/logosimages/THEM_2022_logo_final_white_.png" },
    { logo: "/assets/logosimages/GQ_FULL_WHITE_.png" },
    { logo: "/assets/logosimages/House_And_Garden_MAIN.png" },
    { logo: "/assets/logosimages/la_cucina_italiana_logo_.svg" },
    { logo: "/assets/logosimages/Love_logo_black_.svg" },
    { logo: "/assets/logosimages/pitchfork_logo_white.png" },
  ];

  const bgImage =
    "https://strapi-bus-eng-prod.s3.amazonaws.com/CROPPED_BRAND_AD_HERO_06a300de29.jpg";
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refreshHard();
  }, []);
  return (
    <section ref={sectionRef} className="Advertising_cntr">
      {/* ======================== */}
      {/* Heading & Paragraph */}
      {/* ======================== */}
      <div className="advertising_cntr_row">
        <FadeSpan delay={400}>
          <div className="advertising_cntr_row_title">
            <h2 ref={headingRef}>Our legacy brands</h2>
          </div>
        </FadeSpan>
        <div className="advertising_cntr_row_para">
          <p ref={paraRef}>
            Commitment to the highest quality production standards, a broad
            expertise, and a genuine strive to help our clients have secured us
            strategic cooperation with market-leading companies in many sectors
            and regions.
          </p>
        </div>
      </div>

      {/* ======================== */}
      {/* Brand Logos Grid */}
      {/* ======================== */}
      <div className="partner_logo_cntr">
        <ul className="clients-tile">
          {brands.map((brand, index) => (
            <FadeSpan delay={index * 50}>
              <li key={index} className="our_client_logo">
                <div className="our_client_logo_card card--client-logo">
                  <div className="card__center">
                    <div className="card__image">
                      <picture draggable="false">
                        <img
                          height="866"
                          width="1540"
                          loading="lazy"
                          src={bgImage}
                          alt={`Brand background ${index + 1}`}
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="card_center2">
                    <img src={brand.logo} alt={`Brand logo ${index + 1}`} />
                  </div>
                </div>
              </li>
            </FadeSpan>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Advertising;
