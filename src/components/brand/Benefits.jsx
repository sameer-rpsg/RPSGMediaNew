import React from "react";
import styles from "@/components/brand/Brand.module.css";
const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <div className={styles.benefit_subtitle_wrapper}>
        <div className={`${styles.scroll_text} ${styles._16px}`}>
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
