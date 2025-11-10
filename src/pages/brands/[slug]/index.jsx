import React,{useEffect,useRef} from "react";
import styles from "@/components/brand/Brand.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import BrandDetailsInfo from "@/components/brand/BrandDetailsInfo";
import Benefits from "@/components/brand/Benefits";
import Leadership from "@/components/about/Leadership";
import { leaders2 } from "@/utils/Data";
import SplitText from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const index = ({ params }) => {
  // useGSAP(() => {
  //   gsap.to(`.${styles.parallax_bg}`, {
  //     yPercent: 20,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: `.${styles.Brand_parallax_section}`,
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   });
  // });

  // useGSAP(()=>{
  //   gsap.to(`.${styles.parallax_bg} img`, {scrollTrigger: {
  // trigger: `.${styles.Brand_parallax_section}`,
  // toggleActions: "restart pause reverse pause",
  //    // pin: true,
  //    // pinSpacing:false,
  //     scrub:1,
  // start: "top top",
  //   end: "bottom bottom"
  //   },
  //       yPercent: 20,
  //     ease: "none",
  //   });
  // })
  const paraRef = useRef(null);

  useEffect(() => {
    const el = paraRef.current;

    // Split paragraph into lines first
    const splitLines = new SplitText(el, {
      type: "lines",
      linesClass: "extra-split-line",
    });

    // Then split each line into words
    const splitWords = new SplitText(splitLines.lines, {
      type: "lines",
      // wordsClass: "extra-split-word",
       linesClass: "extra-split-line",
    });

    // Animate the words inside each line
    const tl = gsap.timeline({scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },});
    
    tl.from(splitWords.lines, {
      opacity: 0,
      yPercent: 100,
      ease: "power3.out",
      duration: 1,
      stagger: 0.05, // each word staggered
    }
    // ,"a").to(".split",{
    //   transform:"scaleX(1)",
    //   transformOrigin:"left",
    //   delay:0.5
    // },"a"),
    // tl.fromTo(".will-animate",{
    //   opacity:0
    // },{
    //   duration:1,
    //   ease:"linear",
    //   opacity:1
    // }
  )
    
    // Cleanup
    return () => {
      splitWords.revert();
      splitLines.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
    useEffect(() => {
    // Only run after component is mounted and DOM is ready
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.parallax_bg} img`,
        { y: 0 },
        {
          y: 200,
          duration: 4,
          ease: "linear",
          scrollTrigger: {
            trigger: `.${styles.Brand_parallax_section}`,
            start: "top 0%",
            scrub: true,
            // markers: true,
          },
        }
      );
    });

    // Cleanup GSAP/ScrollTrigger when unmounting
    return () => ctx.revert();
  }, []);
  return (
    <>
    <section id="section-5" className={styles.Brand_parallax_section}>
      <div
        className={styles.parallax_bg}
        style={{
          width: "100%",
          height: "100%",
          transformOrigin: "center center",
          transform: "translate(0%, 0%)",
        }}
      >
        <img
          src="/assets/images/Asset 8.webp"
          alt=""
        />
      </div>
      <div className="news-landing-page_overlay">
        <div className={styles.news_landing_page_overlay_inner}>
        <div className="tagline__wrapper home-tagline">
          <div className="space"></div>
          <div className="Home_about_content">
            <div>
              <div className="about_para">
                <p ref={paraRef}>
                  We build Iconic Media Brands That Shape Culture, Spark
                  Conversations, And Drive Influence — Across Entertainment,
                  Lifestyle, Luxury.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    <BrandDetailsInfo/>
    <Benefits/>
    <Leadership title={"Editorial Team"} leaders={leaders2}/>
    </>
  );
};

export default index;
