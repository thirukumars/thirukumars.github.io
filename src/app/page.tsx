"use client";
import Head from "next/head";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Service from "./components/Services/Service";
import ContactUs from "./components/Contact_Us/Contact_Us";
import Footer from "./components/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BEYOX</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Banner />
        <Service />
        <ContactUs />
      </main>
    </div>
  );
}
