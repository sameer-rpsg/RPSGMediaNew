"use client";
import React, { useEffect, useRef } from "react";
import styles from "./About.module.css";
import Image from "next/image";
import TextAnimate from "../common/TextAnimate";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";
gsap.registerPlugin(ScrollTrigger);



const Leadership = ({leaders,title}) => {
  const featured = leaders.find((l) => l.featured);
  const others = leaders.filter((l) => !l.featured);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const textRefs = useRef([]);

useEffect(() => {
  // Custom smooth ease
  CustomEase.create("smoothRise", "M0,0 C0.15,0.85,0.25,1,1,1");

// Combine all targets (image + text + cards)
    const allTargets = [
      `.${styles.featuredImage} img`,
      ...textRefs.current,
      ...cardsRef.current,
    ];

  // Initial states
    gsap.set(allTargets, { opacity: 0, y: 100 });

     // Animate all when the section enters viewport
    gsap.to(allTargets, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "smoothRise",
      stagger: 0.15,
    });
}, []);


  return (
    <section className={styles.leadershipSection} ref={sectionRef}>
      <div className={styles.leadershipSection_container}>
        <div className={styles.gridTop}>
          <h2 className={styles.leadershipSection_heading}  ref={(el) => textRefs.current.push(el)}>{title}</h2>

          <div className={styles.leadershipSection_featured}>
            <div className={styles.featuredImage}>
              <Image
                width={1000}
                height={1000}
                src="/assets/Avarna_Jain_Chairperson_RPSG_Lifestyle_Media_.avif"
                alt={`${featured.name} - ${featured.role}`}
                loading="lazy"
              />
            </div>
            <div className={styles.featuredContent}>
              <div>
                <p className={styles.quote} ref={(el) => textRefs.current.push(el)}>"{featured.quote}"</p>
                <p className={styles.leadershipSection_name} ref={(el) => textRefs.current.push(el)}>
                  {featured.name}
                </p>
                <p className={styles.role} ref={(el) => textRefs.current.push(el)}>{featured.role}</p>
              </div>
              <TextAnimate textAnim="LinkedIn" hreff={featured.linkedin} />
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {others.map((leader, index) => (
            <div
              key={index}
              className={styles.leadershipSection_card}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className={styles.imageWrapper}>
                <img
                  width={1000}
                  height={1000}
                  src={leader.image}
                  alt={`${leader.name} - ${leader.role}`}
                  loading="lazy"
                />
              </div>
              <p className={styles.leadershipSection_name}>{leader.name}</p>
              <p className={styles.role}>{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
