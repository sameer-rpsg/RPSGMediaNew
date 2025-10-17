// ProgressCarousel.jsx
import React, { useEffect, useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Or use "/css/core", "/css/skyblue", etc.
import { FaPlus } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const ProgressCarousel = () => {
  const slides = [
    {
      src: "/assets/selectedimagescompressed/_R1A9438_11zon.jpg",
      alt: "Image 1",
      eventsName:"- THR Top 50 Creators"
    },
    {
      src: "/assets/selectedimagescompressed/Manifest (Adil Hasan) 02_11zon.jpg",
      alt: "Image 2",
      eventsName:"- FMWW 2024"

    },
    {
      src: "/assets/selectedimagescompressed/Manifest x Vaani Kapoor 14-08-253904 copy 2_11zon.jpg",
      alt: "Image 3",
            eventsName:"- Esquire Exclusive"

    },
    {
      src: "/assets/selectedimagescompressed/250726 - 1 - 310_(2) copy a copy_11zon.jpg",
      alt: "Image 4",
    },
  ];
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const paraRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const iconRefs = useRef([]);
  // Optional: reset clipPath on mount
  useGSAP(() => {
    textRefs.current.forEach((el) => {
      gsap.set(el, { clipPath: "inset(100% 0% 0% 0%)" });
    });
    paraRefs.current.forEach((el) => {
      gsap.set(el, { opacity: 0 });
    });
    // Reset icons
    iconRefs.current.forEach((el) => {
      gsap.set(el, { rotate: 0 });
    });
  }, []);

const toggleCard = (index) => {
  const clickedText = textRefs.current[index];
  const clickedIcon = iconRefs.current[index];
  const clickedPara = paraRefs.current[index];
  if (!clickedText || !clickedIcon || !clickedPara) return;

  const tl = gsap.timeline({ defaults: { duration: 0.2, ease: "power2.inOut" } });

  // If same card clicked → just close it
  if (activeIndex === index) {
    tl.to(clickedPara, { opacity: 0 }, 0)
      .to(clickedText, { clipPath: "inset(100% 0% 0% 0%)" }, "<0.1")
      .to(clickedIcon, { rotate: 0 }, 0);

    setActiveIndex(null);
    return;
  }

  // Close previous card if any
  if (activeIndex !== null) {
    const prevText = textRefs.current[activeIndex];
    const prevIcon = iconRefs.current[activeIndex];
    const prevPara = paraRefs.current[activeIndex];

    if (prevText && prevIcon && prevPara) {
      tl.to(prevPara, { opacity: 0 }, 0)
        .to(prevText, { clipPath: "inset(100% 0% 0% 0%)" }, "<0.1")
        .to(prevIcon, { rotate: 0 }, 0);
    }
  }

  // Open clicked card
  tl.to(clickedText, { clipPath: "inset(0% 0% 0% 0%)" }, ">0")
    .to(clickedPara, { opacity: 1, duration: 0.8 }, "<0.1")
    .to(clickedIcon, { rotate: 45 }, "<0.1");

  // Update state
  tl.call(() => setActiveIndex(index));
  };
  return (
    <div id="modern-solutions" ref={containerRef}>
      <div className="statement">
        <h2 className="modern-solutions_text text--display statement__heading">
          Modern solutions for your brand
        </h2>
      </div>
      <div className="recirculation recirculation--no-padding-top">
        <div className="headline headline--no-padding-top recirculation__headline">
          <h3 className="modern-solutions_text text--subtitle1 headline__title">
            A website platform with you in mind
          </h3>
        </div>
        <div className="recirulation__cards-container">
          <Splide
            options={{
              type: "slide",
              perPage: 2,
              pagination: false,
              breakpoints: {
                767: {
                    perPage: 1,
                },
                991: {
                  perPage: 1,
                },
                 1024: {
                  perPage: 2,
                },
                1199: {
                  perPage: 2,
                },
              },
            }}
            onMoved={(splide) => {
              const bar = document.querySelector(".my-slider-progress-bar");
              const end = splide.Components.Controller.getEnd() + 1;
              const rate = Math.min((splide.index + 1) / end, 1);
              if (bar) {
                bar.style.width = `${rate * 100}%`;
              }
            }}
            onMounted={(splide) => {
              const bar = document.querySelector(".my-slider-progress-bar");
              const end = splide.Components.Controller.getEnd() + 1;
              const rate = Math.min((splide.index + 1) / end, 1);
              if (bar) {
                bar.style.width = `${rate * 100}%`;
              }
            }}
            aria-label="React Splide Example"
          >
            {slides.map((data, index) => (
              <SplideSlide>
                {/* <div className="recirculation__cards"> */}
                <div className="recirculation__card" key={index}>
                  <div className="recirculation__card_img-card">
                    <img
                      className="recirculation__card-image"
                      src={data.src}
                      alt={data.alt}
                    />
                  </div>
                </div>
                <div
                  className="recirculation__text-card"
                  ref={(el) => (textRefs.current[index] = el)}
                >
                  <p ref={(el) => (paraRefs.current[index] = el)}>
                    <b>{data.alt}</b>.Commitment to the highest quality
                    production standards, a broad expertise, and a genuine
                    strive to help our clients have secured us strategic
                    cooperation with market-leading companies in many sectors
                    and regions.
                  </p>
                </div>
                <div className="card_bottom">
                    <span>{data.eventsName}</span>
                <div
                  ref={(el) => (iconRefs.current[index] = el)}
                  className="card_btn"
                  onClick={() => toggleCard(index)}
                >
                  <FaPlus />
                </div>
                </div>
                {/* </div> */}
              </SplideSlide>
            ))}
          </Splide>

          {/* Progress bar below carousel */}
          <div className="my-slider-progress">
            <div className="my-slider-progress-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCarousel;
