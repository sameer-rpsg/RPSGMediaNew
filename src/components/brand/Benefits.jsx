import React,{useEffect,useRef} from "react";
import styles from "@/components/brand/Brand.module.css";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger,SplitText)
const Benefits = () => {
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
  return (
    <div className={styles.benefits}>
      <div className={styles.benefit_subtitle_wrapper}>
        <div className={`${styles.scroll_text} ${styles._16px}`} ref={paraRef}>
            <p>
              Since our inception, we've brought together globally respected
              editorial voices to inform, inspire, and influence. From
              entertainment to luxury, our brands shape conversations that
              matter. We invest deeply in every title we own, giving each one
              the focus, integrity, and creative ambition it deserves-building
              media that endures, not just performs.
            </p>
            <br />
            <p>
              Since our inception, we've brought together globally respected
              editorial voices to inform, inspire, and influence. From
              entertainment to luxury, our brands shape conversations that
              matter.
            </p>{" "}
            <br />
            <p>
              We invest deeply in every title we own, giving each one the focus,
              integrity, and creative ambition it deserves-building media that
              endures, not just performs.
            </p>
        </div>
      </div>
      <div className={styles.benefits_content_wrapper}>
        <div className={styles.left_embed_wrapper}>
          <div
            className={`${styles.embed_video} ${styles._50} ${styles.w_embed}`}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "100%" }}
            >
              <source
                src="https://www.dl.dropboxusercontent.com/scl/fi/xizrk7vpw8f356zaze3y7/assets-2.mp4?rlkey=app9movdlpdqz1qekndjxu0q9&st=dh2cpg0n&dl=0"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className={styles.right_content_wrapper}>
          <div className={styles.content_ccontainer}>
            <div className={styles.benefits_wrapper}>
              <h2
                className={`${styles.heading_scroll} ${styles.center} ${styles._9} ${styles.jet_brain} ${styles._14px} ${styles.marg_15}}`}
              >
                [01]
              </h2>
              <h2
                className={`${styles.heading_scroll} ${styles.center} ${styles._9} ${styles._3vw_white} ${styles.long_1}`}
              >
                The Number One Magazine
              </h2>
            </div>
            <div className={styles.benefits_divider}></div>
            <div className={styles.benefits_wrapper}>
              <h2
                className={`${styles.heading_scroll} ${styles.center} ${styles._9} ${styles.jet_brain} ${styles._14px} ${styles.marg_15}}`}
              >
                [02]
              </h2>
              <h2
                className={`${styles.heading_scroll} ${styles.center} ${styles._9} ${styles._3vw_white} ${styles.long_1}`}
              >
                Produced +10,000 Assets
              </h2>
            </div>
            <div className={styles.benefits_divider}></div>
            <div className={styles.benefits_wrapper}>
              <h2
                className={`${styles.heading_scroll} ${styles.center} ${styles._9} ${styles.jet_brain} ${styles._14px} ${styles.marg_15}}`}
              >
                [03]
              </h2>
              <h2
                className={`${styles.heading_scroll} ${styles.center} ${styles._9} ${styles._3vw_white} ${styles.long_1}`}
              >
                We Cut Cpa With 20% On Average
              </h2>
            </div>
            <div className={styles.benefits_divider}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
