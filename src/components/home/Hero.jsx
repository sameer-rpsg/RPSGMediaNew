import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const router = useRouter();

  useGSAP(() => {
    function updateAppHeight() {
      const appHeight = window.innerHeight;
      document.documentElement.style.setProperty(
        "--app-height",
        `${appHeight}px`
      );
      document.documentElement.style.setProperty(
        "--screen-height",
        `${appHeight}px`
      );
      ScrollTrigger.refresh();
    }

    // Call once on load
    updateAppHeight();

    // Update on resize/orientationchange
    window.addEventListener("resize", updateAppHeight);
    window.addEventListener("orientationchange", updateAppHeight);
    const isPortrait = matchMedia("all and (orientation:portrait)").matches;
    let enterAnimationEnded = false;

    // Creating GSAP timeline for enter animation
    let tl_enterAnimation = gsap.timeline({
      paused: true, // Start paused
      onComplete: function () {
        setTimeout(() => {
          enterAnimationEnded = true;
        }, 1000); // Mark animation as ended after a slight delay
      },
    });

    // Animating the sentences in .home__hero__line
    tl_enterAnimation.fromTo(
      ".homeheroline .sen",{
        y:120
      },
      {
        y: 0,
        stagger: 0.09,
        duration: 1.6,
        opacity: 1,
        ease: "expo.out",
      }
    );

    // Animating .home__hero__metas
    tl_enterAnimation.to(".home__hero__metas", {
      autoAlpha: 1,
      stagger: 0.1,
      onComplete: function () {
        document.body.classList.add("animation-ended");
      },
    });

    requestAnimationFrame(function () {
      tl_enterAnimation.play();
    });

    const e = window;
    const t = document.querySelector(".home__hero__video");
    const n = document.querySelector(".home__video");
    const r = t.querySelector("video");

    // ScrollTrigger creation for pinning the video
    ScrollTrigger.create({
      pin: t,
      pinSpacing: false,
      trigger: n,
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    });
    // gsap.set(t,{
    //   opacity:0
    // })
    gsap.to(
      t,
      {
        opacity: 1,
        delay: 1,
      }
    );
    const a = function () {
      const t = r.getBoundingClientRect();
      const i = n.getBoundingClientRect();
      return {
        top: e.isPortrait ? i.top - t.top - i.height : -t.top,
        left: -t.left,
      };
    };

    const u = a();
    e.offsetTop = u.top;
    e.offsetLeft = u.left;

    const s = function () {
      return e.isPortrait ? 0.5625 * window.innerWidth : "100vh";
    };
    e.videoHeight = s();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home__hero",
        endTrigger: ".home__video",
        start: "top top",
        end: function () {
          return e.isPortrait ? "bottom bottom" : "top top";
        },
        scrub: true,
        invalidateOnRefresh: function () {
          return !(window.innerWidth < 768);
        },
        onRefresh: function () {
          if (window.innerWidth > 768) {
            const t = r.getBoundingClientRect();
            const i = n.getBoundingClientRect();
            e.offsetTop = e.isPortrait ? i.top - t.top - i.height : -t.top;
            e.offsetLeft = -t.left;
          }
        },
        onEnterBack: function () {
          t.classList.remove("is-finished");
          n.classList.remove("active");
        },
      },
    });

    tl.fromTo(
      r,
      {
        left: 0,
        top: "8px",
      },
      {
        width: "100vw",
        height: function () {
          return enterAnimationEnded ? s() : e.videoHeight;
        },
        top: function () {
          return enterAnimationEnded ? a().top : e.offsetTop;
        },
        left: function () {
          return enterAnimationEnded ? a().left : e.offsetLeft;
        },
        clipPath:
          "polygon(0% 0%,25% 0%,50% 0%,100% 0%,100% 0%,100% 100%,100% 100%,0% 100%)",
      },
      "together"
    );

    e.isPortrait &&
      tl.to(
        ".home__hero__metas",
        {
          autoAlpha: 0,
        },
        "together"
      );

    tl.call(function () {
      t.classList.add("is-finished");
      n.classList.add("active");
    });

    // Responsive adjustments using ScrollTrigger.matchMedia
    ScrollTrigger.matchMedia({
      // Mobile view: Pin .home__video to 100vh
      "(max-width: 767px)": function () {
        gsap.to(".home__video", {
          scrollTrigger: {
            trigger: ".home__video",
            start: "top top", // Pin when the top of the video hits the top of the viewport
            end: "+=100%", // Pin until 100% of the section is scrolled
            pin: true, // Pinning the element
            pinSpacing: false, // Prevent additional space after pinning
          },
          height: "162px", // Make sure the height of the video is 100vh
        });
      },

      // Desktop view: Don't pin .home__video, no special pinning
      "(min-width: 768px)": function () {
        gsap.to(".home__video", {
          scrollTrigger: {
            trigger: ".home__video",
            start: "top top", // Start ScrollTrigger when .home__video is at the top of the viewport
            end: "bottom bottom", // End ScrollTrigger when the bottom of .home__video reaches the bottom of the viewport
            scrub: true, // Smooth scroll-based animation
            pin: false, // Don't pin on larger screens
          },
        });
      },
    });
  }, [router.asPath]);

  // Force play programmatically
  // Sometimes Safari requires a JS call to .play():
  useEffect(() => {
    const video = document.querySelector(".home__hero__video video");

    video.muted = true;
    video.playsInline = true;

    video.load(); // ensure it loads

    video.play().catch((err) => {
      console.log("Autoplay blocked until user interacts:", err);
    });
  }, []);
  return (
    <>
      <section className="home__hero container-fluid">
        {/* <h1 className="home__hero__inner mb-7 mb-md-0">
          <div className="home__hero__line text-center text-md-start">
            <div className="sentence">
              <font style={{ verticalAlign: "inherit" }}>Defining Luxury,</font>
            </div>
          </div>
          <div className="home__hero__line centerdivlinevideo">
            <div
              className="home__hero__video"
              data-cursor="sound on"
              data-cursor-click="sound off"
            >
              <video
                src="/assets/videos/homeherovideo.mp4"
                autoPlay
                loop
                playsInline
                muted
                poster="../../../assets/rpsg_logoonly.png"
                crossOrigin="anonymous"
              ></video>
            </div>
            <div className="sentence">
              <font style={{ verticalAlign: "inherit" }}>Influence,</font>
            </div>
          </div>
          <div className="home__hero__line btmlinetext">
            <div className="sentence">And Modern Media.</div>
          </div>
        </h1> */}
        <div className="home__hero__inner mb-7 mb-md-0">
          <div class="p1">
            <div class="homeheroline">
              <div className="sen">Defining</div>
            </div>
            {/* <div className="homeheroline"> */}
            {/* <div className="homeheroline"> */}
            <div
              className="home__hero__video"
              data-cursor="sound on"
              data-cursor-click="sound off"
            >
              <video
                src="/assets/videos/homeherovideo.mp4"
                autoPlay
                loop
                playsInline
                muted
                // poster="../../../assets/rpsg_logoonly.png"
                crossOrigin="anonymous"
              ></video>
            </div>
            {/* </div> */}
            <div class="homeheroline">
              <div className="sen">And</div>
            </div>
            {/* </div> */}
          </div>
          <div class="p2">
            <div class="homeheroline">
              <div className="sen">Luxury,</div>
            </div>
            <div class="homeheroline">
              <div className="sen">Influence,</div>
            </div>
            <div class="homeheroline">
              <div className="sen">Modern Media.</div>
            </div>
          </div>
        </div>
        <div className="home__hero__metas container-fluid"></div>
      </section>

      <section className="home__video position-relative"></section>
    </>
  );
};

export default Hero;
