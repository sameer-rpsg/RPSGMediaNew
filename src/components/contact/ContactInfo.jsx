// import React from "react";
// import styles from "@/components/contact/Contact.module.css";
// import Link from "next/link";
// const ContactInfo = () => {
//   return (
//     <div className={styles.contact_informations}>
//       <div className={styles.contact_informations__item}>
//         <div className={`${styles.first} ${styles.rich}`}>
//           <p>Get In Touch</p>
//         </div>
//         <div className={styles.ContactInfo_wrapper}>
//           <div className={`${styles.second} ${styles.rich}`}>
//             <p>New Business.</p>
//             <p>info@rpsgmedia.com</p>
//           </div>
//           <div className={styles.third}>
//             <div className={styles.rich}>
//               <p>Join the Team</p>
//               <p>info@rpsgmedia.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.contact_informations__item}>
//         <div className={styles.split}></div>
//         <div className={`${styles.first} ${styles.rich}`}>
//           <p>Mumbai, India</p>
//         </div>
//         <div className={styles.ContactInfo_wrapper}>
//           <div className={`${styles.second} ${styles.rich}`}>
//             <p>301, HSBC Building, Pali Road, Bandra West, Mumbai - 400050</p>
//           </div>
//           <div className={styles.third}>
//             <div className={styles.rich}>
//               <p><Link href="tel:+91 7738802437">+91 7738802437</Link></p>
//               <p><Link href="tel:+91 7738802437">+91 7738802437</Link></p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.contact_informations__item}>
//         <div className={styles.split}></div>
//         <div className={`${styles.first} ${styles.rich}`}>
//           <p>New Delhi, India</p>
//         </div>
//         <div className={styles.ContactInfo_wrapper}>
//           <div className={`${styles.second} ${styles.rich}`}>
//             <p>301, HSBC Building, Pali Road, Bandra West, Mumbai - 400050</p>
//           </div>
//           <div className={styles.third}>
//             <div className={styles.rich}>
//               <p><Link href="tel:+91 7738802437">+91 7738802437</Link></p>
//               <p><Link href="tel:+91 7738802437">+91 7738802437</Link></p>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ContactInfo;

import React from "react";
import styles from "@/components/contact/Contact.module.css";
import Link from "next/link";
import FadeSpan from "../common/FadeSpan";

const ContactInfo = () => {
  const contactSections = [
    {
      title: "Get In Touch",
      items: [
        { label: "New Business.", value: "info@rpsgmedia.com" },
        { label: "Join the Team", value: "info@rpsgmedia.com" },
      ],
    },
    {
      title: "Mumbai, India",
      address: "301, HSBC Building, Pali Road, Bandra West, Mumbai - 400050",
      phones: ["+91 7738802437", "+91 7738802437"],
    },
    {
      title: "New Delhi, India",
      address: "301, HSBC Building, Pali Road, Bandra West, Mumbai - 400050",
      phones: ["+91 7738802437", "+91 7738802437"],
    },
  ];

  return (
      <FadeSpan delay={400}>
    <div className={styles.contact_informations}>
      {contactSections.map((section, index) => (
          <div key={index} className={styles.contact_informations__item}>
            {index !== 0 && <div className={styles.split}></div>}

            <div className={`${styles.first} ${styles.rich}`}>
              <p>{section.title}</p>
            </div>

            <div className={styles.ContactInfo_wrapper}>
              {/* For the “Get In Touch” section */}
              {section.items &&
                section.items.map((item, i) => (
                  <div
                    key={i}
                    className={`${i === 0 ? styles.second : styles.third} ${
                      styles.rich
                    }`}
                  >
                    <p>{item.label}</p>
                    <p>{item.value}</p>
                  </div>
                ))}

              {/* For the “City” sections */}
              {section.address && (
                <>
                  <div className={`${styles.second} ${styles.rich}`}>
                    <p>{section.address}</p>
                  </div>
                  <div className={styles.third}>
                    <div className={styles.rich}>
                      {section.phones.map((phone, i) => (
                        <p key={i}>
                          <Link href={`tel:${phone.replace(/\s+/g, "")}`}>
                            {phone}
                          </Link>
                        </p>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
      ))}
    </div>
      </FadeSpan>
  );
};

export default ContactInfo;
