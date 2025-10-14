

"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import styles from "@/components/home/Home.module.css";

const slidesData = [
  {
    type: "full",
    img: "https://images.prismic.io/rejouice-2024/Z1m0-JbqstJ98Vh9_pergola-module-floor-1-360-grey-blue-bioclimatic-ceiling-and-curtains2.png?auto=format,compress",
  },
  {
    type: "small",
    img: "https://images.prismic.io/rejouice-2024/Z1m0-JbqstJ98Vh9_pergola-module-floor-1-360-grey-blue-bioclimatic-ceiling-and-curtains2.png?auto=format,compress",
  },
  {
    type: "full",
    img: "https://images.prismic.io/rejouice-2024/Z1m0-JbqstJ98Vh9_pergola-module-floor-1-360-grey-blue-bioclimatic-ceiling-and-curtains2.png?auto=format,compress",
  },
  {
    type: "small",
    img: "https://images.prismic.io/rejouice-2024/Z1m0-JbqstJ98Vh9_pergola-module-floor-1-360-grey-blue-bioclimatic-ceiling-and-curtains2.png?auto=format,compress",
  },
  {
    type: "full",
    img: "https://images.prismic.io/rejouice-2024/Z1m0-JbqstJ98Vh9_pergola-module-floor-1-360-grey-blue-bioclimatic-ceiling-and-curtains2.png?auto=format,compress",
  },
  {
    type: "small",
    img: "https://images.prismic.io/rejouice-2024/Z1m0-JbqstJ98Vh9_pergola-module-floor-1-360-grey-blue-bioclimatic-ceiling-and-curtains2.png?auto=format,compress",
  },
  {
    type: "full",
    img: "https://images.prismic.io/rejouice-2024/Z1m0-JbqstJ98Vh9_pergola-module-floor-1-360-grey-blue-bioclimatic-ceiling-and-curtains2.png?auto=format,compress",
  },
  {
    type: "small",
    img: "https://images.prismic.io/rejouice-2024/Z1m0-JbqstJ98Vh9_pergola-module-floor-1-360-grey-blue-bioclimatic-ceiling-and-curtains2.png?auto=format,compress",
  },
];

const BrandAdvertismentBanner = () => {
  return (
    <div className={styles.BrandAdvertismentBanner_container}>
      <h1 className={styles.BrandAdvertismentBanner_heading}>
        PREMIUM BRANDS ADVERTISE HERE. <br />
        YOU SHOULD TOO.
      </h1>

      <div className={`${styles.marquee__container} ${styles.drag}`}>
        <div className={styles.marquee_slider}>
          <div className={styles.enter_animation__wrapper}>
            <div className={styles.card__wrapper}>
              <Splide
                options={{
                  type: "loop",
                  drag: "free",
                  focus: "center",
                  arrows: false,
                  pagination: false,
                  autoWidth: true,
                  gap: "3rem",
                  autoScroll: {
                    speed: 1.5,
                    pauseOnHover: true,
                    pauseOnFocus: false,
                  },
                }}
                extensions={{ AutoScroll }}
                aria-label="Marquee AutoScroll Slider"
              >
                {slidesData.map((slide, index) => (
                  <SplideSlide key={index}>
                    <div className={styles.wrapper}>
                      <div
                        className={`${styles.widget__wrapper} ${
                          slide.type === "full"
                            ? styles.full
                            : styles.small
                        } ${styles.dark}`}
                      >
                        <div className={styles.background}>
                          <img src={slide.img} alt={`Slide ${index + 1}`} />
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandAdvertismentBanner;
