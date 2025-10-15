import React from "react";
import styles from "@/styles/Footer.module.css";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left Section */}
        <div className={styles.left}>
          <h2 className={styles.title}>Do it once. Do it right</h2>

          <div className={styles.info}>
            <p className={styles.label}>New Business:</p>
            <a href="mailto:info@rpsgmedia.com" className={styles.email}>
              info@rpsgmedia.com
            </a>
          </div>

          <div className={styles.newsletter}>
            <p>Sign up for our newsletter (No spam)</p>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.input}
              />
              <GoArrowUpRight className={styles.arrowIcon} />
            </div>
          </div>
        </div>

        {/* Center Links */}
        <div className={styles.right}>
            <div className={styles.rightfirstpart}>
        <div className={styles.center}>
          <ul>
            <li>About</li>
            <li>Brands</li>
            <li>Advertising</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </div>
          <div className={styles.social}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Instagram <GoArrowUpRight />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              LinkedIn <GoArrowUpRight />
            </a>
          </div>
</div>
        {/* Right Section */}
        <div >
        

          <div className={styles.address}>
            <p>301, HSBC Building,</p>
            <p>Pali Road, Bandra West,</p>
            <p>Mumbai - 400050</p>
          </div>

          <div className={styles.bottomRight}>
            <p>Terms of use</p>
            <p>@2025</p>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
