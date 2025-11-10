import React from "react";
import Link from "next/link";
import {
  IoArrowBackCircle,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoFacebook,
} from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { BsWhatsapp, BsLink45Deg } from "react-icons/bs";

const NewsArticle = () => {
  return (
    <div className="main_section_news_article">
      {/* Header */}
      <div className="block-article-post-header">
        <div className="article_cta-button">
          <Link href="/newsroom" className="article_cta-buttonInner">
            <IoArrowBackCircle />
            <span>Back to all articles</span>
          </Link>
        </div>
    
        <h2 className="block-article-post-header__title">
          The power of good friction: Two brands pioneering brand recognition &
          loyalty through e-commerce
        </h2>

        <div className="image-wrap block-article-post-header__image-wrap">
          <img
            src="https://www.deptagency.com/wp-content/uploads/2024/07/5-1200x670-1.png"
            className="image block-article-post-header__image"
            alt="Good Friction Article"
            loading="lazy"
          />
        </div>

        <div className="author block-article-post-header__author">
          <img
            className="author__portrait"
            src="https://www.deptagency.com/wp-content/uploads/2023/12/MariaProkoheadshot-e1701966883394-150x150.jpg"
            alt="Maria Prokopowicz"
          />
          <div className="author__text">
            Maria Prokopowicz <br /> Content Marketing Manager
          </div>
        </div>

        <div className="block-article-post-header__meta">
          <div className="block-article-post-header__meta-length">
            <div className="block-article-post-header__length-description">
              Length
            </div>
            <div className="block-article-post-header__length-time">
              5 min read
            </div>
          </div>
          <div className="block-article-post-header__meta-date">
            <div className="block-article-post-header__date-description">
              Date
            </div>
            <div className="block-article-post-header__published-date">
              2 July 2024
            </div>
          </div>
        </div>
      </div>

      {/* Statement */}
      <div className="block-statement">
        <p className="block-statement__title">
          In marketing and UX, friction might as well be a curse word.
          Slow-loading pages, obnoxious form pop-ups, or a seven-step checkout
          process? Forget about it.
          <br />
          <br />
          But sometimes, there is such a thing as “good friction.”
          <br />
          <br />
          Friction, when used strategically, can be a powerful tool to slow down
          visitors, create meaningful interactions, and reinforce a customer’s
          decision to buy from your brand.
        </p>
      </div>

      {/* Section 1 */}
      <div className="block-title-and-content">
        <div className="block-title-and-content__layout">
          <h2 className="block-title-and-content__title">
            Deprioritizing friction on your DTC site
          </h2>
          <div className="block-title-and-content__content">
            <p className="block-title-and-content__item-inner_para">
              Sure, your DTC site needs a relatively frictionless user
              experience. Easy navigation, a simple checkout process, a clear
              customer journey, connected channels, and responsive customer
              service. Who hasn’t heard thatany frictionin the customer journey
              will send consumers running?
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

        {/* Social Share Icons */}
        <div className="block-title-and-content__social-links">
          <Link href="#" className="block-title-and-content__social-links-item">
            <BsLink45Deg />
          </Link>
          <Link href="#" className="block-title-and-content__social-links-item">
            <FaFacebookF />
          </Link>
          <Link href="#" className="block-title-and-content__social-links-item">
            <IoLogoTwitter />
          </Link>
          <Link href="#" className="block-title-and-content__social-links-item">
            <IoLogoInstagram />
          </Link>
          <Link href="#" className="block-title-and-content__social-links-item">
            <FaLinkedinIn />
          </Link>
          <Link href="#" className="block-title-and-content__social-links-item">
            <BsWhatsapp />
          </Link>
        </div>
      </div>

      {/* Patagonia */}
      <div className="block-title-and-content block-title-and-content__theme_white">
        <div className="block-title-and-content__layout">
          <h2 className="block-title-and-content__title">Patagonia</h2>
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
            </p>
          </div>
        </div>
      </div>

      {/* Image + Video Placeholder */}
      <div className="article_video_wrapper">
        <div className="image__picture">
          <img
            src="https://www.deptagency.com/wp-content/uploads/2021/08/Footprint_Overview3-scaled.jpg"
            className="image full-width-image__image"
            alt="Patagonia Story"
            loading="lazy"
          />
        </div>
      </div>

      {/* Continued Text */}
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

      {/* Full-width Image */}
      <div className="image-wrap full-width-image__image-wrap">
        <img
          src="https://www.deptagency.com/wp-content/uploads/2021/08/Footprint_Overview3-scaled.jpg"
          className="image full-width-image__image"
          alt="Patagonia Overview"
          loading="lazy"
        />
      </div>

      {/* Bicycle Section */}
      <div className="block-title-and-content">
        <div className="block-title-and-content__layout">
          <h2 className="block-title-and-content__title">Bicycle</h2>
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

      <div className="image-wrap full-width-image__image-wrap">
        <img
          src="https://www.deptagency.com/wp-content/uploads/2023/01/bicycle-playing-cards-website.jpg"
          className="image full-width-image__image"
          alt="Bicycle Cards Website"
          loading="lazy"
        />
      </div>
      {/* Bicycle Section */}
      <div className="block-title-and-content">
        <div className="block-title-and-content__layout">
          <h2 className="block-title-and-content__title">Bicycle</h2>
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
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="block-title-and-content block-title-and-content__theme_white">
        <div className="block-title-and-content__layout">
          <h2 className="block-title-and-content__title">
            Memorable experiences over immediate conversion
          </h2>
          <div className="block-title-and-content__content">
            <p className="block-title-and-content__item-inner_para">
             Both Bicycle and Patagonia are examples of owned sites where conversion and sales are not always the primary metrics of success. Instead, delivering a unique and memorable experience takes precedence. By slowing down visitors with personalized content, storytelling, unique visuals, and purpose-driven initiatives, brands can gather deeper insights about their audience and use that information to drive sales through personalized communications, targeted ads, and retail media.

              <br />
              <br />
              In the world of <Link href="#">DTC e-commerce</Link>, building brand recognition and loyalty is just as important as driving immediate sales. By embracing good friction and focusing on delivering unique experiences that users can’t get from other platforms, brands can create lasting connections with their audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
