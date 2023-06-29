import styles from "./navbar.module.css";
function Navbar(props) {
  const { activeSection } = props;

  return (
    <div
      className={`fixed-top`}
      style={{
        background: `rgba(255, 255, 255, 0.9)`,
      }}
    >
      <nav className={`container `}>
        <div className="row justify-content-between align-items-center">
          <div className="col-md-3">
            <img src="/logo.png" className={`img-fluid logo_icon`} />
          </div>
          <div
            className={`col-md-9 d-none d-md-flex justify-content-end align-items-center ${styles.nav_container}`}
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
