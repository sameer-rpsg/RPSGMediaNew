// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const NUM_LAYERS = 12;

// const About = ({ text = "Be relevant" }) => {
//   const containerRef = useRef(null);
//   const centerRef = useRef(null);
//   const layersRef = useRef([]);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=1000%", // longer scroll for clean timing
//         scrub: 1,
//         pin: true,
//         markers: true,
//         duration: 2,
//         ease: "power2.out",
//       },
//     });
//     tl.to(".center-content", {
//       scale: 0.7,
//     },"hh");
//     tl.to([".layer_1",".layer_2",".layer_3",".layer_4",".layer_5",".layer_6",".layer_7"], {
//       scale: 0.5,
//     },"hh");
//     tl.to(
//       ".layer_1",
//       {
//         scale: 1,
//       },
//       "a"
//     );
//     tl.to(
//       ".layer_2",
//       {
//         scale: 1.2,
//       },
//       "a"
//     );
//     tl.to(
//       ".layer_3",
//       {
//         scale: 1.4,
//       },
//       "a"
//     );
//     tl.to(
//       ".layer_4",
//       {
//         scale: 1.6,
//       },
//       "a"
//     );
//     tl.to(
//       ".layer_5",
//       {
//         scale: 1.8,
//       },
//       "a"
//     );
//     tl.to(
//       ".layer_6",
//       {
//         scale: 2,
//       },
//       "a"
//     );
//     tl.to(
//       ".layer_7",
//       {
//         scale: 2.2,
//       },
//       "a"
//     );
//     tl.to(
//       ".center-content",
//       {
//         scale: 2,
//       },
//       "b"
//     );
//     tl.to(
//       ".layer_1",
//       {
//         scale: 2.2,
//       },
//       "b"
//     );
//     tl.to(
//       ".layer_2",
//       {
//         scale: 2.4,
//       },
//       "b"
//     );
//     tl.to(
//       ".layer_3",
//       {
//         scale: 2.6,
//       },
//       "b"
//     );
//     tl.to(
//       ".layer_4",
//       {
//         scale: 2.8,
//       },
//       "b"
//     );
//     tl.to(
//       ".layer_5",
//       {
//         scale: 3,
//       },
//       "b"
//     );
//     tl.to(
//       ".layer_6",
//       {
//         scale: 3.2,
//       },
//       "b"
//     );
//     tl.to(
//       ".layer_7",
//       {
//         scale: 3.4,
//       },
//       "b"
//     );
//   }, []);

//   //   layersRef.current = [];

//   //   const addLayerRef = el => {
//   //     if (el && !layersRef.current.includes(el)) {
//   //       layersRef.current.push(el);
//   //     }
//   //   };

//   // useEffect(() => {
//   //   const ctx = gsap.context(() => {
//   //     gsap.set(centerRef.current, { scale: 0 });
//   //     gsap.set(layersRef.current, { scale: 0 });

//   //     const tl = gsap.timeline({
//   //       scrollTrigger: {
//   //         trigger: containerRef.current,
//   //         start: "top top",
//   //         end: "+=200%", // longer scroll for clean timing
//   //         scrub: true,
//   //         pin: true,
//   //       }
//   //     });

//   //     // 1. Scale center-content
//   //     tl.to(centerRef.current, {
//   //       scale: 0.5,
//   //       duration: 1,
//   //       ease: "power2.out",
//   //     });

//   //     // 2. Scale each layer sequentially (no overlap)
//   //     const reversedLayers = [...layersRef.current].reverse();

//   //     reversedLayers.forEach((layer, i) => {
//   //       const finalScale = 1 - i * 0.2; // e.g., 1, 0.8, 0.6, ...

//   //       if (finalScale > 0) {
//   //         tl.to(layer, {
//   //           scale: finalScale,
//   //           duration: 0.5,
//   //           ease: "power2.out",
//   //         });
//   //       }
//   //     });

//   //   }, containerRef);

//   //   return () => ctx.revert();
//   // }, []);

//   return (
//     <div className="layered-container" ref={containerRef}>
//       <div className="layers-wrapper">
//         <div className="layer layer_1"></div>
//         <div className="layer layer_2"></div>
//         <div className="layer layer_3"></div>
//         <div className="layer layer_4"></div>
//         <div className="layer layer_5"></div>
//         <div className="layer layer_6"></div>
//         <div className="layer layer_7"></div>
//         <div className="layer layer_8"></div>
//       </div>
//         <div className="center-content" ref={centerRef}>
//         </div>
//         <div className="card_about_content">
//             <h2 className="about_title">About</h2>
//           <div className="home-intro-description">
//             <span className="about_intro_desc">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam quis nemo corporis accusamus eum, cupiditate voluptatum pariatur nihil non commodi inventore debitis assumenda harum earum ab necessitatibus ipsa? Possimus, accusantium.
//           </span>
//           </div>
//         </div>
//     </div>
//   );
// };

// export default About;

// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const containerRef = useRef(null);
//   const centerRef = useRef(null);
//   const layersRef = useRef([]);
//   const introDescRef = useRef(null); // new ref

//   useEffect(() => {
//     const container = containerRef.current;
//     const center = centerRef.current;
//     const layers = layersRef.current;
//     const introDesc = introDescRef.current;

//     gsap.set([center, ...layers], {
//       transformOrigin: "center center",
//       scale: 0,
//     });

//     // Make sure introDesc starts with height 0
//     gsap.set(introDesc, {
//       height: 0,
//       overflow: "hidden",
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: "+=700%",
//         scrub: 1.2,
//         pin: true,
//         markers: true,
//       },
//       defaults: { ease: "linear", duration: 1 },
//     });
//     // Stage 1: scale everything in together
//     tl.to(
//       [center, ...layers],
//       {
//         scale: (i, target) =>
//           window.innerWidth > 479 ? `0.7 - ${i} * 0.05` : `0.8 - ${i} * 0.05`,
//       },
//       0
//     );

//     // Stage 2: first wave (expand outward)
//     layers.forEach((layer, i) => {
//       tl.to(layer, { scale: 0.8 + i * 0.2, duration:0.5 }, "a");
//     });

//     // Stage 3: second wave (further expansion)
//     layers.forEach((layer, i) => {
//       tl.to(layer, { scale: 3 + i * 0.2, duration:0.5 }, "b");
//     });

//     tl.to(center, { scaleY: 3, scaleX: 2.5, duration:0.5 }, "b");

//     // Stage 4: expand .home-intro-description after "b"
//     tl.to(
//       introDesc,
//       {
//         height: introDesc.scrollHeight, // animate to full content height
//         duration: 1,
//         //   ease: "power2.inOut",
//       },
//       "b+=0.5"
//     ); // start a little after "b" completes

//     // GSAP
//     tl.to(
//       introDesc,
//       {
//         "--mask-pos": "0",
//         duration: 1,
//         ease: "power2.inOut",
//       },
//       "b+=0.5"
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       tl.kill();
//     };
//   }, []);

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

//       <div className="center-content" ref={centerRef}></div>

//       <div className="card_about_content">
//         <h2 className="about_title">About</h2>
//         <div className="home-intro-description" ref={introDescRef}>
//           <p className="about_intro_desc">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
//             quis nemo corporis accusamus eum, cupiditate voluptatum pariatur
//             nihil non commodi inventore debitis assumenda harum earum ab
//             necessitatibus ipsa? Possimus, accusantium.
//           </p>
//           <br />
//           <p className="about_intro_desc">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
//             quis nemo corporis accusamus eum, cupiditate voluptatum pariatur
//             nihil non commodi inventore debitis assumenda harum earum ab
//             necessitatibus ipsa? Possimus, accusantium.
//           </p>
//           <br />
//           <p className="about_intro_desc">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
//             quis nemo corporis accusamus eum, cupiditate voluptatum pariatur
//             nihil non commodi inventore debitis assumenda harum earum ab
//             necessitatibus ipsa? Possimus, accusantium.
//           </p>
//           <br />
//           <p className="about_intro_desc">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
//             quis nemo corporis accusamus eum, cupiditate voluptatum pariatur
//             nihil non commodi inventore debitis assumenda harum earum ab
//             necessitatibus ipsa? Possimus, accusantium.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const layersRef = useRef([]);
  const introDescRef = useRef(null); // new ref
  useGSAP(() => {
    const introDesc = introDescRef.current;
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".layered-container",
        start: "top top",
        end: "600% top",
        scrub: 0.4,
        markers: true,
        pin: true,
      },
    });
    gsap.from(".text_1reveal,.text_2reveal, .text_3reveal", {
      autoAlpha: 0, // handles both opacity and visibility
      duration: 1,
      ease: "power2.out",
      delay: 1,
      // y:0
    });
    gsap.set([".text_2reveal, .text_3reveal"], {
      opacity: 0,
      y: 100,
    });
    let mm = gsap.matchMedia();

    mm.add("(min-width: 480px)", () => {
      tl.from(
        ".layer_1",
        {
          width: 0,
          ease: "linear",
        },
        ">"
      );
      tl.to(
        ".text_1reveal",
        {
          // opacity: 0,
          y: -100,
          ease: "none",
        },
        
      );
      tl.to(
        ".text_2reveal",
        {
          opacity: 1,
          y: 1,
          ease: "none",
        },
        
      );
      tl.from(
        ".layer_2,.layer_3,.layer_4,.layer_5,.layer_6,.layer_7,.layer_8",
        {
          // opacity: 0,
          width: 0,
          ease: "linear",
          stagger: 0.01,
        },
        ">"
      );

      tl.to(
        ".layer_1",
        {
          width: "100%",
          ease: "linear",
        },
        "pa"
      );
      tl.to(
        ".layer_2",
        {
          width: "110%",
          ease: "linear",
        },
        "pa"
      );
      tl.to(
        ".layer_3",
        {
          width: "120%",
          ease: "linear",
        },
        "pa"
      );
      tl.to(
        ".layer_4",
        {
          width: "130%",
          ease: "linear",
        },
        "pa"
      );
      tl.to(
        ".layer_5",
        {
          width: "140%",
          ease: "linear",
        },
        "pa"
      );
      tl.to(
        ".layer_6",
        {
          width: "150%",
          ease: "linear",
        },
        "pa"
      );
      tl.to(
        ".layer_7",
        {
          width: "160%",
          ease: "linear",
        },
        "pa"
      );
      tl.to(
        ".layer_8",
        {
          width: "170%",
          ease: "linear",
        },
        "pa"
      );
      tl.to(
        ".text_2reveal",
        {
          opacity: 0,
          y: -100,
          ease: "none",
        },
        "c"
      );
      tl.to(
        ".text_3reveal",
        {
          opacity: 1,
          y: 1,
          ease: "none",
        },
        "c"
      );

      // tl.to(".expad", {
      //   height: "auto",
      //   ease: "linear",
      // });
      // tl.to(
      //   ".text_3reveal",
      //   {
      //     opacity: 1,
      //     y: 0,
      //     ease: "linear",
      //   },
      //   ""
      // );
      tl.to(
        introDesc,
        {
          height: introDesc.scrollHeight, // animate to full content height
          duration: 0.3,
          ease: "linear",
        },
        "b"
      ); // start a little after "b" completes
      //     // GSAP
      tl.to(
        introDesc,
        {
          "--mask-pos": "0",
          ease: "linear",
        },
        "b"
      );
    });

    mm.add("(max-width: 479px)", () => {
       gsap.from(".text_1reveal,.text_2reveal, .text_3reveal", {
      autoAlpha: 0, // handles both opacity and visibility
      duration: 1,
      ease: "power2.out",
      delay: 1,
      // y:0
    });
    gsap.set([".text_2reveal, .text_3reveal"], {
      opacity: 0,
      y: 100,
    });
      // Initial state: collapsed
      tl.from(
        ".layer_1",
        {
          height: 0,
          width: 0,
          ease: "linear",
        }
      );
       tl.to(
        ".text_1reveal",
        {
          // opacity: 0,
          y: -100,
          ease: "none",
        },
        
      );
      tl.to(
        ".text_2reveal",
        {
          opacity: 1,
          y: 1,
          ease: "none",
        },
        
      );

      tl.from(
        ".layer_2, .layer_3, .layer_4, .layer_5, .layer_6, .layer_7, .layer_8",
        {
          opacity: 0,
          height: 0,
          width: 0,
          ease: "linear",
          stagger: 0.01,
        }
      );

      // Animate each layer to increasing vh size (square)
      tl.to(".layer_1", { height: "170vh", width: "170vh" }, "pa");
      tl.to(".layer_2", { height: "180vh", width: "180vh" }, "pa");
      tl.to(".layer_3", { height: "190vh", width: "190vh" }, "pa");
      tl.to(".layer_4", { height: "200vh", width: "200vh" }, "pa");
      tl.to(".layer_5", { height: "210vh", width: "210vh" }, "pa");
      tl.to(".layer_6", { height: "220vh", width: "220vh" }, "pa");
      tl.to(".layer_7", { height: "230vh", width: "230vh" }, "pa");
      tl.to(".layer_8", { height: "240vh", width: "240vh" }, "pa");
       tl.to(
        ".text_2reveal",
        {
          opacity: 0,
          y: -100,
          ease: "none",
        },
        "c"
      );
      tl.to(
        ".text_3reveal",
        {
          opacity: 1,
          y: 1,
          ease: "none",
        },
        "c"
      );
      tl.to(introDesc, {
        height: introDesc.scrollHeight, // animate to full content height
        duration: 1,
        //   ease: "power2.inOut",
      }); // start a little after "b" completes

      //     // GSAP
      tl.to(introDesc, {
        "--mask-pos": "0",
        duration: 1,
        ease: "power2.inOut",
      });
    });
  });

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

      {/* <div className="center-content" ref={centerRef}></div> */}

      <div className="card_about_content">
        <div className="">
          {/* <div className="about_titlewrapper"> */}
          <div className="about_titleReveal">
            <h2 className="about_title text_1reveal">Be real</h2>
            <h2 className="about_title text_2reveal">Be relevant</h2>
            <h2 className="about_title text_3reveal">
              BeConfluential <sup>TM</sup>
            </h2>
          </div>
          {/* </div> */}
          <div className="home-intro-description" ref={introDescRef}>
            <p className="about_intro_desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              quis nemo corporis accusamus eum, cupiditate voluptatum pariatur
              nihil non commodi inventore debitis assumenda harum earum ab
              necessitatibus ipsa? Possimus, accusantium.
            </p>
            <br />
            <p className="about_intro_desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              quis nemo corporis accusamus eum, cupiditate voluptatum pariatur
              nihil non commodi inventore debitis assumenda harum earum ab
              necessitatibus ipsa? Possimus, accusantium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
