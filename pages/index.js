import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/Banner/Banner";
import Service from "../components/Services/Service";
import ContactUs from "../components/Contact_Us/Contact_Us";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BEYOX</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Navbar />
        <Banner />
        <Service />
        <ContactUs />
        <Footer />
      </main>

      <footer></footer>

      <style jsx>{`
        main {
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
