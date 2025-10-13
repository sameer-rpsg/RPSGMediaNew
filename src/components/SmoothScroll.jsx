import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Tempus from '@studio-freight/tempus';
import Lenis from '@studio-freight/lenis';
import { usePathname, useSearchParams } from 'next/navigation';

export default function SmoothScroll() {
  const lenis = useRef(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
  }, [pathname, searchParams, lenis]);

  useLayoutEffect(() => {
    lenis.current = new Lenis({
      smoothWheel: true,
        lerp: 0.1, // smoothing amount (lower = smoother)
      smooth: true,
      smoothTouch: false,
      // Customize other instance settings here
    });

    const resize = setInterval(() => {
      lenis.current.resize();
    }, 150);

    function onFrame(time) {
      lenis.current.raf(time);
    }

    const unsubscribe = Tempus.add(onFrame);

    return () => {
      unsubscribe();
      clearInterval(resize);
      lenis.current.destroy();
      lenis.current = null;
    };
  }, []);

  return null;
}
