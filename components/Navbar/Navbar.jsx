import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
function Navbar(props) {
  const { activeSection } = props;
  console.log(activeSection, "activeSection");
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(10);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 100;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 2 - backgroundTransparacyVar * 0.5;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);
  return (
    <div
      className={`fixed-top`}
      style={{
        background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <nav className={`container `}>
        <div className="row justify-content-between align-items-center">
          <div className="col-md-3">
            <img src="/logo.png" className={`img-fluid logo_icon`} />
          </div>
          <div
            className={`col-md-9 d-flex justify-content-end align-items-center ${styles.nav_container}`}
          >
            <ul className="d-flex justify-content-evenly">
              <li
                className={`${styles.nav_item} ${
                  activeSection === "home" ? styles.active : ""
                }`}
              >
                Home
              </li>
              <li
                className={`${styles.nav_item}  ${
                  activeSection === "services" ? styles.active : ""
                }`}
              >
                Services
              </li>
              <li
                className={`${styles.nav_item}  ${
                  activeSection === "contact_us" ? styles.active : ""
                }`}
              >
                Contact
              </li>
              <li
                className={`${styles.nav_item}  ${
                  activeSection === "projects" ? styles.active : ""
                }`}
              >
                Projects
              </li>
              <li
                className={`${styles.nav_item}  ${
                  activeSection === "carrers" ? styles.active : ""
                }`}
              >
                Careers
              </li>
            </ul>
          </div>
        </div>

        <style jsx>{`
          nav {
            padding: 20px;
          }
          ul {
            list-style: none;
            margin: 0px;
          }
          li {
            display: flex;
            justify-content: center;
            padding-left: 2rem;
          }
          .logo_icon {
            height: 50px;
          }
          .nav_container {
            display: flex;
          }
          @media (max-width: 520px) {
            .nav_container {
              display: none;
            }
          }
        `}</style>
      </nav>
    </div>
  );
}

export default Navbar;
