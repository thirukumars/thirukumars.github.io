import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/Banner/Banner";
import Service from "../components/Services/Service";
import ContactUs from "../components/Contact_Us/Contact_Us";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const bannerSection = document.getElementById("home");
      const contactSection = document.getElementById("contact_us");
      const serviceSection = document.getElementById("services");
      console.log(
        bannerSection.offsetTop,
        serviceSection.offsetTop,
        contactSection.offsetTop,
        "section"
      );

      const scrollPosition = window.scrollY;
      console.log(scrollPosition, "scrollPostition");
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
    <div>
      <Head>
        <title>BEYOX</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Navbar activeSection={activeSection} />
      <main>
        <Banner />
        <Service />
        <ContactUs />
      </main>

      <Footer />

      <footer></footer>

      <style jsx>{`
        main {
          margin-top: 6rem;
        }
        footer {
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
