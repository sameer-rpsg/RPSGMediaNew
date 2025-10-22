import gsap from "gsap";
import React, { useEffect } from "react";

const Support = () => {
  useEffect(() => {
    // Select all the cards and buttons
    // const supportCards = document.querySelectorAll(".support__links-cta");
    const supportbtns = document.querySelectorAll(".support__links_card_btn");
    const supportCardshidden = document.querySelectorAll(
      ".support_cntr_hidden"
    );
    const supportCards_Title = document.querySelectorAll(
      ".support__text-title_cover p"
    );

    if (
      supportbtns.length !== supportCardshidden.length ||
      supportbtns.length !== supportCards_Title.length
    ) {
      console.error(
        "The number of buttons does not match the number of text cards."
      );
      return; // Exit early if there's a mismatch
    }

    supportbtns.forEach((btnn, index, svg) => {
      const RtextCard = supportCardshidden[index];
      const RtextTitle = supportCards_Title[index];
      const tl = gsap.timeline({ paused: true });

      tl.to(
        RtextCard,
        {
          ease: "circ.inOut",
          duration: 1,
          height: "100%",
        },
        "a"
      )
        .to(
          RtextTitle,
          {
            y: 0,
            delay: 0.3,
            ease: "circ.inOut",
            duration: 1,
          },
          "a"
        )
        .to(
          btnn,
          {
            ease: "power4.inOut",
            duration: 0.8,
            rotate: "245deg",
            backgroundColor:"gray",
          },
          "a"
        )

      const handleClick = () => {
        if (tl.isActive()) return; // Avoid triggering animations if one is already active
        if (tl.progress() === 1) {
          tl.reverse();
        } else {
          tl.play();
        }
      };

      btnn.addEventListener("click", handleClick);

      // Cleanup function to remove event listeners
      return () => {
        btnn.removeEventListener("click", handleClick);
      };
    });
  }, []);
  return (
    <div id="support" className="support support--no-padding-top">
      <h2 className="support_text statement__heading text--light support__headline responsive-support__title">
        Licensing
      </h2>
      <p className="support__headline_para responsive-support__title">
        RPSG Media develops media licensing and brand collaborations with its
        world-renowned brands and unique, preeminent editorial content. Together
        with partners we develop innovative consumer products, platforms and
        experiences that connect with a loyal audience across diverse verticals
        such as fashion, beauty, design, food, travel and more.
      </p>
      <div className="support__links">
        <div className="support__links-cta support--is-desktop responsive-support__cta--desktop">
          <div className="support_text_content">
            <p className="text text--subtitle2 text--light">
              Content Licensing
            </p>
            <p className="text text--body text--light support__links-cta-body">
              Get help from our award-winning Customer Support team
            </p>
            <div className="text text--body support__links-cta-arrow">
              <div className="support__links_card_btn">
                <span className="inner-icon">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="plus-icon undefined"
                  >
                    <path
                      d="M0 8h16M8 0v16"
                      // vector-effect="non-scaling-stroke"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="support_cntr_hidden">
            <div className="support__text-card">
              <div className="support__text-title">
                <div className="support__text-title_cover">
                  <p>
                    RPSG Media Content Licensing leverages robust archives and
                    portfolios by authorizing third party requests for logos,
                    seals, endorsements, illustrations/cartoons, text, video,
                    and iconic imagery. Content and press licensing provides
                    access to more than 8 million assets including editorial,
                    photography and illustration.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="support__links-cta support--is-desktop responsive-support__cta--desktop">
          <div className="support_text_content">
            <p className="text text--subtitle2 text--light">Media Licensing</p>
            <p className="text text--body text--light support__links-cta-body">
              Get help from our award-winning Customer Support team
            </p>
            <div className="text text--body support__links-cta-arrow">
              <div className="support__links_card_btn">
                <span className="inner-icon">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="plus-icon undefined"
                  >
                    <path
                      d="M0 8h16M8 0v16"
                      // vector-effect="non-scaling-stroke"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="support_cntr_hidden">
            <div className="support__text-card">
              <div className="support__text-title">
                <div className="support__text-title_cover">
                  <p>
                    Through media licensing our brands increase their global
                    footprint by strategically establishing new markets,
                    offering meaningful traction with local audiences, overall
                    brand enrichment and innovative editorial and marketing
                    efforts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="support__links-cta support--is-desktop responsive-support__cta--desktop">
          <div className="support_text_content">
            <p className="text text--subtitle2 text--light">
              Product Licensing
            </p>
            <p className="text text--body text--light support__links-cta-body">
              Get help from our award-winning Customer Support team
            </p>
            <div className="text text--body support__links-cta-arrow">
              <div className="support__links_card_btn">
                <span className="inner-icon">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="plus-icon undefined"
                  >
                    <path
                      d="M0 8h16M8 0v16"
                      // vector-effect="non-scaling-stroke"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="support_cntr_hidden">
            <div className="support__text-card">
              <div className="support__text-title">
                <div className="support__text-title_cover">
                  <p>
                    Branded products provide consumers with new ways to interact
                    with the brands they love. Together with category-expert
                    partners we create innovative lifestyle products ranging
                    from apparel to grooming, homeware and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="support__links-cta support--is-desktop responsive-support__cta--desktop">
          <div className="support_text_content">
            <p className="text text--subtitle2 text--light">Branded Property</p>
            <p className="text text--body text--light support__links-cta-body">
              Get help from our award-winning Customer Support team
            </p>
            <div className="text text--body support__links-cta-arrow">
              <div className="support__links_card_btn">
                <span className="inner-icon">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="plus-icon undefined"
                  >
                    <path
                      d="M0 8h16M8 0v16"
                      // vector-effect="non-scaling-stroke"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="support_cntr_hidden">
            <div className="support__text-card">
              <div className="support__text-title">
                <div className="support__text-title_cover">
                  <p>
                    RPSG Media extends the customer experience with a portfolio
                    of branded properties, including retail, restaurants and
                    bars, with a vision to open branded residences and hotels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
