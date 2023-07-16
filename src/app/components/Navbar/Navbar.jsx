"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
function Navbar(props) {
  const currentRoute = usePathname();
  const { activeSection } = props;
  console.log(activeSection, currentRoute, "activation props");
  const [navActive, setNavActive] = useState(false);
  return (
    <div
      className={`fixed-top`}
      style={{
        background: `rgba(255, 255, 255, 0.9)`,
      }}
    >
      <nav className={` container-md ${styles.nav_container}`}>
        <div className="row">
          <div className="d-flex align-items-center justify-content-center">
            <div className="col-xs-9 col-sm-9 col-md-6">
              <img
                src="/logo.png"
                className={`img-fluid ${styles.logo_icon}`}
              />
            </div>
            <div
              className={`col-md-6 d-none d-md-flex  align-items-center ${styles.nav_container}`}
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
            {!navActive ? (
              <div className="col-xs-6 col-sm-6 d-md-none">
                <GiHamburgerMenu
                  size="30px"
                  onClick={() => setNavActive(!navActive)}
                />
              </div>
            ) : (
              <div className="col-xs-6 col-sm-6 d-md-none">
                <GrClose size="30px" onClick={() => setNavActive(!navActive)} />
              </div>
            )}
          </div>
        </div>
        {navActive ? (
          <div className="navbar-sm text-center w-100">
            <div className="nav_item p-2" onClick={() => setNavActive(false)}>
              {" "}
              <Link style={{ textDecoration: "none", color: "black" }} href="/">
                Home
              </Link>
            </div>
            <div className="nav_item  p-2" onClick={() => setNavActive(false)}>
              {" "}
              <Link
                style={{ textDecoration: "none", color: "black" }}
                href="/about_us"
              >
                About Us
              </Link>
            </div>
            <div className="nav_item  p-2" onClick={() => setNavActive(false)}>
              {" "}
              <Link
                style={{ textDecoration: "none", color: "black" }}
                href="/careers"
              >
                Careers
              </Link>
            </div>
          </div>
        ) : null}
      </nav>
    </div>
  );
}

export default Navbar;
