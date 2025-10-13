import React,{useEffect,useRef} from "react";
import styles from "./About.module.css";
import Image from "next/image";
import Link from "next/link";
import TextAnimate from "../common/TextAnimate";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";
gsap.registerPlugin(ScrollTrigger);

const leaders = [
  {
    name: "Awarna Jain",
    role: "Chairperson",
    quote:
      "We have streamlined the outdated and layered agency model to give you direct access to some of the best global talent. No wasted time, no empty promises. Just impactful results.",
    linkedin: "#",
    image: "/leadership/awarna-jain.jpg", // replace with your real image
    featured: true,
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image: "/leadership/rohit-tiwari.jpg",
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image: "/leadership/rohit-tiwari.jpg",
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image: "/leadership/rohit-tiwari.jpg",
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image: "/leadership/rohit-tiwari.jpg",
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image: "/leadership/rohit-tiwari.jpg",
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image: "/leadership/rohit-tiwari.jpg",
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image: "/leadership/rohit-tiwari.jpg",
  },
];

const Leadership = () => {
  const featured = leaders.find((l) => l.featured);
  const others = leaders.filter((l) => !l.featured);
  const cardsRef = useRef([]);

  useEffect(() => {
     // Custom smooth ease curve — gentle rise & settle
    CustomEase.create("smoothRise", "M0,0 C0.15,0.85,0.25,1,1,1");
    // GSAP scroll animation
    gsap.set(cardsRef.current, { opacity: 0, y: 100 });

    gsap.to(cardsRef.current, {
      scrollTrigger: {
        trigger: `.${styles.grid}`,
        start: "top 85%",
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
       ease: "smoothRise",
      stagger: 0.15,
      delay: 0.5,
    });
  }, []);

  return (
    <section className={styles.leadershipSection}>
      <div className={styles.container}>
        <div className={styles.gridTop}>
          <h2 className={styles.heading}>Our Leadership</h2>

          <div className={styles.featured}>
            <div className={styles.featuredImage}>
              <Image
                width={1000}
                height={1000}
                src="/assets/manifestposter.jpg"
                alt={`${featured.name} - ${featured.role}`}
                loading="lazy"
              />
            </div>
            <div className={styles.featuredContent}>
              <div>
                <p className={styles.quote}>"{featured.quote}"</p>
                <p className={styles.name}>{featured.name}</p>
                <p className={styles.role}>{featured.role}</p>
              </div>
              <TextAnimate textAnim="LinkedIn" hreff="" />
              {/* <Link
                href={featured.linkedin}
                className={styles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${featured.name} LinkedIn Profile`}
              >
                 ↗
              </Link> */}
            </div>
          </div>
        </div>
        <div className={styles.grid}>
          {others.map((leader, index) => (
            <div key={index} className={styles.card}  ref={(el) => (cardsRef.current[index] = el)}>
              <div className={styles.imageWrapper}>
                <Image
                  width={1000}
                  height={1000}
                  src={leader.image}
                  alt={`${leader.name} - ${leader.role}`}
                  loading="lazy"
                />
              </div>
              <p className={styles.name}>{leader.name}</p>
              <p className={styles.role}>{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
