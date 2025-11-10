// import React,{useEffect} from "react";
// import styles from "@/styles/Footer.module.css";
// import { GoArrowUpRight } from "react-icons/go";
// import Link from "next/link";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import { useRouter } from "next/router";
// gsap.registerPlugin(ScrollTrigger);
// const Footer = () => {
//   const router = useRouter();
//   useEffect(() => {
//     // Only run after component is mounted and DOM is ready
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         `.${styles.footer}`,
//         { y: -200 },
//         {
//           y: 0,
//           duration: 1,
//           ease: "linear",
//           scrollTrigger: {
//             trigger: `.${styles.footer}`,
//             start: "top 85%",
//             end: "top 30%",
//             scrub: true,
//             // markers: true,
//           },
//         }
//       );
//     });

//     // Cleanup GSAP/ScrollTrigger when unmounting
//     return () => ctx.revert();
//   }, [router.asPath]);
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.footerContainer}>
//         {/* Left Section */}
//         <div className={styles.lefttt}>
//           <h2 className={styles.title}>Do it once. Do it right</h2>
//           <div className={styles.info}>
//             <p className={styles.label}>New Business:</p>
//             <a href="mailto:info@rpsgmedia.com" className={styles.email}>
//               info@rpsgmedia.com
//             </a>
//           </div>

//           <div className={styles.newsletter}>
//             <p>Sign up for our newsletter (No spam)</p>
//             <div className={styles.inputWrapper}>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className={styles.input}
//               />
//               <GoArrowUpRight className={styles.arrowIcon} />
//             </div>
//           </div>
//         </div>

//         {/* Center Links */}
//         <div className={styles.right}>
//           <div className={styles.rightfirstpart}>
//             <div className={styles.center}>
//               <ul>
//                 <li>
//                   <Link href="/about">About</Link>
//                 </li>
//                 <li>
//                   <Link href="/brands">Brands</Link>
//                 </li>
//                 <li>
//                   <Link href="/advertising">Advertising</Link>
//                 </li>
//                 <li>
//                   <Link href="/newsroom">Newsroom</Link>
//                 </li>
//                 <li>
//                   <Link href="/contact">Contact</Link>
//                 </li>
//               </ul>
//             </div>
//             <div className={styles.social}>
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 Instagram <GoArrowUpRight />
//               </a>
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 LinkedIn <GoArrowUpRight />
//               </a>
//             </div>
//           </div>
//           {/* Right Section */}
//           <div>
//             <div className={styles.address}>
//               <p>301, HSBC Building,</p>
//               <p>Pali Road, Bandra West,</p>
//               <p>Mumbai - 400050</p>
//             </div>

//             <div className={styles.bottomRight}>
//               <p>Terms of use</p>
//               <p>@2025</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useEffect } from "react";
import styles from "@/styles/Footer.module.css";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const router = useRouter();

  useEffect(() => {
    let ctx;

    const initFooterAnim = () => {
      if (ctx) ctx.revert(); // clean any previous instance

      ctx = gsap.context(() => {
       gsap.fromTo(
        `.${styles.footer}`,
        { y: -200 },
        {
          y: 0,
          duration: 1,
          ease: "linear",
          scrollTrigger: {
            trigger: `.${styles.footer}`,
            start: "top 85%",
            end: "top 30%",
            scrub: true,
            // markers: true,
          },
        }
      );
      });

      // refresh all ScrollTriggers after creating a new one
      ScrollTrigger.refresh();
    };

    // initialize when first loaded
    initFooterAnim();

    // re-init whenever route changes
    const handleRouteChange = () => {
      initFooterAnim();
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // cleanup when component unmounts
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      if (ctx) ctx.revert();
    };
  }, [router]);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left Section */}
        <div className={styles.lefttt}>
          <h2 className={styles.title}>Do it once. Do it right</h2>
          <div className={styles.info}>
            <p className={styles.label}>New Business:</p>
            <a href="mailto:info@rpsgmedia.com" className={styles.email}>
              info@rpsgmedia.com
            </a>
          </div>

          <div className={styles.newsletter}>
            <p>Sign up for our newsletter (No spam)</p>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.input}
              />
              <GoArrowUpRight className={styles.arrowIcon} />
            </div>
          </div>
        </div>

        {/* Center Links */}
        <div className={styles.right}>
          <div className={styles.rightfirstpart}>
            <div className={styles.center}>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/brands">Brands</Link></li>
                <li><Link href="/advertising">Advertising</Link></li>
                <li><Link href="/newsroom">Newsroom</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className={styles.social}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Instagram <GoArrowUpRight />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                LinkedIn <GoArrowUpRight />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <div className={styles.address}>
              <p>301, HSBC Building,</p>
              <p>Pali Road, Bandra West,</p>
              <p>Mumbai - 400050</p>
            </div>
            <div className={styles.bottomRight}>
              <p>Terms of use</p>
              <p>@2025</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
