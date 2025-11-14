// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { IoIosArrowRoundDown } from "react-icons/io";

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const containerRef = useRef(null);
//   const centerRef = useRef(null);
//   const layersRef = useRef([]);
//   const introDescRef = useRef(null); // new ref
//   useGSAP(() => {
//     const introDesc = introDescRef.current;
//     var tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".layered-container",
//         start: "top top",
//         end: "600% top",
//         scrub: 0.4,
//         // markers: true,
//         pin: true,
//       },
//     });
//     gsap.from(".text_1reveal,.text_2reveal, .text_3reveal", {
//       autoAlpha: 0, // handles both opacity and visibility
//       duration: 1,
//       ease: "power2.out",
//       delay: 1,
//       // y:0
//     });
//     gsap.set([".text_2reveal, .text_3reveal"], {
//       opacity: 0,
//       y: 100,
//     });
//     let mm = gsap.matchMedia();

//     mm.add("(min-width: 480px)", () => {
//       tl.to(
//         ".scroll_indicator",
//         {
//           opacity: 0,
//           ease: "linear",
//         },
//         ">"
//       );
//       tl.from(
//         ".layer_1",
//         {
//           width: 0,
//           ease: "linear",
//         },
//         ">-0.5"
//       );
//       tl.to(".text_1reveal", {
//         // opacity: 0,
//         y: -100,
//         ease: "none",
//       });
//       tl.to(".text_2reveal", {
//         opacity: 1,
//         y: 1,
//         ease: "none",
//       });
//       tl.from(
//         ".layer_2,.layer_3,.layer_4,.layer_5,.layer_6,.layer_7,.layer_8",
//         {
//           // opacity: 0,
//           width: 0,
//           ease: "linear",
//           stagger: 0.01,
//         },
//         ">"
//       );

//       tl.to(
//         ".layer_1",
//         {
//           width: "100%",
//           ease: "linear",
//         },
//         "pa"
//       );
//       tl.to(
//         ".layer_2",
//         {
//           width: "110%",
//           ease: "linear",
//         },
//         "pa"
//       );
//       tl.to(
//         ".layer_3",
//         {
//           width: "120%",
//           ease: "linear",
//         },
//         "pa"
//       );
//       tl.to(
//         ".layer_4",
//         {
//           width: "130%",
//           ease: "linear",
//         },
//         "pa"
//       );
//       tl.to(
//         ".layer_5",
//         {
//           width: "140%",
//           ease: "linear",
//         },
//         "pa"
//       );
//       tl.to(
//         ".layer_6",
//         {
//           width: "150%",
//           ease: "linear",
//         },
//         "pa"
//       );
//       tl.to(
//         ".layer_7",
//         {
//           width: "160%",
//           ease: "linear",
//         },
//         "pa"
//       );
//       tl.to(
//         ".layer_8",
//         {
//           width: "170%",
//           ease: "linear",
//         },
//         "pa"
//       );
//       tl.to(
//         ".text_2reveal",
//         {
//           opacity: 0,
//           y: -100,
//           ease: "none",
//         },
//         "c"
//       );
//       tl.to(
//         ".text_3reveal",
//         {
//           opacity: 1,
//           y: 1,
//           ease: "none",
//         },
//         "c"
//       );

//       // tl.to(".expad", {
//       //   height: "auto",
//       //   ease: "linear",
//       // });
//       // tl.to(
//       //   ".text_3reveal",
//       //   {
//       //     opacity: 1,
//       //     y: 0,
//       //     ease: "linear",
//       //   },
//       //   ""
//       // );
//       tl.to(
//         introDesc,
//         {
//           height: "auto", // animate to full content height
//           // height: introDesc.scrollHeight, // animate to full content height
//           duration: 0.8,
//           ease: "linear",
//         },
//         "b"
//       ); // start a little after "b" completes
//       //     // GSAP
//       tl.to(
//         introDesc,
//         {
//           "--mask-pos": "0",
//           ease: "linear",
//         },
//         "b"
//       );
//     });

//     mm.add("(max-width: 479px)", () => {
//       gsap.from(".text_1reveal,.text_2reveal, .text_3reveal", {
//         autoAlpha: 0, // handles both opacity and visibility
//         duration: 1,
//         ease: "power2.out",
//         delay: 1,
//         // y:0
//       });
//       gsap.set([".text_2reveal, .text_3reveal"], {
//         opacity: 0,
//         y: 100,
//       });
//       // Initial state: collapsed
//       tl.to(".scroll_indicator", {
//         opacity: 0,
//         ease: "linear",
//       });
//       tl.from(".layer_1", {
//         height: 0,
//         width: 0,
//         ease: "linear",
//       });
//       tl.to(".text_1reveal", {
//         // opacity: 0,
//         y: -100,
//         ease: "none",
//       });
//       tl.to(".text_2reveal", {
//         opacity: 1,
//         y: 1,
//         ease: "none",
//       });

//       tl.from(
//         ".layer_2, .layer_3, .layer_4, .layer_5, .layer_6, .layer_7, .layer_8",
//         {
//           opacity: 0,
//           height: 0,
//           width: 0,
//           ease: "linear",
//           stagger: 0.01,
//         }
//       );

//       // Animate each layer to increasing vh size (square)
//       tl.to(".layer_1", { height: "170vh", width: "170vh" }, "pa");
//       tl.to(".layer_2", { height: "180vh", width: "180vh" }, "pa");
//       tl.to(".layer_3", { height: "190vh", width: "190vh" }, "pa");
//       tl.to(".layer_4", { height: "200vh", width: "200vh" }, "pa");
//       tl.to(".layer_5", { height: "210vh", width: "210vh" }, "pa");
//       tl.to(".layer_6", { height: "220vh", width: "220vh" }, "pa");
//       tl.to(".layer_7", { height: "230vh", width: "230vh" }, "pa");
//       tl.to(".layer_8", { height: "240vh", width: "240vh" }, "pa");
//       tl.to(
//         ".text_2reveal",
//         {
//           opacity: 0,
//           y: -100,
//           ease: "none",
//         },
//         "c"
//       );
//       tl.to(
//         ".text_3reveal",
//         {
//           opacity: 1,
//           y: 1,
//           ease: "none",
//         },
//         "c"
//       );
//       tl.to(introDesc, {
//         height: introDesc.scrollHeight, // animate to full content height
//         duration: 1,
//         //   ease: "power2.inOut",
//       }); // start a little after "b" completes

//       //     // GSAP
//       tl.to(introDesc, {
//         "--mask-pos": "0",
//         duration: 1,
//         ease: "power2.inOut",
//       });
//     });
//   });

//   return (
//     <div className="layered-container" ref={containerRef}>
//       <div className="layers-wrapper">
//         {[...Array(8)].map((_, i) => (
//           <div
//             key={i}
//             className={`layer layer_${i + 1}`}
//             ref={(el) => (layersRef.current[i] = el)}
//           />
//         ))}
//       </div>
//       <div className="scroll_indicator">
//         Scroll{" "}
//         <span>
//           <IoIosArrowRoundDown />
//         </span>
//       </div>
//       <div className="card_about_content">
//         <>
//           <div className="about_titleReveal">
//             <h2 className="about_title text_1reveal">Be real</h2>
//             <h2 className="about_title text_2reveal">Be relevant</h2>
//             <h2 className="about_title text_3reveal">Be Confluential</h2>
//           </div>

//           {/* </div> */}
//           <div className="home-intro-description" ref={introDescRef}>
//             <p className="about_intro_desc">
//               Since our inception, we've brough ought together globel y
//               respected editorial voices nform, inspire, and infuarce. From
//               entertainment to ury our brendesh conversations that matter we
//               invest ceecly in every the one can ghing asch are Loury, our brer
//               de we own, ghing each one the locus, meghty and comets
//               deserves-building media that endures, not just performs. ands show
//               conversations that matter.
//             </p>
//             <br />
//             <p className="about_intro_desc">
//               Since our incept on, we've brought together globally respected
//               editoria okto mom, nacine, and influence. From entertainment to
//               luxury, our brands shape conversations that matter. We invest
//               deeply in every file we own, у літу насе The focus, integrity and
//               creative ambition.
//             </p>
//           </div>
//         </>
//       </div>
//     </div>
//   );
// };

// export default About;

"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { useRouter } from "next/router";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const layersRef = useRef([]);
  const introDescRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    const ctx = gsap.context(() => {
      const introDesc = introDescRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "600% top",
          scrub: 0.4,
          pin: true,
        },
      });

      gsap.from(".text_1reveal,.text_2reveal,.text_3reveal", {
        autoAlpha: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1,
      });

      gsap.set([".text_2reveal, .text_3reveal"], { opacity: 0, y: 100 });

      let mm = gsap.matchMedia();

      mm.add("(min-width: 480px)", () => {
        tl.to(".scroll_indicator", { opacity: 0 }, ">");
        tl.from(".layer_1", { width: 0 }, ">-0.5");
        tl.to(".text_1reveal", { y: -100 });
        tl.to(".text_2reveal", { opacity: 1, y: 1 });

        tl.from(
          ".layer_2,.layer_3,.layer_4,.layer_5,.layer_6,.layer_7,.layer_8",
          {
            width: 0,
            stagger: 0.01,
          },
          ">"
        );

        const widths = [
          "100%",
          "110%",
          "120%",
          "130%",
          "140%",
          "150%",
          "160%",
          "170%",
        ];

        widths.forEach((w, i) => {
          tl.to(`.layer_${i + 1}`, { width: w }, "pa");
        });

        tl.to(".text_2reveal", { opacity: 0, y: -100 }, "c");
        tl.to(".text_3reveal", { opacity: 1, y: 1 }, "c");

        tl.to(introDesc, { height: "auto", duration: 0.8 }, "b");
        tl.to(introDesc, { "--mask-pos": "0" }, "b");
      });

      mm.add("(max-width: 479px)", () => {
        tl.to(".scroll_indicator", { opacity: 0 });
        tl.from(".layer_1", { height: 0, width: 0 });

        tl.to(".text_1reveal", { y: -100 });
        tl.to(".text_2reveal", { opacity: 1, y: 1 });

        tl.from(
          ".layer_2,.layer_3,.layer_4,.layer_5,.layer_6,.layer_7,.layer_8",
          {
            opacity: 0,
            height: 0,
            width: 0,
            stagger: 0.01,
          }
        );

        for (let i = 1; i <= 8; i++) {
          tl.to(
            `.layer_${i}`,
            {
              height: `${170 + (i - 1) * 10}vh`,
              width: `${170 + (i - 1) * 10}vh`,
            },
            "pa"
          );
        }

        tl.to(".text_2reveal", { opacity: 0, y: -100 }, "c");
        tl.to(".text_3reveal", { opacity: 1, y: 1 }, "c");

        tl.to(introDesc, { height: introDesc.scrollHeight }, "b");
        tl.to(introDesc, { "--mask-pos": "0" }, "b");
      });
    }, containerRef);

    // 🔥 Cleanup On Unmount
    return () => ctx.revert();
  },[router.asPath]);
  return (
    <div className="layered-container" ref={containerRef}>
      <div className="layers-wrapper">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`layer layer_${i + 1}`}
            ref={(el) => (layersRef.current[i] = el)}
          />
        ))}
      </div>

      <div className="scroll_indicator">
        Scroll{" "}
        <span>
          <IoIosArrowRoundDown />
        </span>
      </div>

      <div className="card_about_content">
        <div className="about_titleReveal">
          <h2 className="about_title text_1reveal">Be real</h2>
          <h2 className="about_title text_2reveal">Be relevant</h2>
          <h2 className="about_title text_3reveal">Be Confluential</h2>
        </div>

        <div className="home-intro-description" ref={introDescRef}>
          <p className="about_intro_desc">
            Since our inception, we've brough ought together globel y respected
            editorial voices nform, inspire, and infuarce. From entertainment to
            ury our brendesh conversations that matter we invest ceecly in every
            the one can ghing asch are Loury, our brer de we own, ghing each one
            the locus, meghty and comets deserves-building media that endures,
            not just performs. ands show conversations that matter.
          </p>
          <br />
          <p className="about_intro_desc">
            Since our incept on, we've brought together globally respected
            editoria okto mom, nacine, and influence. From entertainment to
            luxury, our brands shape conversations that matter. We invest deeply
            in every file we own, у літу насе The focus, integrity and
            creative ambition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
