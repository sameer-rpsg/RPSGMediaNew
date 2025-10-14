import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const OurEvents = () => {
  const containerRef = useRef(null);
  const scrollLeftButtonRef = useRef(null);
  const scrollRightButtonRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  useGSAP(() => {
    // let initialWidth = "66.666%";
    const slider = document.querySelector(".recirculation__cards");
    const scroller = document.querySelector(".recirculation__scrollbar");
    if (!slider || !scroller) return;
    if (window.innerWidth > 768) {
      scroller.style.width = "16.666%";
    } else {
      scroller.style.width = "100%";
    }
    const updateScrollerWidth = () => {
      const scrollPosition = slider.scrollLeft;
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      const newWidthPercentage = Math.max(
        16.666,
        (scrollPosition / maxScrollLeft) * 100
      );
      const newWidth = `${newWidthPercentage}%`;
      gsap.to(scroller, {
        duration: 0.5,
        width: newWidth,
        ease: "power2.out",
      });
    };

    slider.addEventListener("scroll", updateScrollerWidth);
    // return () => {
    //   slider.removeEventListener("scroll", updateScrollerWidth);
    // };
  }, []);
  useEffect(() => {
    // Select all the cards and buttons
    const CARDS = document.querySelectorAll(".recirculation__card");
    const btns = document.querySelectorAll(".card_btn");
    const RtextCards = document.querySelectorAll(".recirculation__text-card");
    const RtextCards_Title = document.querySelectorAll(
      ".recirculation__card-title_cover h1"
    );

    if (
      btns.length !== RtextCards.length ||
      btns.length !== RtextCards_Title.length
    ) {
      console.error(
        "The number of buttons does not match the number of text cards."
      );
      return; // Exit early if there's a mismatch
    }

    btns.forEach((btn, index) => {
      const RtextCard = RtextCards[index];
      const RtextTitle = RtextCards_Title[index];
      const tl = gsap.timeline({ paused: true });

      tl.to(
        RtextCard,
        {
          ease: "circ.inOut",
          duration: 1,
          height: "100%",
        },
        "a"
      )
        .to(
          RtextTitle,
          {
            y: 0,
            delay: 0.3,
            ease: "circ.inOut",
            duration: 1,
          },
          "a"
        )
        .to(
          btn,
          {
            ease: "power4.inOut",
            duration: 0.8,
            rotate: "225deg",
          },
          "a"
        );

      const handleClick = () => {
        if (tl.isActive()) return; // Avoid triggering animations if one is already active
        if (tl.progress() === 1) {
          tl.reverse();
        } else {
          tl.play();
        }
      };

      btn.addEventListener("click", handleClick);

      // Cleanup function to remove event listeners
      return () => {
        btn.removeEventListener("click", handleClick);
      };
    });
  }, []);

  const updateArrowVisibility = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };
  useEffect(() => {
    const handleScrollLeft = () => {
      if (containerRef.current) {
        containerRef.current.scroll({
          left: containerRef.current.scrollLeft - 500,
          behavior: "smooth",
        });
      }
    };

    const handleScrollRight = () => {
      if (containerRef.current) {
        containerRef.current.scroll({
          left: containerRef.current.scrollLeft + 500,
          behavior: "smooth",
        });
      }
    };
    const handleScroll = () => updateArrowVisibility();

    const scrollLeftButton = scrollLeftButtonRef.current;
    const scrollRightButton = scrollRightButtonRef.current;

    if (scrollLeftButton) {
      scrollLeftButton.addEventListener("click", handleScrollLeft);
    }

    if (scrollRightButton) {
      scrollRightButton.addEventListener("click", handleScrollRight);
    }

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollLeftButton) {
        scrollLeftButton.removeEventListener("click", handleScrollLeft);
      }

      if (scrollRightButton) {
        scrollRightButton.removeEventListener("click", handleScrollRight);
      }

      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div id="modern-solutions">
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
        <div className="recirculation__cards-container">
          <div className="recirculation__arrows">
            <button
              ref={scrollLeftButtonRef}
              style={{ opacity: isAtStart ? 0.5 : 1 }}
              disabled={isAtStart}
              className="cta cta--inline recirculation__arrow"
              id="scrollLeft"
              aria-label="Previous"
              // disabled=""
            >
              <svg
                className="recirculation__arrow-svg"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.75 18H10L3 11L10 4L12.75 4L6.75 10L19 10V12L6.75 12L12.75 18Z"></path>
              </svg>
            </button>
            <button
              ref={scrollRightButtonRef}
              style={{ opacity: isAtEnd ? 0.5 : 1 }}
              disabled={isAtEnd}
              className="cta cta--inline recirculation__arrow"
              id="scrollRight"
              aria-label="Next"
            >
              <svg
                className="recirculation__arrow-svg"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.25 18H12L19 11L12 4L9.25 4L15.25 10L3 10V12L15.25 12L9.25 18Z"></path>
              </svg>
            </button>
          </div>
          <div
            className="recirculation__cards"
            ref={containerRef}
            style={{ overflowX: "auto", whiteSpace: "nowrap" }}
          >
            <div className="recirculation__card">
              <div className="recirculation__card_img-card">
                <img
                  className="recirculation__card-image"
                  src="https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/modern-solutions/platform/beauty-2-500w.jpg"
                  alt="A woman with dark hair and unique jewelry in front of an orange background."
                  loading="lazy"
                  width="1980"
                  height="1485"
                  decoding="async"
                />
              </div>
              <div className="recirculation__text-card">
                <div className="recirculation__card-title">
                  <div className="recirculation__card-title_cover">
                    <h1>Bueaty</h1>
                  </div>
                </div>
              </div>
              <div className="card_btn">
                <span className="inner-icon">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="plus-icon undefined"
                  >
                    <path
                      d="M0 8h16M8 0v16"
                      // vector-effect="non-scaling-stroke"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="recirculation__card">
              <div className="recirculation__card_img-card">
                <img
                  className="recirculation__card-image"
                  src="https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/modern-solutions/platform/fitness-2-1500w.webp"
                  alt="A woman with dark hair and unique jewelry in front of an orange background."
                  loading="lazy"
                  width="1980"
                  height="1485"
                  decoding="async"
                />
              </div>
              <div className="recirculation__text-card">
                <div className="recirculation__card-title">
                  <div className="recirculation__card-title_cover">
                    <h1>Bueaty</h1>
                  </div>
                </div>
              </div>
              <div className="card_btn">
                <span className="inner-icon">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="plus-icon undefined"
                  >
                    <path
                      d="M0 8h16M8 0v16"
                      // vector-effect="non-scaling-stroke"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="recirculation__card">
              <div className="recirculation__card_img-card">
                <img
                  className="recirculation__card-image"
                  src="https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/modern-solutions/platform/photography-2-1500w.webp"
                  alt="A woman with dark hair and unique jewelry in front of an orange background."
                  loading="lazy"
                  width="1980"
                  height="1485"
                  decoding="async"
                />
              </div>
              <div className="recirculation__text-card">
                <div className="recirculation__card-title">
                  <div className="recirculation__card-title_cover">
                    <h1>Bueaty</h1>
                  </div>
                </div>
              </div>
              <div className="card_btn">
                <span className="inner-icon">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="plus-icon undefined"
                  >
                    <path
                      d="M0 8h16M8 0v16"
                      // vector-effect="non-scaling-stroke"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="recirculation__card">
              <div className="recirculation__card_img-card">
                <img
                  className="recirculation__card-image"
                  src="https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/modern-solutions/platform/beauty-2-500w.jpg"
                  alt="A woman with dark hair and unique jewelry in front of an orange background."
                  loading="lazy"
                  width="1980"
                  height="1485"
                  decoding="async"
                />
              </div>
              <div className="recirculation__text-card">
                <div className="recirculation__card-title">
                  <div className="recirculation__card-title_cover">
                    <h1>Bueaty</h1>
                  </div>
                </div>
              </div>
              <div className="card_btn">
                <span className="inner-icon">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="plus-icon undefined"
                  >
                    <path
                      d="M0 8h16M8 0v16"
                      // vector-effect="non-scaling-stroke"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="recirculation__card">
              <div className="recirculation__card_img-card">
                <img
                  className="recirculation__card-image"
                  src="https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/modern-solutions/platform/fitness-2-1500w.webp"
                  alt="A woman with dark hair and unique jewelry in front of an orange background."
                  loading="lazy"
                  width="1980"
                  height="1485"
                  decoding="async"
                />
              </div>
              <div className="recirculation__text-card">
                <div className="recirculation__card-title">
                  <div className="recirculation__card-title_cover">
                    <h1>Bueaty</h1>
                  </div>
                </div>
              </div>
              <div className="card_btn">
                <span className="inner-icon">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="plus-icon undefined"
                  >
                    <path
                      d="M0 8h16M8 0v16"
                      // vector-effect="non-scaling-stroke"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="recirculation__card">
              <div className="recirculation__card_img-card">
                <img
                  className="recirculation__card-image"
                  src="https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/modern-solutions/platform/photography-2-1500w.webp"
                  alt="A woman with dark hair and unique jewelry in front of an orange background."
                  loading="lazy"
                  width="1980"
                  height="1485"
                  decoding="async"
                />
              </div>
              <div className="recirculation__text-card">
                <div className="recirculation__card-title">
                  <div className="recirculation__card-title_cover">
                    <h1>Bueaty</h1>
                  </div>
                </div>
              </div>
              <div className="card_btn">
                <span className="inner-icon">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="plus-icon undefined"
                  >
                    <path
                      d="M0 8h16M8 0v16"
                      // vector-effect="non-scaling-stroke"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="recirculation__scrollbar-container recirculation__scrollbar-container--slider">
            <div className="recirculation__scrollbar-wrapper">
              <div className="recirculation__scrollbar-background">
                <div className="recirculation__scrollbar">
                  <div className="recirculation__scrollbar-ui"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
