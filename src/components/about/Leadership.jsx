"use client";
import React, { useEffect, useRef } from "react";
import styles from "./About.module.css";
import Image from "next/image";
import TextAnimate from "../common/TextAnimate";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger);

const leaders = [
  {
    name: "Avarna Jain",
    role: "Chairperson",
    quote:
      "We have streamlined the outdated and layered agency model to give you direct access to some of the best global talent. No wasted time, no empty promises. Just impactful results.",
    linkedin: "#",
    image:
      "https://s.rpsg.in/image/s/fh_275/4/81/4e/3_1661531685.jpg",
    featured: true,
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image:
      "https://images.prismic.io/rejouice-2024/Z0dOD5bqstJ971U2_jack.jpg?auto=format,compress&w=696&h=868&fm=avif",
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image:
      "https://images.prismic.io/rejouice-2024/Z0dODpbqstJ971U1_gabriel.jpg?auto=format,compress&w=696&h=869&fm=avif",
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image:
      "https://images.prismic.io/rejouice-2024/Z0dOEZbqstJ971U4_jeffrey.jpg?auto=format,compress&w=696&h=868&fm=avif",
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image:
      "https://images.prismic.io/rejouice-2024/Z0dODZbqstJ971U0_clement.jpg?auto=format,compress&w=696&h=869&fm=avif",
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image:
      "https://images.prismic.io/rejouice-2024/Z0dOEJbqstJ971U3_jeanmichel.jpg?auto=format,compress&w=696&h=868&fm=avif",
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image:
      "https://images.prismic.io/rejouice-2024/Z2GNNpbqstJ98mqU_6384a19b-fa1c-4ad1-aae0-e29e127ebeef_san-diego-office.jpg.jpg?auto=format,compress&w=696&h=868&fm=avif",
  },
];

const Leadership = () => {
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

  // // ✅ Animate featured image
  // gsap.to(`.${styles.featuredImage} img`, {
  //   scrollTrigger: {
  //     trigger: `.${styles.featuredImage}`,
  //     start: "top 85%",
  //   },
  //   y: 0,
  //   opacity: 1,
  //   duration: 0.9,
  //   ease: "smoothRise",
  // });

  // // ✅ Animate team cards
  // gsap.to(cardsRef.current, {
  //   scrollTrigger: {
  //     trigger: `.${styles.grid}`,
  //     start: "top 85%",
  //   },
  //   y: 0,
  //   opacity: 1,
  //   duration: 0.9,
  //   ease: "smoothRise",
  //   stagger: 0.05,
  //   delay: 0.25,
  // });
}, []);


  return (
    <section className={styles.leadershipSection} ref={sectionRef}>
      <div className={styles.leadershipSection_container}>
        <div className={styles.gridTop}>
          <h2 className={styles.leadershipSection_heading}  ref={(el) => textRefs.current.push(el)}>Our Leadership</h2>

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
