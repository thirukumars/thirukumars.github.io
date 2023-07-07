"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
function Navbar(props) {
  {
    /* Get the current route */
  }
  const currentRoute = usePathname();
  const { activeSection } = props;
  console.log(activeSection, currentRoute, "activation props");
  return (
    <div
      className={`fixed-top`}
      style={{
        background: `rgba(255, 255, 255, 0.9)`,
      }}
    >
      <nav className={`container ${styles.nav_container}`}>
        <div className="row justify-content-between align-items-center">
          <div className="col-md-3">
            <img src="/logo.png" className={`img-fluid ${styles.logo_icon}`} />
          </div>
          <div
            className={`col-md-9 d-none d-md-flex justify-content-end align-items-center ${styles.nav_container}`}
          >
            <ul className={`d-flex justify-content-evenly ${styles.navbar}`}>
              <li
                className={`${styles.nav_item} ${
                  activeSection === "home" && currentRoute === "/"
                    ? styles.active
                    : ""
                }`}
              >
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li
                className={`${styles.nav_item}  ${
                  activeSection === "services" && currentRoute === "/"
                    ? styles.active
                    : ""
                }`}
              >
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  href="/"
                >
                  Services
                </Link>
              </li>
              <li
                className={`${styles.nav_item}  ${
                  activeSection === "contact_us" && currentRoute === "/"
                    ? styles.active
                    : ""
                }`}
              >
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  href="/"
                >
                  Contact
                </Link>
              </li>
              <li
                className={`${styles.nav_item}  ${
                  currentRoute === "/about_us" ? styles.active : ""
                }`}
              >
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  href="/about_us"
                >
                  About us
                </Link>
              </li>
              <li
                className={`${styles.nav_item}  ${
                  currentRoute === "/careers" ? styles.active : ""
                }`}
              >
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  href="/careers"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <style jsx>{`
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
