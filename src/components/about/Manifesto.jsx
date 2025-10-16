import React, { useEffect, useRef } from "react";
import styles from "@/components/about/About.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const Manifesto = () => {
  const manifestoData = [
    { id: 1, text: "Design is not tequila. It can’t make everyone happy." },
    { id: 2, text: "We love clarity and we’re straight talkers. Expect the courage to do things differently." },
    { id: 3, text: "We don't shy away from difficult questions or tough projects. When push comes to shove, we do not run for the hills." },
    { id: 4, text: "Remember we are all in this together and doing our best. Please be nice." },
    { id: 5, text: "We always try to step outside our comfort zone. That’s part of the reason we got here." },
    { id: 6, text: "We work hard and try to play harder. We stay playful and never take ourselves too seriously. Yeah, no." },
    { id: 7, text: "No clients were ever harmed in the making of all this… wait. Yep, not even one, we’ve double-checked this." },
    { id: 8, text: "We want to leave work happy and that’s non-negotiable. We will all be dead soon, brands and companies included." },
  ];

 const textRefs = useRef([]);
 const numberRefs = useRef([]);
  const rafId = useRef(null);

  useEffect(() => {
    // ensure refs array length is correct
    textRefs.current = textRefs.current.slice(0, manifestoData.length);
 numberRefs.current = numberRefs.current.slice(0, manifestoData.length);
    const checkCenter = () => {
      const centerY = window.innerHeight / 2;
      let closestIndex = -1;
      let minDist = Infinity;

      textRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(centerY - elCenter);
        if (dist < minDist) {
          minDist = dist;
          closestIndex = i;
        }
      });

      // toggle classes: only closest gets active
      textRefs.current.forEach((el, i) => {
        const numberEl = numberRefs.current[i];
        const isActive = i === closestIndex && minDist <= 80;

        if (isActive) {
          el?.classList.add(styles.active);
          numberEl?.classList.add(styles.active);
        } else {
          el?.classList.remove(styles.active);
          numberEl?.classList.remove(styles.active);
        }
      });
    };

    // rAF-throttled scroll handler
    const onScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        checkCenter();
        rafId.current = null;
      });
    };

    // also run once on mount
    checkCenter();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);



  return (
    <div className={styles.manifesto}>
      <div className={`${styles.g_row} ${styles.manifesto_header}`}>
        <h2 className={`${styles.manifesto_title} ${styles.g_col}`}>
          Manifesto
        </h2>{" "}
        <p className={styles.manifesto_para}>
          Design is a process, not a multiple-choice event. Ours is focused on
          uncovering the essential and allowing it to guide the way forward. At
          the heart of our approach lies transparency, iteration, trust, fun,
          and collaboration—essential ingredients for building strong
          partnerships and bringing brands to life. No cans of mace required. In
          short, this is your invitation to explore future project
          compatibility, capturing the essence of our experience and beliefs in
          what it takes to create a truly epic journey.
        </p>
      </div>
      <ul className={styles.manifesto_statements}>
        {manifestoData.map((item, index) => (
          <li key={item.id}>
            <div className={`${styles.line_divider} ${styles.relative}`}>
              <canvas
                data-audio="wave"
                className={styles.wave}
                width={1238}
                height={400}
              />
            </div>
            <h3 className={styles.g_row}>
              <span className={`${styles.g_col} ${styles.h2}`}  ref={(el) => (numberRefs.current[index] = el)}>
                {item.id.toString().padStart(2, "")}
                
              </span>
              <span
                 ref={(el) => (textRefs.current[index] = el)}
                className={`${styles.g_col} ${styles.p_small}`}
              >
                {item.text}
              </span>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Manifesto;
