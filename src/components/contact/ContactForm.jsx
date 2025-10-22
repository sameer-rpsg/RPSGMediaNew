// import React from "react";
// import styles from "@/components/contact/Contact.module.css";

// const ContactForm = () => {
//   return (
//     <section className={styles.contactSection}>
//       <div className={styles.left}>
//         <h2 className={styles.heading}>Write to us!</h2>
//       </div>

//       <div className={styles.right}>
//         <form className={styles.form}>
//           <div className={styles.formGroup}>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Name"
//               required
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <input
//               type="text"
//               id="company"
//               name="company"
//               placeholder="Company"
//               required
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Email"
//               required
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               placeholder="Phone Number"
//               required
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <input
//               type="text"
//               id="comment"
//               name="comment"
//               placeholder="Comment (Optional)"
//             />
//           </div>

//           <div className={styles.terms}>
//             <p>
//               By clicking the Submit button,
//               <br />
//               you agree to our <a href="#">Privacy Policy</a> terms
//             </p>
//           </div>

//           <button type="submit" className={styles.submit}>
//             Submit ↗
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;

"use client";
import React, { useState } from "react";
import styles from "@/components/contact/Contact.module.css";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactSection_left}>
        <h2>Write to us!</h2>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label className={formData.name ? styles.active : ""}>Name</label>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          <label className={formData.company ? styles.active : ""}>
            Company
          </label>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className={formData.email ? styles.active : ""}>Email</label>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <label className={formData.phone ? styles.active : ""}>
            Phone Number
          </label>
        </div>
        <div className={styles.inputGroup}>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows="1"
          />
          <label className={formData.comment ? styles.active : ""}>
            Comment (Optional)
          </label>
        </div>
        <div className={styles.ContactForm_bottomSubmitWrapper}>
          <p className={styles.terms}>
            By clicking the Submit button,
            <br />
            you agree to our <a href="#">Privacy Policy</a> terms
          </p>

          <button type="submit" className={styles.submitBtn}>
            <Link
              href="/services"
              className="b-arrow underlined link-active-full-small"
            >
              <span className="icon icon-b">
                <GoArrowUpRight />
              </span>
              <span className="content_more">Submit</span>
              <span className="icon icon-a">
                <GoArrowUpRight />
              </span>
            </Link>
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
