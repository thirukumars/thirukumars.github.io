"use client";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import styles from "./layout.module.css";

function Layout({ children }: { children: any }) {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const bannerSection = document.getElementById("home");
      const contactSection = document.getElementById("contact_us");
      const serviceSection = document.getElementById("services");

      const scrollPosition = window.scrollY;
      if (bannerSection && contactSection && serviceSection) {
        if (
          scrollPosition >= bannerSection.offsetTop &&
          scrollPosition < serviceSection.offsetTop - 200
        ) {
          setActiveSection("home");
        } else if (
          scrollPosition >= serviceSection.offsetTop - 200 &&
          scrollPosition < contactSection.offsetTop - 200
        ) {
          setActiveSection("services");
        } else if (scrollPosition >= contactSection.offsetTop - 200) {
          setActiveSection("contact_us");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <div className={`${styles.main}`}>{children}</div>
      <Footer />
    </>
  );
}
export default Layout;
