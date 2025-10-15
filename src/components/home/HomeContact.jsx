
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedLink = ({ href = "/about", text = "Get to know us", text2 = "About Us" }) => {
  const linkRef = useRef(null);
  const span1Ref = useRef(null);
  const span2Ref = useRef(null);
  const wrapperRef = useRef(null);
  const barRef = useRef(null);
  let tl = null;

  // --- Split a text into span.--char elements
  const splitText = (element) => {
    const text = element.textContent.trim();
    element.textContent = "";
    const chars = text.split("").map((char) => {
      const span = document.createElement("span");
      span.className = "--char";
      span.style.display = "inline-block";
      span.textContent = char === " " ? "\u00A0" : char;
      element.appendChild(span);
      return span;
    });
    return chars;
  };

  useEffect(() => {
    const link = linkRef.current;
    const span1 = span1Ref.current;
    const span2 = span2Ref.current;
    const wrapper = wrapperRef.current;
    const bar = barRef.current;

    // Split text into characters
    const chars1 = splitText(span1);
    const chars2 = splitText(span2);

    // Initial states
    gsap.set(span2, { autoAlpha: 1 });
    gsap.set(chars2, { yPercent: 100 });
    gsap.set(bar, { scaleX: 1, transformOrigin: "50% 50%" });

    // Calculate widths for scaling
    const recalcWidths = () => {
      const w1 = span1.getBoundingClientRect().width || 0;
      const w2 = span2.getBoundingClientRect().width || 0;
      const ratio = w1 ? w2 / w1 : 1;

      gsap.set(wrapper, { width: Math.max(w1, w2) });
      gsap.set(bar, { width: w1 });
      link.dataset.ratio = ratio;
    };

    recalcWidths();
    window.addEventListener("resize", recalcWidths);

    const ease = "power2.out";

    // Hover Enter
    const onEnter = () => {
      if (tl) tl.kill();
      tl = gsap.timeline({ defaults: { ease } });
      tl.to(chars1, { yPercent: -110, stagger: 0.02, duration: 0.5 }, 0)
        .to(chars2, { yPercent: 0, stagger: 0.02, duration: 0.5 }, 0.10)
        .to(bar, { scaleX: parseFloat(link.dataset.ratio || 1), duration: 1.4 }, 0);
    };

    // Hover Leave
    const onLeave = () => {
      if (tl) tl.kill();
      tl = gsap.timeline({ defaults: { ease } });
      tl.to(chars2, { yPercent: 110, stagger: 0.02, duration: 0.5 }, 0)
        .to(chars1, { yPercent: 0, stagger: 0.02, duration: 0.5 }, 0.10)
        .to(bar, { scaleX: 1, duration: 1.4 }, 0);
    };

    link.addEventListener("mouseenter", onEnter);
    link.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("resize", recalcWidths);
      link.removeEventListener("mouseenter", onEnter);
      link.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <a href={href} className="link" ref={linkRef} aria-title={text}>
      <div className="link-hover">
        <div className="wrapper" ref={wrapperRef}>
          <span ref={span1Ref} id="span1">
            {text}
          </span>
          <span ref={span2Ref} id="span2">
            {text2}
          </span>
          <div className="width-bar" ref={barRef}></div>
        </div>
      </div>
    </a>
  );
};

export default function HomeContact() {
  return (
    <section className="contact__wrapper">
      <AnimatedLink href="/about" text="Get to know us" text2="About Us" />
    </section>
  );
}
