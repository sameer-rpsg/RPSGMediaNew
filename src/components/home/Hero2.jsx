import React, { useEffect,useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Hero2 = () => {
const scope = useRef(null);

  useGSAP(() => {
    // -----------------------------------
    // Scroll Lock Helper
    // -----------------------------------
    const toggleScroll = (enable = true) => {
      if (window.lenis) {
        enable ? window.lenis.start() : window.lenis.stop();
      } else {
        gsap.set(
          document.body,
          enable
            ? { clearProps: "height,overflow" }
            : { height: "100vh", overflow: "hidden" }
        );
      }
    };

    const isPortrait = matchMedia("(orientation: portrait)").matches;

    // -----------------------------------
    // ENTER ANIMATION
    // -----------------------------------
    let enterAnimationEnded = false;

    let tl_enterAnimation = gsap.timeline({
      paused: true,
      onComplete: () => {
        setTimeout(() => {
          enterAnimationEnded = true;
        }, 1000);
      },
    });

    tl_enterAnimation.fromTo(
      [".homeheroline .sen", ".homeherolineMbl .sen"],
      { y: 120 },
      {
        y: 0,
        stagger: 0.09,
        duration: 1.6,
        opacity: 1,
        ease: "expo.out",
      }
    );

    tl_enterAnimation.to(".home__hero__videoMbl", { opacity: 1 });

    requestAnimationFrame(() => tl_enterAnimation.play());

    if (window.firstLoad) {
      requestAnimationFrame(() => window.loaderAnimation?.play());
    }

    // -----------------------------------
    // HERO VIDEO SCROLL ANIMATION
    // -----------------------------------
    if (window.innerWidth >= 600) {
      heroVideo();
    }

    function heroVideo() {
      const heroSection = document.querySelector(".home__hero");
      const heroVideoWrapper = document.querySelector(".home__hero__video");
      const videoSection = document.querySelector(".home__video");
      const videoElement = heroVideoWrapper?.querySelector("video");

      if (!videoElement) return;

      ScrollTrigger.create({
        trigger: videoSection,
        pin: heroVideoWrapper,
        pinSpacing: false,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      });

      gsap.to(heroVideoWrapper, { opacity: 1, delay: 1 });

      ScrollTrigger.create({
        trigger: ".home__video",
        pin: ".home__hero__metas",
        pinSpacing: false,
        start: "top+=1px bottom",
        end: "bottom bottom+=1px",
        scrub: true,
      });

      let offsetTop = 0,
        offsetLeft = 0,
        videoHeight = 0;

      const getOffsets = () => {
        const videoRect = videoElement.getBoundingClientRect();
        const sectionRect = videoSection.getBoundingClientRect();

        return {
          top: isPortrait
            ? sectionRect.top - videoRect.top - sectionRect.height
            : -videoRect.top,
          left: -videoRect.left,
        };
      };

      const getVideoHeight = () =>
        isPortrait ? 0.5625 * window.innerWidth : "100vh";

      const updateOffsets = () => {
        const pos = getOffsets();
        offsetTop = pos.top;
        offsetLeft = pos.left;
        videoHeight = getVideoHeight();
      };

      updateOffsets();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection,
          endTrigger: videoSection,
          start: "top top",
          end: isPortrait ? "bottom bottom" : "top top",
          scrub: true,
          invalidateOnRefresh: () => !(window.innerWidth < 768),
          onRefresh: () => {
            if (window.innerWidth > 768) updateOffsets();
          },
          onEnterBack: () => {
            window.cursor?.leave(true);
            heroVideoWrapper.classList.remove("is-finished");
            videoSection.classList.remove("active");
          },
        },
      });

      tl.fromTo(
        videoElement,
        { left: 0, top: 0 },
        {
          width: "100vw",
          height: () =>
            enterAnimationEnded ? getVideoHeight() : videoHeight,
          top: () => (enterAnimationEnded ? getOffsets().top : offsetTop),
          left: () => (enterAnimationEnded ? getOffsets().left : offsetLeft),
          clipPath:
            "polygon(0% 0%,25% 0%,50% 0%,100% 0%,100% 0%,100% 100%,100% 100%,0% 100%)",
          ease: "linear",
        }
      );

      tl.call(() => {
        window.cursor?.enter(heroVideoWrapper.dataset.cursor);
        heroVideoWrapper.classList.add("is-finished");
        videoSection.classList.add("active");
      });

      toggleScroll(true);
    }

    // -----------------------------------
    // VIDEO STATE HANDLING
    // -----------------------------------
    videoState();

    function videoState() {
      const wrapper = window.wrapper;
      const videoContainer = wrapper?.querySelector(".home__hero__video");
      const videoElement = videoContainer?.querySelector("video");
      const videoSection = wrapper?.querySelector(".home__video");

      if (!videoElement) return;

      ScrollTrigger.create({
        trigger: videoElement,
        endTrigger: ".home__projects",
        start: "top bottom",
        end: "top top",
        onEnter: () => {
          if (!isVideoPlaying(videoElement)) videoElement.play();
        },
        onEnterBack: () => {
          if (!isVideoPlaying(videoElement)) videoElement.play();
          window.cursor?.leave(true);
        },
        onLeave: () => {
          if (isVideoPlaying(videoElement)) videoElement.pause();
          window.cursor?.leave(true);
        },
        onLeaveBack: () => {
          if (isVideoPlaying(videoElement)) videoElement.pause();
        },
      });

      const updateCursor = () => {
        videoElement.muted
          ? window.cursor?.enter(videoContainer.dataset.cursor)
          : window.cursor?.enter(videoContainer.dataset.cursorClick);
      };

      videoElement.addEventListener("click", () => {
        videoElement.muted = !videoElement.muted;
        updateCursor();

        if (!isVideoPlaying(videoElement)) {
          videoElement.play();
          videoSection?.classList.remove("active");
        }
      });

      videoElement.addEventListener("mouseenter", updateCursor);
      videoElement.addEventListener("mouseleave", () =>
        window.cursor?.leave(true)
      );
    }

    function isVideoPlaying(video) {
      return !!(
        video.currentTime > 0 &&
        !video.paused &&
        !video.ended &&
        video.readyState > 2
      );
    }
  }, { scope }); // <— useGSAP scopes everything & auto-cleans

    useEffect(() => {
    // Only run after component is mounted and DOM is ready
    const ctx = gsap.context(() => {
      gsap.fromTo(
       ".mbl_heroVideo",
        { y: 0 },
        {
          y: 200,
          duration: 4,
          ease: "linear",
          scrollTrigger: {
            trigger: ".mbl_hero",
            start: "top 0%",
            scrub: true,
            // markers: true,
          },
        }
      );
    });

    // Cleanup GSAP/ScrollTrigger when unmounting
    return () => ctx.revert();
  }, []);
  return (
    <>
      <section ref={scope} className="home__hero">
        <div className="mbl_hero">
        <video
          className="mbl_heroVideo"
          src="/assets/videos/homeherovideo.mp4"
          autoPlay
          loop
          playsInline
          muted
          // poster="../../../assets/rpsg_logoonly.png"
          crossOrigin="anonymous"
        ></video>
         <div className="home__hero__inner_mbl">
          <div class="p1_mbl">
            <div class="homeherolineMbl">
              <div className="sen">Defining</div>
            </div>
            {/* <div className="homeheroline"> */}
            {/* <div className="homeheroline"> */}
            <div
              className="home__hero__videoMbl"
              data-cursor="sound on"
              data-cursor-click="sound off"
            >
              {/* <video
                src="/assets/videos/homeherovideo.mp4"
                autoPlay
                loop
                playsInline
                muted
                poster="../../../assets/rpsg_logoonly.png"
                crossOrigin="anonymous"
              ></video> */}
            </div>
            {/* </div> */}
            <div class="homeherolineMbl">
              <div className="sen">And</div>
            </div>
            {/* </div> */}
          </div>
          <div class="p2_mbl">
            <div class="homeherolineMbl">
              <div className="sen">Luxury,</div>
            </div>
            <div class="homeherolineMbl">
              <div className="sen">Influence,</div>
            </div>
            <div class="homeherolineMbl">
              <div className="sen">Modern Media.</div>
            </div>
          </div>
        </div>
        </div>
        <div className="home__hero__inner">
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
                poster="../../../assets/rpsg_logoonly.png"
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
      </section>
      <section className="home__video"></section>
    </>
  );
};

export default Hero2;
