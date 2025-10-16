import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="main_section_news_article">
      <div className="block-article-post-header">
        <Link href={"/newsroom"} className="article_cta-button">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="20.5"
              cy="20.5"
              r="19.5"
              transform="rotate(-90 20.5 20.5)"
              stroke="var(--dept-button-icon-outline-color)"
              stroke-width="1.3"
              stroke-miterlimit="10"
              fill="none"
            ></circle>
            <circle
              class="icon-backplate"
              cx="20.5"
              cy="20.5"
              r="19.5"
              transform="rotate(-90 20.5 20.5)"
              fill="var(--dept-button-icon-backplate-color)"
              fill-opacity="1"
            ></circle>
            <path
              class="icon-center"
              d="M21.174 30 11 20.674l10.174-9.326m-9.326 9.328H30.5"
              stroke="var(--dept-button-icon-color)"
              stroke-width="1.3"
              stroke-miterlimit="10"
              fill="none"
            ></path>
          </svg>
          <span>Back to all articles</span>
        </Link>
        <h1 className="block-article-post-header__title">
          The power of good friction: Two brands pioneering brand recognition
          &amp; loyalty through e-commerce{" "}
        </h1>
        <div
          className="image-wrap block-article-post-header__image-wrap"
          data-align="center center"
        >
          <picture class="image__picture">
            <img
              src="https://www.deptagency.com/wp-content/uploads/2024/07/5-1200x670-1.png"
              className="image block-article-post-header__image"
              loading="lazy"
            />
          </picture>
        </div>
        <div class="author block-article-post-header__author">
          <img
            class="author__portrait"
            src="https://www.deptagency.com/wp-content/uploads/2023/12/MariaProkoheadshot-e1701966883394-150x150.jpg"
            alt="Maria Prokopowicz"
          />
          <div class="author__text">
            Maria Prokopowicz <br /> Content Marketing Manager
          </div>
        </div>
        <div class="block-article-post-header__meta">
          <div class="block-article-post-header__meta-length">
            <div class="block-article-post-header__length-description">
              Length{" "}
            </div>
            <div class="block-article-post-header__length-time">
              5 min read{" "}
            </div>
          </div>
          <div class="block-article-post-header__meta-date">
            <div class="block-article-post-header__date-description">Date </div>
            <div class="block-article-post-header__published-date">
              2 July 2024{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="block-statement">
        <p className="block-statement__title">
          In marketing and UX, friction might as well be a curse word.
          Slow-loading pages, obnoxious form pop-ups, or a seven-step checkout
          process? Forget about it. <br />
          <br />
          But, sometimes, there is such a thing as “good friction.”
          <br />
          <br />
          Friction, when used strategically, can be a powerful tool to slow down
          visitors, create meaningful interactions, and reinforce a customer’s
          decision to buy from your brand.
        </p>
      </div>
      <div className="block-title-and-content">
        <div className="block-title-and-content__layout">
          <h2 className="block-title-and-content__title">
            Deprioritizing friction on your DTC site{" "}
          </h2>
          <div className="block-title-and-content__content">
            <p className="block-title-and-content__item-inner_para">
              Sure, your DTC site needs a relatively frictionless user
              experience. Easy navigation, a simple checkout process, a clear
              customer journey, connected channels, and responsive customer
              service. Who hasn’t heard that<em>any friction</em>
              in the customer journey will send consumers running?
              <br />
              <br />
              But here’s the thing. Regardless of how seamless your site’s
              technology is, you can’t compete with platforms like Amazon when
              it comes to cost, speed, and convenience.
              <br />
              <br />
              So, the goal shouldn’t be to replace Amazon as a sales engine, but
              to embrace the role of your e-commerce site as a brand-building
              platform. By focusing on building brand recognition, loyalty, and
              love, you can ultimately drive more sales in the long term through
              personalized experiences and customer engagement.
              <br />
              <br />
              Let’s explore two examples of brands whose e-commerce sites
              utilize good friction and storytelling to engage visitors in a
              positive way.
            </p>
          </div>
        </div>
        <div className="block-title-and-content__social-links">
          <Link
            href={""}
            className="block-title-and-content__social-links-item"
          >
            <svg
              fill="none"
              xmlns="http: //www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
            >
              <path
                d="M6.832 15.167l8.333-8.333M9.332 6.001l2.787-2.787a4.715 4.715 0 016.666 0v0a4.715 4.715 0 010 6.667L16 12.668M5.999 9.334l-2.787 2.787a4.715 4.715 0 000 6.666v0a4.715 4.715 0 006.667 0l2.787-2.786"
                stroke="currentColor"
                stroke-width="2"
              ></path>
            </svg>
          </Link>

          <Link
            href={""}
            className="block-title-and-content__social-links-item"
          >
            <svg
              width="14"
              height="22"
              viewBox="0 0 14 22"
              fill="none"
              xmlns="http: //www.w3.org/2000/svg"
            >
              <path
                d="M4.032 22L4 12H0V8h4V5.5C4 1.789 6.298 0 9.61 0c1.585 0 2.948.118 3.345.17v3.88H10.66c-1.8 0-2.15.856-2.15 2.112V8h5.241l-2 4H8.51v10H4.032z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>

          <Link
            href={""}
            className="block-title-and-content__social-links-item"
          >
            <svg
              xmlns="http: //www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
            >
              <path
                d="M.805 24l1.687-6.163a11.869 11.869 0 01-1.588-5.945C.907 5.335 6.244 0 12.801 0c3.182.001 6.17 1.24 8.415 3.488a11.819 11.819 0 013.481 8.413c-.002 6.558-5.34 11.893-11.896 11.893h-.005c-1.99-.001-3.947-.5-5.685-1.448L.805 24zm6.598-3.807l.361.214a9.874 9.874 0 005.033 1.378h.004c5.45 0 9.885-4.434 9.888-9.885a9.824 9.824 0 00-2.894-6.993 9.823 9.823 0 00-6.99-2.898c-5.454 0-9.89 4.434-9.892 9.884a9.86 9.86 0 001.512 5.26l.235.374-.999 3.648 3.742-.982z"
                fill="currentColor"
              ></path>
              <path
                d="M9.825 6.921c-.24-.58-.486-.501-.668-.51-.174-.009-.372-.01-.57-.01-.198 0-.52.074-.793.371-.272.298-1.04 1.017-1.04 2.48 0 1.462 1.065 2.875 1.214 3.073.148.199 2.096 3.2 5.078 4.487.709.306 1.262.49 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.759-.72 2.007-1.413.247-.694.247-1.29.173-1.413-.074-.124-.272-.199-.57-.347-.297-.149-1.758-.868-2.03-.967-.273-.1-.471-.149-.67.149-.198.297-.767.966-.94 1.165-.174.198-.348.223-.645.074-.297-.149-1.255-.462-2.39-1.475-.884-.788-1.48-1.76-1.654-2.058-.173-.298-.018-.459.13-.607.134-.133.298-.347.446-.52.149-.174.199-.298.298-.496.099-.198.05-.372-.025-.52-.074-.15-.669-1.612-.917-2.207z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>

          <Link
            href={""}
            className="block-title-and-content__social-links-item"
          >
            <svg
              width="25"
              height="20"
              viewBox="0 0 25 20"
              fill="none"
              xmlns="http: //www.w3.org/2000/svg"
            >
              <path
                d="M24.75 2.3c-.9.4-1.8.7-2.8.8 1-.6 1.8-1.6 2.2-2.7-1 .6-2 1-3.1 1.2-.9-1-2.2-1.6-3.6-1.6-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.1-4.2-.2-7.8-2.2-10.2-5.2-.5.8-.7 1.6-.7 2.5 0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14-7.5 14-14v-.6c1-.7 1.8-1.6 2.5-2.5z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>

          <Link
            href={""}
            className="block-title-and-content__social-links-item"
          >
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http: //www.w3.org/2000/svg"
            >
              <path
                d="M1.15 17.3h3.6V5.8h-3.6v11.5zM.75 2.1c0 1.2 1 2.1 2.1 2.1 1.2 0 2.1-.9 2.1-2.1 0-1.2-1-2.1-2.1-2.1-1.2 0-2.1 1-2.1 2.1zM14.45 17.3h3.6v-6.2c0-3.1-.7-5.5-4.3-5.5-1.8 0-2.9.9-3.4 1.8V5.8h-3.4v11.5h3.6v-5.7c0-1.5.2-2.9 2.1-2.9 1.8 0 1.8 1.7 1.8 3v5.6z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="block-title-and-content block-title-and-content__theme_white">
        <div className="block-title-and-content__layout">
          <h2 className="block-title-and-content__title">Patagonia </h2>
          <div className="block-title-and-content__content">
            <p className="block-title-and-content__item-inner_para">
              Patagonia, a beloved outdoor apparel and gear brand, is known for
              its commitment to sustainability. Its values are a major part of
              the brand identity, but if a shopper is buying a Patagonia sweater
              from REI or hat from Amazon, for example, those values don’t
              always necessarily come across.
              <br />
              <br />
              By collaborating with Patagonia to reimagine its e-commerce
              platform, BASIC/DEPT® created an easy-to-navigate, personalized,
              and purpose-led user experience. As part of the partnership, we
              also brought the brand’s Footprint Chronicles initiative to the
              site, implementing cards on product detail pages that educate
              shoppers on how products are made and their impact on the planet.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="article_video_wrapper">
        <div className="plyr plyr--full-ui plyr--video plyr--vimeo plyr--fullscreen-enabled plyr--paused">
          <div className="plyr__controls">
            <button
              className="plyr__control"
              aria-label="Play"
              data-plyr="play"
              aria-pressed="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                className="icon--not-pressed"
                role="presentation"
              >
                <path d="M11 15l4-2.5-4-2.5" fill="currentColor"></path>
                <path
                  d="M11 15l4-2.5-4-2.5v5z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <circle
                  cx="12.5"
                  cy="12.5"
                  r="11.5"
                  transform="rotate(-90 12.5 12.5)"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  fill="none"
                ></circle>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                className="icon--pressed"
                role="presentation"
              >
                <circle
                  cx="12.5"
                  cy="12.5"
                  r="11.5"
                  transform="rotate(-90 12.5 12.5)"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></circle>
                <path
                  d="M10 8v9M15 8v9"
                  stroke="currentColor"
                  stroke-width="1.5"
                ></path>
              </svg>
            </button>
          </div>
          <div className="plyr__video-wrapper plyr__video-embed">
            <div className="image__picture">
              <img
                src="https://www.deptagency.com/wp-content/uploads/2021/08/Footprint_Overview3-scaled.jpg"
                class="image full-width-image__image"
                loading="lazy"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="block-title-and-content block-title-and-content__theme_white">
        <div className="block-title-and-content__layout">
          <div className="block-title-and-content__content">
            <p className="block-title-and-content__item-inner_para">
              While it may seem counterintuitive to make consumers pause and
              reconsider their shopping habits just before potentially making a
              purchase, this element of friction has a much longer-term value.
              Although shoppers may have a more “out of sight, out of mind”
              experience shopping the brand’s products through other sellers,
              this thoughtful use of content-based friction utilizes the brand’s
              owned platform to showcase its values—prioritizing sustainability
              over sales—highlights their commitment to transparency, and builds
              trust with shoppers who increasingly want to see brands practice
              what they preach.
            </p>
          </div>
        </div>
      </div>
      <div className="image-wrap full-width-image__image-wrap">
        <div className="image__picture">
          <img
            src="https://www.deptagency.com/wp-content/uploads/2021/08/Footprint_Overview3-scaled.jpg"
            class="image full-width-image__image"
            loading="lazy"
          ></img>
        </div>
      </div>
      <div className="block-title-and-content">
        <div className="block-title-and-content__layout">
          <h2 className="block-title-and-content__title">Bicycle </h2>
          <div className="block-title-and-content__content">
            <p className="block-title-and-content__item-inner_para">
              For the average consumer, playing cards are a spur-of-the-moment
              purchase. Grabbing a deck from 7/11 on the way to a game night.
              Throwing a set in your Amazon shopping cart as you prep for family
              vacation.
              <br />
              <br />
              While most people probably aren’t going to a card brand’s website
              to buy a simple deck from, that doesn’t mean nobody is, or that
              site doesn’t serve other purposes.
              <br />
              <br />
              That’s why DEPT® and Bicycle Cards built the brand’s site to not
              just promote products but to celebrate its history and establish
              itself as a leader in playing cards. The site appeals to its most
              loyal and interested customers, including collectors, magicians,
              and design lovers.
            </p>
          </div>
        </div>
      </div>
      <div
        class="image-wrap full-width-image__image-wrap"
        data-align="center center"
      >
        <picture class="image__picture">
          <img
            src="https://www.deptagency.com/wp-content/uploads/2023/01/bicycle-playing-cards-website.jpg"
            class="image full-width-image__image"
            alt="bicycle playing cards website"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="block-title-and-content">
        <div className="block-title-and-content__layout">
          <div className="block-title-and-content__content">
            <p className="block-title-and-content__item-inner_para">
              Rather than display its most traditional (and likely most popular)
              decks front and center, the site highlights its limited edition
              decks, bundles, and new releases. It also features a vast library
              of content including articles and interviews, as well as gaming
              rules that users can search for by number of players, who is
              playing, and game type.
              <br />
              <br />
              While the site may not be the brand’s number one sales channel, it
              allows the brand to gather highly valuable data from those who do
              make purchases or simply browse its content. Even if visitors
              don’t make a purchase on the site, the platform’s focus on
              providing a helpful and entertaining experience to users helps
              ensure that when someone does need to buy cards—whether from a
              retail store or a third-party seller—they’ll think of the brand.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="block-title-and-content block-title-and-content__theme_white">
        <div className="block-title-and-content__layout">
          <h2 className="block-title-and-content__title">
            Memorable experiences over immediate conversion{" "}
          </h2>
          <div className="block-title-and-content__content">
            <p className="block-title-and-content__item-inner_para">
              Both Bicycle and Patagonia are examples of owned sites where
              conversion and sales are not always the primary metrics of
              success. Instead, delivering a unique and memorable experience
              takes precedence. By slowing down visitors with personalized
              content, storytelling, unique visuals, and purpose-driven
              initiatives, brands can gather deeper insights about their
              audience and use that information to drive sales through
              personalized communications, targeted ads, and retail media.
              <br />
              <br />
              In the world of <Link href={""}>DTC e-commerce</Link>, building
              brand recognition and loyalty is just as important as driving
              immediate sales. By embracing good friction and focusing on
              delivering unique experiences that users can’t get from other
              platforms, brands can create lasting connections with their
              audience.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
