"use client";
import React from "react";
import styles from "./Home.module.css";

const MagazineSection = () => {
  return (
    <section className={styles.magazineSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src="/assets/thrposter.jpg" // replace with your local path
            alt="Magazine Cover"
            className={styles.image}
          />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.subtitle}>Exclusive Story</p>
          <h2 className={styles.title}>Creative Energy Behind the Lens</h2>
          <p className={styles.desc}>
            Explore the untold stories of artistry and inspiration. Our new
            issue dives deep into the minds of visual creators redefining the
            boundaries of storytelling.
          </p>
          <button className={styles.ctaBtn}>Read More</button>
        </div>
      </div>
    </section>
  );
};

export default MagazineSection;
