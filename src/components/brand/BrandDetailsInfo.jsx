// import React from "react";
// import styles from "@/components/brand/Brand.module.css";
// import Image from "next/image";
// import Link from "next/link";
// import { GoArrowUpRight } from "react-icons/go";

// const BrandDetailsInfo = () => {
//   return (
//     <div className={styles.BrandDetailsInfoWrapper}>
//       <div className={styles.brandLogoleft}>
//         <div className={styles.brandLogoleft_logo}>
//           <Image
//             width={1000}
//             height={1000}
//             src="/assets/brandlogos/Manifest 2.png"
//           />
//         </div>
//       </div>

//       <div className={styles.BrandDetailsInfoRight}>
//         <div className={styles.BrandDetailsInfoRightLeft}>
//           <Link
//             href="/services"
//             className="b-arrow underlined link-active-full-small"
//           >
//             <span className="icon icon-b">
//               <GoArrowUpRight />
//             </span>
//             <span className="content_more">
//               {/*[*/}www.manifest.com{/*]*/}
//             </span>
//             <span className="icon icon-a">
//               <GoArrowUpRight />
//             </span>
//           </Link>
//           <Link
//             href="/services"
//             className="b-arrow underlined link-active-full-small"
//           >
//             <span className="icon icon-b">
//               <GoArrowUpRight />
//             </span>
//             <span className="content_more">
//               {/*[*/}Download Media Kit{/*]*/}
//             </span>
//             <span className="icon icon-a">
//               <GoArrowUpRight />
//             </span>
//           </Link>
//         </div>
//         <div className={styles.BrandDetailsInfoRightright}>
//           <Link
//             href="/services"
//             className="b-arrow underlined link-active-full-small"
//           >
//             <span className="icon icon-b">
//               <GoArrowUpRight />
//             </span>
//             <span className="content_more">
//               {/*[*/}Instagram{/*]*/}
//             </span>
//             <span className="icon icon-a">
//               <GoArrowUpRight />
//             </span>
//           </Link>
//           <Link
//             href="/services"
//             className="b-arrow underlined link-active-full-small"
//           >
//             <span className="icon icon-b">
//               <GoArrowUpRight />
//             </span>
//             <span className="content_more">
//               {/*[*/}Facebook{/*]*/}
//             </span>
//             <span className="icon icon-a">
//               <GoArrowUpRight />
//             </span>
//           </Link>
//           <Link
//             href="/services"
//             className="b-arrow underlined link-active-full-small"
//           >
//             <span className="icon icon-b">
//               <GoArrowUpRight />
//             </span>
//             <span className="content_more">
//               {/*[*/}YouTube{/*]*/}
//             </span>
//             <span className="icon icon-a">
//               <GoArrowUpRight />
//             </span>
//           </Link>
//           <Link
//             href="/services"
//             className="b-arrow underlined link-active-full-small"
//           >
//             <span className="icon icon-b">
//               <GoArrowUpRight />
//             </span>
//             <span className="content_more">
//               {/*[*/}Twitter{/*]*/}
//             </span>
//             <span className="icon icon-a">
//               <GoArrowUpRight />
//             </span>
//           </Link>
//         </div>
//       </div>
//        <div className={styles.benefits_divider}></div>
//     </div>
//   );
// };

// export default BrandDetailsInfo;

import React, { useEffect } from "react";
import styles from "@/components/brand/Brand.module.css";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import FadeSpan from "../common/FadeSpan";
import Aos from "aos";

const BrandDetailsInfo = () => {
  const leftLinks = [
    { label: "www.manifest.com", href: "/services" },
    { label: "Download Media Kit", href: "/services" },
  ];

  const rightLinks = [
    { label: "Instagram", href: "/services" },
    { label: "Facebook", href: "/services" },
    { label: "YouTube", href: "/services" },
    { label: "Twitter", href: "/services" },
  ];

  const renderLinks = (links) =>
    links.map(({ label, href }) => (
      <Link
        key={label}
        href={href}
        className="b-arrow underlined link-active-full-small"
      >
        <span className="icon icon-b">
          <GoArrowUpRight />
        </span>
        <span className="content_more">{label}</span>
        <span className="icon icon-a">
          <GoArrowUpRight />
        </span>
      </Link>
    ));
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refreshHard();
  }, []);
  return (
    <div className={styles.BrandDetailsInfoWrapper}>
      <div className={styles.brandLogoleft}>
        <FadeSpan delay={200}>
          <div className={styles.brandLogoleft_logo}>
            <Image
              width={1000}
              height={1000}
              src="/assets/brandlogos/Manifest 2.png"
              alt="Manifest logo"
              priority
            />
          </div>
        </FadeSpan>
      </div>

      <div className={styles.BrandDetailsInfoRight}>
        <FadeSpan delay={400}>
        <div className={styles.BrandDetailsInfoRightLeft}>
          {renderLinks(leftLinks)}
        </div>
          </FadeSpan>
        <FadeSpan delay={600}>
        <div className={styles.BrandDetailsInfoRightright}>
          {renderLinks(rightLinks)}
        </div>
        </FadeSpan>
      </div>

      <div className={styles.benefits_divider}></div>
    </div>
  );
};

export default BrandDetailsInfo;
