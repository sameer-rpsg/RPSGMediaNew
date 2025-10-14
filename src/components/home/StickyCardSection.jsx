import React from "react";
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
import { FaXTwitter } from "react-icons/fa6";
gsap.registerPlugin(ScrollTrigger);

const StickyCardSection = () => {
  const StickyCardsData = [
    {
      id: 1,
      index: "01",
      PosterImgUrl: "/assets/thrposter.jpg",
      logoImgUrl: "/assets/Thr_logo_updated.png",
      paragraphs: [
        "Since our inception, we’ve brought together globally respected editorial voices to inform, inspire, and influence. From entertainment to luxury, our brands shape conversations that matter. We invest deeply in every title we own, giving each one the focus, integrity, and creative ambition it deserves—building media that endures, not just performs.",
        "We invest deeply in every title we own, giving each one the focus, integrity, and creative ambition it deserves—building media that endures, not just performs.",
        "From entertainment to luxury, we bring together voices that shape culture and drive meaningful storytelling across industries.",
      ],
      website: "www.hollywoodreporterindia.com",
      mediaKit: "Download Media Kit",
      logoColorclass:"",
      bgColorclass:"red"
    },
    {
      id: 2,
      index: "02",
      PosterImgUrl: "/assets/esquireposter.jpg",
      logoImgUrl: "/assets/esquire-logo-new.png",
      paragraphs: [
        "Since our inception, we’ve brought together globally respected editorial voices to inform, inspire, and influence. From entertainment to luxury, our brands shape conversations that matter. We invest deeply in every title we own, giving each one the focus, integrity, and creative ambition it deserves—building media that endures, not just performs.",
        "We invest deeply in every title we own, giving each one the focus, integrity, and creative ambition it deserves—building media that endures, not just performs.",
        "From entertainment to luxury, we bring together voices that shape culture and drive meaningful storytelling across industries.",
      ],
      website: "www.hollywoodreporterindia.com",
      mediaKit: "Download Media Kit",
      logoColorclass:"",
      bgColorclass:"esquirebgColor"
    },
    {
      id: 3,
      index: "03",
      PosterImgUrl: "/assets/manifestposter.jpg",
      logoImgUrl: "/assets/Manifest_logo.png",
      paragraphs: [
        "Since our inception, we’ve brought together globally respected editorial voices to inform, inspire, and influence. From entertainment to luxury, our brands shape conversations that matter. We invest deeply in every title we own, giving each one the focus, integrity, and creative ambition it deserves—building media that endures, not just performs.",
        "We invest deeply in every title we own, giving each one the focus, integrity, and creative ambition it deserves—building media that endures, not just performs.",
        "From entertainment to luxury, we bring together voices that shape culture and drive meaningful storytelling across industries.",
      ],
      website: "www.hollywoodreporterindia.com",
      mediaKit: "Download Media Kit",
      logoColorclass:"",
      bgColorclass:"manifestbgColor"
    },
    {
      id: 4,
      index: "04",
      PosterImgUrl: "/assets/Robbreport.png",
      logoImgUrl: "/assets/Robb_Report_white_1.png",
      paragraphs: [
        "Since our inception, we’ve brought together globally respected editorial voices to inform, inspire, and influence. From entertainment to luxury, our brands shape conversations that matter. We invest deeply in every title we own, giving each one the focus, integrity, and creative ambition it deserves—building media that endures, not just performs.",
        "We invest deeply in every title we own, giving each one the focus, integrity, and creative ambition it deserves—building media that endures, not just performs.",
        "From entertainment to luxury, we bring together voices that shape culture and drive meaningful storytelling across industries.",
      ],
      website: "www.hollywoodreporterindia.com",
      mediaKit: "Download Media Kit",
      logoColorclass:"",
      bgColorclass:"bgwhite"
    },
  ];
  const stickyContainer = useRef(null);
  useGSAP(
    () => {
      const stickyCards = document.querySelectorAll(".hollywood-section");
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
        if(index < stickyCards.length - 1){
            ScrollTrigger.create({
                trigger:stickyCards[index + 1],
                start:"top bottom",
                end:"top top",
                onUpdate: (self)=>{
                    const progress = self.progress;
                    const scale = 1 - progress * 0.5;
                    const rotation = (index % 2 === 0 ? 5 : -5) * progress;
                    const afterOpacity = progress; 
                     // dynamic z-index calculation
    //   const zIndexValue = Math.round((1 - progress) * 100) - index;

                    gsap.set(card,{
                        scale:scale,
                        // zIndex: zIndexValue,
                        rotation: rotation,
                        "-after-opacity":afterOpacity
                    })
                }
            })
        }
      });
    },
    { scope: stickyContainer }
  );
  return (
    <div className="Sticky_card_wrapper" ref={stickyContainer}>
      {StickyCardsData.map((card) => (
        <section className={`hollywood-section ${card.bgColorclass || ""}`} key={card.id}>
          {/* Left side - Magazine cover */}
          <div className="hollywood-left">
            <img
              src={card.PosterImgUrl}
              alt="Hollywood Reporter India"
              className="magazine-cover"
            />
          </div>

          {/* Right side - Text content */}
          <div className="hollywood-right">
            <div>
            <h2 className="card_logoImg">
              <Image
                width={1000}
                height={1000}
                src={card.logoImgUrl}
                alt="Hollywood Reporter Logo"
              />
            </h2>

            {/* Three paragraphs */}
            {card.paragraphs.map((para, idx) => (
              <p className="text" key={idx}>
                {para}
              </p>
            ))}

            {/* Learn more + dots */}
            <div className="card_social_wrapper">
              <TextAnimate textAnim="Learn More" />
              <div className="dots">
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
            <div className="links">
              <TextAnimate textAnim={card.website} />
              <TextAnimate textAnim={card.mediaKit} />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default StickyCardSection;
