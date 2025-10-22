import React from "react";
import styles from "@/components/contact/Contact.module.css";
import Link from "next/link";
const ContactInfo = () => {
  return (
    <div className={styles.contact_informations}>
      <div className={styles.contact_informations__item}>
        <div className={`${styles.first} ${styles.rich}`}>
          <p>Get In Touch</p>
        </div>
        <div className={styles.ContactInfo_wrapper}>
          <div className={`${styles.second} ${styles.rich}`}>
            <p>New Business.</p>
            <p>info@rpsgmedia.com</p>
          </div>
          <div className={styles.third}>
            <div className={styles.rich}>
              <p>Join the Team</p>
              <p>info@rpsgmedia.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contact_informations__item}>
        <div className={styles.split}></div>
        <div className={`${styles.first} ${styles.rich}`}>
          <p>Mumbai, India</p>
        </div>
        <div className={styles.ContactInfo_wrapper}>
          <div className={`${styles.second} ${styles.rich}`}>
            <p>301, HSBC Building, Pali Road, Bandra West, Mumbai - 400050</p>
          </div>
          <div className={styles.third}>
            <div className={styles.rich}>
              <p><Link href="tel:+91 7738802437">+91 7738802437</Link></p>
              <p><Link href="tel:+91 7738802437">+91 7738802437</Link></p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contact_informations__item}>
        <div className={styles.split}></div>
        <div className={`${styles.first} ${styles.rich}`}>
          <p>New Delhi, India</p>
        </div>
        <div className={styles.ContactInfo_wrapper}>
          <div className={`${styles.second} ${styles.rich}`}>
            <p>301, HSBC Building, Pali Road, Bandra West, Mumbai - 400050</p>
          </div>
          <div className={styles.third}>
            <div className={styles.rich}>
              <p><Link href="tel:+91 7738802437">+91 7738802437</Link></p>
              <p><Link href="tel:+91 7738802437">+91 7738802437</Link></p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default ContactInfo;
