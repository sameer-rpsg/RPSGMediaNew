import React, { useEffect,useState } from "react";
import BottomLineAnimation from "../common/BottomLineAnimation";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import TextAnimate from "../common/TextAnimate";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaMinus, FaXTwitter } from "react-icons/fa6";
import styles from "@/components/home/Home.module.css";
import { FaPlus } from "react-icons/fa6";
import { useRouter } from "next/router";
gsap.registerPlugin(ScrollTrigger);

const StickyCardSection = () => {
  const router = useRouter();
  const StickyCardsData = [
    {
      id: 1,
      index: "01",
      PosterImgUrl: "/assets/thrposter.jpg",
      logoImgUrl: "/assets/brandlogos/THR 1.png",
      paragraphs: [
        "Since our inception, we’ve brought together globally respected editorial voices to inform, inspire, and influence. From entertainment to luxury, our brands shape conversations that matter. We invest deeply in every title we own, giving each one the focus, integrity, and creative ambition it deserves—building media that endures, not just performs. We invest deeply in every title we own, giving each one the focus, integrity, and creative ambition it deserves—building media that endures, not just performs. From entertainment to luxury, we bring together voices that shape culture and drive meaningful storytelling across industries.",
      ],
      website: "www.hollywoodreporterindia.com",
      mediaKit: "Download Media Kit",
      logoColorclass: "",
      bgColorclass: "red",
    },
    {
      id: 2,
      index: "02",
      PosterImgUrl: "/assets/esquireposter.jpg",
      logoImgUrl: "/assets/brandlogos/Esquire 1.png",
      paragraphs: [
        "Since our inception, we’ve brought together globally respected editorial voices to inform, inspire, and influence. From entertainment to luxury, our brands shape conversations that matter. We invest deeply in every title we own, giving each one the focus, integrity, and creative ambition it deserves—building media that endures, not just performs. We invest deeply in every title we own, giving each one the focus, integrity, and creative ambition it deserves—building media that endures, not just performs. From entertainment to luxury, we bring together voices that shape culture and drive meaningful storytelling across industries.",
      ],
      website: "www.hollywoodreporterindia.com",
      mediaKit: "Download Media Kit",
      logoColorclass: "",
      bgColorclass: "esquirebgColor",
    },
    {
      id: 3,
      index: "03",
      PosterImgUrl: "/assets/manifestposter.jpg",
      logoImgUrl: "/assets/brandlogos/Manifest 1.png",
      paragraphs: [
        "Since our inception, we’ve brought together globally respected editorial voices to inform, inspire, and influence. From entertainment to luxury, our brands shape conversations that matter. We invest deeply in every title we own, giving each one the focus, integrity, and creative ambition it deserves—building media that endures, not just performs. We invest deeply in every title we own, giving each one the focus, integrity, and creative ambition it deserves—building media that endures, not just performs. From entertainment to luxury, we bring together voices that shape culture and drive meaningful storytelling across industries.",
      ],
      website: "www.hollywoodreporterindia.com",
      mediaKit: "Download Media Kit",
      logoColorclass: "",
      bgColorclass: "manifestbgColor",
    },
    {
      id: 4,
      index: "04",
      PosterImgUrl: "/assets/Robbreport.png",
      logoImgUrl: "/assets/brandlogos/Robb Report 1.png",
      paragraphs: [
        "Since our inception, we’ve brought together globally respected editorial voices to inform, inspire, and influence. From entertainment to luxury, our brands shape conversations that matter. We invest deeply in every title we own, giving each one the focus, integrity, and creative ambition it deserves—building media that endures, not just performs. We invest deeply in every title we own, giving each one the focus, integrity, and creative ambition it deserves—building media that endures, not just performs. From entertainment to luxury, we bring together voices that shape culture and drive meaningful storytelling across industries.",
      ],
      website: "www.hollywoodreporterindia.com",
      mediaKit: "Download Media Kit",
      logoColorclass: "",
      bgColorclass: "bgwhite",
    },
  ];
  // ✅ Track expanded state for each card
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id], // toggle only the clicked card
    }));
  };

  const stickyContainer = useRef(null);
  useEffect(() => {
    // if (window.innerWidth < 1200) return;
    const stickyCards = document.querySelectorAll(
      `.${styles.hollywood_section}`
    );
    stickyCards.forEach((card, index) => {
      if (index < stickyCards.length - 1) {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: stickyCards[stickyCards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });
      }
      if (index < stickyCards.length - 1) {
        ScrollTrigger.create({
          trigger: stickyCards[index + 1],
          start: "top bottom",
          end: "top top",
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = 1 - progress * 0.5;
            const rotation = (index % 2 === 0 ? 5 : -5) * progress;
            const afterOpacity = progress;
            // dynamic z-index calculation
            //   const zIndexValue = Math.round((1 - progress) * 100) - index;

            gsap.set(card, {
              scale: scale,
              // zIndex: zIndexValue,
              rotation: rotation,
              "-after-opacity": afterOpacity,
            });
          },
        });
      }
    });
  }, [router.asPath, { scope: stickyContainer }]);
  return (
    <div className={styles.Sticky_card_wrapper} ref={stickyContainer}>
      {StickyCardsData.map((card) => {
        const isExpanded = expandedCards[card.id];
        return (
          <section
            className={`${styles.hollywood_section} ${card.bgColorclass || ""}`}
            key={card.id}
          >
            <div className={styles.hollywood_section_innerWrapper}>
              <h2
                className={`${styles.card_logoImg} ${styles.card_logoImgMbl}`}
              >
                <Image
                  width={1000}
                  height={1000}
                  src={card.logoImgUrl}
                  alt="Hollywood Reporter Logo"
                />
              </h2>
              <div className={styles.hollywood_left}>
                <img
                  src={card.PosterImgUrl}
                  alt="Hollywood Reporter India"
                  className={`${styles.magazine_cover} ${
                    isExpanded ? styles.hideMagazine : ""
                  }`}
                />
                {card.paragraphs.map((para, idx) => (
                  <p
                    className={`${styles.text} ${styles.textMbl} ${
                      isExpanded ? styles.showText : ""
                    }`}
                    key={idx}
                  >
                    {para}
                  </p>
                ))}
                <div
                  className={styles.PlusBtnWrapper}
                  onClick={() => toggleExpand(card.id)}
                >
                  {isExpanded ? <FaMinus /> : <FaPlus />}
                </div>
              </div>

              {/* Right side - Text content */}
              <div className={styles.hollywood_right}>
                <div className={styles.social_wrapperMainWrapper}>
                  <h2 className={styles.card_logoImg}>
                    <Image
                      width={1000}
                      height={1000}
                      src={card.logoImgUrl}
                      alt="Hollywood Reporter Logo"
                    />
                  </h2>

                  {/* Three paragraphs */}
                  {card.paragraphs.map((para, idx) => (
                    <p className={styles.text} key={idx}>
                      {para}
                    </p>
                  ))}

                  {/* Learn more + dots */}
                  <div className={styles.card_social_wrapper}>
                    <TextAnimate textAnim="Learn More" />
                    <div className={styles.dots}>
                      <span>
                        <FaInstagram />
                      </span>
                      <span>
                        <FaFacebookF />
                      </span>
                      <span>
                        <FaXTwitter />
                      </span>
                    </div>
                  </div>
                </div>
                {/* Links */}
                <div className={styles.links}>
                  <TextAnimate textAnim={card.website} />
                  <TextAnimate textAnim={card.mediaKit} />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default StickyCardSection;
