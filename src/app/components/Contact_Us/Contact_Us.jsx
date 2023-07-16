import Map from "../Map/map";
import styles from "./contact_us.module.css";
import { IoLocationSharp } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import { loadGoogleMaps } from "../Map/map";
import { useEffect } from "react";

function ContactUs(props) {
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const version = "weekly";
    const libraries = ["places"]; // Example: include the 'places' library

    loadGoogleMaps(apiKey, version, libraries)
      .then(() => {
        console.log("succedss");
        // Google Maps API loaded successfully
        // You can now use the Google Maps API here
        // For example, you can initialize the map or use other map-related functions
      })
      .catch((error) => {
        // Error loading Google Maps API
        console.log("Error loading Google Maps API:", error);
      });
  });
  return (
    <section className={`container mt-5 px-5`} id="contact_us">
      <h1 className="header  text-center">Contact Us</h1>
      <div className="row mt-5">
        <div className="col-md-6 mt-5">
          <div className="location">
            <p>
              <span>
                <IoLocationSharp size="2em" />
              </span>
              <span className="mx-3">Coimbatore</span>
            </p>
          </div>
          <div className="mail mt-4">
            <p>
              <span>
                <GrMail size="2em" />
              </span>
              <span className="mx-3">sales@beyox.in</span>
            </p>
          </div>
          <div className="map mt-5">
            {" "}
            {/* <Map address="1600 Amphitheatre Parkway, Mountain View, CA" /> */}
            <div id="map"></div>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="message" id="message" />
          <button className="">SUBMIT</button>
        </div>
      </div>
      <style jsx>{`
        input {
          padding: 15px;
          width: 100%;
          margin-top: 1.5em;
          border-radius: 25px;
          font-family: "Poppins";
          background-color: rgb(244, 244, 244);
          border: none;
        }
        #message {
          height: 100px;
        }
        button {
          padding: 10px;
          border-radius: 20px;
          border: none;
          width: 30%;
          margin-top: 1.5em;
          text-align: center;
          color: white;
          transition: transform 0.5s ease;
          background: linear-gradient(
            140deg,
            #037ce5 0%,
            #fc1340 48.3%,
            #fd8246 72.9%,
            #fabd00 100%
          );
        }
        button:hover {
        }
        .mapIcon {
          fill: url(#gradient);
        }
      `}</style>
    </section>
  );
}

export default ContactUs;
