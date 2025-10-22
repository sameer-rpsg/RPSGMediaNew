import React from "react";
import styles from "@/components/brand/Brand.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const BrandHero = ({params}) => {
  useGSAP(() => {
    gsap.to(`.${styles.parallax_bg}`, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: `.${styles.Brand_parallax_section}`,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  const brands = [
    { name: "Manifest", logo: "/assets/brandlogos/Manifest 1.png", slug: "Manifest" },
    { name: "THR", logo: "/assets/brandlogos/THR 1.png", slug: "thr" },
    { name: "Esquire", logo: "/assets/brandlogos/Esquire 1.png", slug: "Esquire" },
    { name: "Robb report", logo: "/assets/brandlogos/Robb Report 1.png", slug: "robbreport" },
  ];
//  const { slug } = params;
//   const brand = brandData[slug];
  return (
    <section id="section-5" className={styles.Brand_parallax_section}>
      <div className={styles.parallax_bg}>
        <img
          src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg"
          alt=""
        />
      </div>

      <ul className="clients-tile" style={{ padding: "3rem", margin:0 }}>
        {brands.map((brand, i) => (
          <li
            key={i}
            className="our_client_logo"
            style={{ border: "1px solid #000", height:"150px" }}
          >
            <Link
              href={`/brands/${brand.slug}`}
              className="our_client_logo_card card--client-logo"
              style={{display:"flex",width:"100%",height:"100%", background:"#fff"}}
            >
              <div className="card__center" style={{height:"100%"}}>
                <img
                  src={brand.logo}
                  alt={brand.name}
                  style={{ width: "auto", objectFit: "cover" }}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BrandHero;
