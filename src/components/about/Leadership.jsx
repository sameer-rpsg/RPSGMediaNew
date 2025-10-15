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
    image: "https://s.rpsg.in/image/s/fh_275/4/81/4e/3_1661531685.jpg", // replace with your real image
    featured: true,
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image: "https://images.prismic.io/rejouice-2024/Z0dOD5bqstJ971U2_jack.jpg?auto=format,compress&w=696&h=868&fm=avif",
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image: "https://images.prismic.io/rejouice-2024/Z0dODpbqstJ971U1_gabriel.jpg?auto=format,compress&w=696&h=869&fm=avif",
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image: "https://images.prismic.io/rejouice-2024/Z0dOEZbqstJ971U4_jeffrey.jpg?auto=format,compress&w=696&h=868&fm=avif",
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image: "https://images.prismic.io/rejouice-2024/Z0dODZbqstJ971U0_clement.jpg?auto=format,compress&w=696&h=869&fm=avif",
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image: "https://images.prismic.io/rejouice-2024/Z0dOEJbqstJ971U3_jeanmichel.jpg?auto=format,compress&w=696&h=868&fm=avif",
  },
  {
    name: "Rohit Tiwari",
    role: "Head of Web Design",
    image: "https://images.prismic.io/rejouice-2024/Z2GNNpbqstJ98mqU_6384a19b-fa1c-4ad1-aae0-e29e127ebeef_san-diego-office.jpg.jpg?auto=format,compress&w=696&h=868&fm=avif",
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
      <div className={styles.leadershipSection_container}>
        <div className={styles.gridTop}>
          <h2 className={styles.leadershipSection_heading}>Our Leadership</h2>

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
                <p className={styles.quote}>"{featured.quote}"</p>
                <p className={styles.leadershipSection_name}>{featured.name}</p>
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
            <div key={index} className={styles.leadershipSection_card}  ref={(el) => (cardsRef.current[index] = el)}>
              <div className={styles.imageWrapper}>
                <img
                  width={1000}
                  height={1000}
                  src={leader.image}
                  alt={`${leader.name} - ${leader.role}`}
                  loading="lazy"
                />
              </div>
              <p className={styles.leadershipSection_name}>
                {console.log(leader.name)}
                {leader.name}</p>
              <p className={styles.role}>{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
