"use client";
import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import styles from "@/components/home/Home.module.css";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import gsap from "gsap";

const slidesData = [
  {
    type: "full",
    bgType: "dark",
    img: "/assets/selectedimagescompressed/250805 - 4 - 084_11zon.jpg",
    // para: "Software",
    emm: ["Consumer Goods", "Software", "Health"],
  },
  {
    type: "small",
    bgType: "light",
    // img: "https://images.prismic.io/rejouice-2024/Z1m0-JbqstJ98Vh9_pergola-module-floor-1-360-grey-blue-bioclimatic-ceiling-and-curtains2.png?auto=format,compress",
    // para: "2 Engagement Models",
    // emm: "Classic / Venture",
    emm: ["70+ industry-recognized awards"],
  },
  {
    type: "full",
    bgType: "dark",
    videoUrl:
      "/assets/videos/Toast_10 (1).mp4",
    para: "E-commerce",
    // emm: "10+ years of expertise",
    emm: ["10+ years of expertise"],
  },
  {
    type: "small",
    bgType: "dark",
    para: "2 Engagement Models",
    emm: ["Classic / Venture"],
    // img: "https://images.prismic.io/rejouice-2024/Z1m0-JbqstJ98Vh9_pergola-module-floor-1-360-grey-blue-bioclimatic-ceiling-and-curtains2.png?auto=format,compress",
  },
  {
    type: "small",
    bgType: "light",
    para: "Driving 150%",
    emm: ["LTV:CAC in average"],
    // img: "https://images.prismic.io/rejouice-2024/Z1m0-JbqstJ98Vh9_pergola-module-floor-1-360-grey-blue-bioclimatic-ceiling-and-curtains2.png?auto=format,compress",
  },
  {
    type: "full",
    bgType: "dark",
    para: "Catalyzed ~71,000",
    emm: ["pre-orders after brand reveal", "(approximately $5.68 billion)."],
    videoUrl:
      "/assets/videos/homeherovideo.mp4",
    // emm: "generated within 90 days of launch",
    // img: "https://images.prismic.io/rejouice-2024/Z1m0-JbqstJ98Vh9_pergola-module-floor-1-360-grey-blue-bioclimatic-ceiling-and-curtains2.png?auto=format,compress",
  },
  {
    type: "small",
    bgType: "light",
    para: "$5M+ in new business",
    emm: ["generated within 90 days of launch"],
    // img: "https://images.prismic.io/rejouice-2024/Z1m0-JbqstJ98Vh9_pergola-module-floor-1-360-grey-blue-bioclimatic-ceiling-and-curtains2.png?auto=format,compress",
  },
  {
    type: "full",
    bgType: "dark",
    para: "2 Offices",
    emm: ["San Diego, USA", "Paris, France"],
    img: "/assets/selectedimagescompressed/Manifest x Vaani Kapoor 14-08-254048 copy 2_11zon.jpg",
  },
  {
    type: "small",
    bgType: "light",
    para: "60 brands",
    emm: ["successfully launched since 2013."],
    // img: "https://images.prismic.io/rejouice-2024/Z1m0-JbqstJ98Vh9_pergola-module-floor-1-360-grey-blue-bioclimatic-ceiling-and-curtains2.png?auto=format,compress",
  },
  //   {
  //     type: "small",
  //     bgType: "light",
  //     img: "https://images.prismic.io/rejouice-2024/Z1m0-JbqstJ98Vh9_pergola-module-floor-1-360-grey-blue-bioclimatic-ceiling-and-curtains2.png?auto=format,compress",
  //   },
];

const BrandAdvertismentBanner = () => {
  const videoRefs = useRef([]); // store refs for all videos
  const tweenRefs = useRef([]);

  return (
    <div className={styles.BrandAdvertismentBanner_container}>
      <h2 className={styles.BrandAdvertismentBanner_heading}>
      Premium Brands Advertise Here. <br />
      You Should Too.
      </h2>

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
                    <div
                      className={styles.wrapper}
                      onMouseEnter={() => {
                        const video = videoRefs.current[index];
                        if (!video) return;

                        // Kill any previous animation
                        tweenRefs.current[index]?.kill();

                        // Reset video to 0, disable looping
                        video.pause();
                        video.currentTime = 0;
                        video.loop = false;

                        // Animate from 0 → duration (simulate 0→100%)
                        tweenRefs.current[index] = gsap.to(video, {
                          currentTime: video.duration || 2,
                          duration: video.duration || 2,
                          ease: "linear",
                          onUpdate: () => {
                            // Ensure video is visually updating during tween
                            if (video.paused) video.play();
                          },
                        });
                      }}
                      onMouseLeave={() => {
                        const video = videoRefs.current[index];
                        if (!video) return;

                        // Kill forward animation
                        tweenRefs.current[index]?.kill();

                        // Animate back from current → 0
                        tweenRefs.current[index] = gsap.to(video, {
                          currentTime: 0,
                          duration: video.duration || 2,
                          ease: "linear",
                          onUpdate: () => {
                            if (video.paused) video.play();
                          },
                          onComplete: () => video.pause(),
                        });
                      }}
                    >
                      <div
                        className={`${styles.widget__wrapper} ${
                          slide.type === "full" ? styles.full : styles.small
                        } ${
                          slide.bgType === "light" ? styles.light : styles.dark
                        }`}
                      >
                        <div className={styles.card__wrapper}>
                          <div className={styles.top__wrapper}>
                            <div className={styles.top__wrapper}>
                              <div className={styles.top__wrapper}>
                                <p>
                                  {slide.para && (
                                    <>
                                      {slide.para}
                                      <br />
                                    </>
                                  )}

                                  <em>
                                    {Array.isArray(slide.emm) &&
                                      slide.emm.map((item, index) => (
                                        <React.Fragment key={index}>
                                          {item}
                                          {index !== slide.emm.length - 1 && (
                                            <br />
                                          )}
                                        </React.Fragment>
                                      ))}
                                  </em>

                                  {/* Optional: Add slide.emm2 here if you use it */}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className={styles.bottom__wrapper}>
                            <div className={styles.bottom}>
                              <div className={styles.right}>
                                <Link
                                  href="/services"
                                  className="b-arrow underlined link-active-full-small"
                                >
                                  <span className="icon icon-b">
                                    <GoArrowUpRight />
                                  </span>
                                  <span className="content_more">
                                    {/*[*/}Learn more{/*]*/}
                                  </span>
                                  <span className="icon icon-a">
                                    <GoArrowUpRight />
                                  </span>
                                </Link>
                              </div>
                              <div className={styles.left_logos}>
                                {/* <div className={styles.image_switcher__wrapper}>
                                  <Image
                                    width={100}
                                    height={100}
                                    src="/assets/rpsg-logo.png"
                                    alt=""
                                  />
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {(slide.videoUrl || slide.img) && (
                          <div className={styles.background}>
                            {slide.videoUrl ? (
                              <div
                                className={`${styles.media} ${styles.video} ${styles.cover}`}
                              >
                                <video
                                  ref={(el) => (videoRefs.current[index] = el)}
                                  draggable="false"
                                  playsInline
                                  preload="auto"
                                  muted
                                  loop={false}
                                >
                                  <source
                                    src={slide.videoUrl}
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                            ) : (
                              <img src={slide.img} alt={`Slide ${index + 1}`} />
                            )}
                          </div>
                        )}
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
