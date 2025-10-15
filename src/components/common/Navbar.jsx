import React, { useRef, useState } from "react";
import style from "@/styles/navbar2.module.css";
import Link from "next/link";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import { useLenis } from "@studio-freight/react-lenis";
import Button from "./Button";
import gsap from "gsap";
import logoSrc from "../../../public/assets/rpsg-logo.png";
const Navbar = () => {
  //   const [logoSrc, setLogoSrc] = useState("/rpsg-logo.png");
  const [active, setActve] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  // const lenis = useLenis();

  const mainLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "ADVERTISING", href: "/advertising" },
    { name: "BRANDS", href: "/brand", insertMediaLinksAfter: true }, // 👈 marker
    { name: "CAREER", href: "/newsroom" },
    { name: "CONTACT", href: "/contact" },
  ];

  const mediaLinks = [
    { name: "Manifest", href: "" },
    { name: "The Hollywood Reporter", href: "" },
    { name: "Esquire, India", href: "" },
  ];

  const socialBlocks = [
    {
      name: "Media Kit",
      href: "",
      icons: [
        <FaInstagram key="ig" />,
        <FaFacebookF key="fb" />,
        <FaXTwitter key="x" />,
      ],
    },
    {
      name: "Media Kit",
      href: "",
      icons: [
        <FaInstagram key="ig" />,
        <FaFacebookF key="fb" />,
        <FaXTwitter key="x" />,
      ],
    },
    {
      name: "Media Kit",
      href: "",
      icons: [
        <FaInstagram key="ig" />,
        <FaFacebookF key="fb" />,
        <FaXTwitter key="x" />,
      ],
    },
  ];

  const allowed = [
    "ABOUT",
    "ADVERTISING",
    "BRANDS",
    "CAREER",
    "CONTACT",
  ];
  const openSidebar = () => {
    setIsOpen(true);
    // Stop Lenis scroll
    // lenis?.stop();
    // Prevent background scroll
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    // Animate overlay
    gsap.to(overlayRef.current, {
      duration: 0.3,
      autoAlpha: 1,
      backdropFilter: "blur(6px)",
      ease: "power2.out",
    });

    // Animate sidebar
    gsap.fromTo(
      sidebarRef.current,
      { x: "100%" },
      { x: "0%", duration: 0.4, ease: "power2.out" }
    );
  };
  const closeSidebar = () => {
    // Allow background scroll again
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    // Animate overlay out
    gsap.to(overlayRef.current, {
      duration: 0.3,
      autoAlpha: 0,
      backdropFilter: "blur(0px)",
      ease: "power2.inOut",
    });

    // Animate sidebar out
    gsap.to(sidebarRef.current, {
      x: "100%",
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setIsOpen(false);
        // lenis?.start(); // Resume scroll
      },
    });
  };
  return (
    <>
      {isOpen && (
        <div
          ref={overlayRef}
          className={style.Side_Menubar}
          onClick={closeSidebar}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        ></div>
      )}
      <div ref={sidebarRef} className={style.side_menuCntr}>
        <div className={style.btn_wrapper}>
          <button onClick={closeSidebar} className={style.close_btn}>
            <RxCross2 />
          </button>
        </div>

        <div className={style.sidebar_content}>
          <ul>
            {mainLinks.map((link, i) => (
              <React.Fragment key={i}>
                <li
                  className="list__item"
                  onClick={() => {
                    if (link.href && link.href !== "#") closeSidebar();
                  }}
                >
                  <Link
                    href={link.href}
                    className="btn btn--link text--color-text text--t2-bold btn--animated-content btn--cloned"
                  >
                    <Button>{link.name}</Button>
                  </Link>
                </li>

                {/* Insert mediaLinks right after "OUR BRANDS" */}
                {link.insertMediaLinksAfter && (
                  <div className={style.mediaLinks}>
                    <div className={style.socials_wrapper}>
                      {mediaLinks.map((item, index) => (
                        <span className="list__item" key={index}>
                          <Link
                            href={item.href}
                            className="btn btn--link text--color-text text--t2-bold btn--animated-content btn--cloned"
                          >
                            <Button>{item.name}</Button>
                          </Link>
                        </span>
                      ))}
                    </div>

                    {/* Repeating Social Blocks */}
                    <div className={style.socials_innercntr}>
                      {socialBlocks.map((block, index) => (
                        <div
                          className={style.socials_innercntr_wrap}
                          key={index}
                        >
                          <span className="list__item">
                            <Link
                              href={block.href}
                              className="btn btn--link text--color-text text--t2-bold btn--animated-content btn--cloned"
                            >
                              <Button>{block.name}</Button>
                            </Link>
                          </span>
                          <div className={style.socials}>
                            {block.icons.map((icon, idx) => (
                              <span key={idx}>{icon}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>

      <div className={style.navbar_wrapper2}>
        <Link href="/" className={style.logoCntr}>
          <Image
            src={logoSrc}
            width={200}
            height={50}
            priority
            alt="RPSG Media logo"
          />
        </Link>
        <div className={style.linksCntr}>
          <ul>
            {mainLinks
              .filter((item) => allowed.includes(item.name))
              .map((item, i) => (
                <li className="list__item" key={i}>
                  <Link
                    href={item.href}
                    className="btn btn--link text--color-text text--t2-bold btn--animated-content btn--cloned"
                  >
                    <Button>{item.name}</Button>
                  </Link>
                </li>
              ))}
          </ul>
          <div className={style.menulinesCntr}>
            <div className="three col" onClick={openSidebar}>
              <div className="hamburger" id="hamburger-6">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
