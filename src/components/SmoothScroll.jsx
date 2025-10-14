// import React, { useEffect, useLayoutEffect, useRef } from 'react';
// import Tempus from '@studio-freight/tempus';
// import Lenis from '@studio-freight/lenis';
// import { usePathname, useSearchParams } from 'next/navigation';

// export default function SmoothScroll() {
//   const lenis = useRef(null);
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
//   }, [pathname, searchParams, lenis]);

//   useLayoutEffect(() => {
//     lenis.current = new Lenis({
//       smoothWheel: true,
//         lerp: 0.1, // smoothing amount (lower = smoother)
//       smooth: true,
//       smoothTouch: false,
//       // Customize other instance settings here
//     });

//     const resize = setInterval(() => {
//       lenis.current.resize();
//     }, 150);

//     function onFrame(time) {
//       lenis.current.raf(time);
//     }

//     const unsubscribe = Tempus.add(onFrame);

//     return () => {
//       unsubscribe();
//       clearInterval(resize);
//       lenis.current.destroy();
//       lenis.current = null;
//     };
//   }, []);

//   return null;
// }

import Lenis from "lenis";
import React, { useEffect } from "react";
// import AOS from "aos";

const SmoothScroll = ({ children }) => {

  useEffect(() => {
    if (window.innerWidth < 1024) return
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    window.lenis = lenis;

    lenis.on("scroll", ({ scroll }) => {
    });

    const raf = (time) => {
      lenis.raf(time);
    //   AOS.refresh();
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;