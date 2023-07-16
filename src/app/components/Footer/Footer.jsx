import styles from "./footer.module.css";
function Footer(props) {
  return (
    <>
      <footer className={`${styles.footer}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
              <img
                src="/logo.png"
                className={`img-fluid ${styles.logo_icon}`}
              />
            </div>
            <div
              className={`col-md-8 ${styles.wrapper} d-flex flex-column flex-md-row justify-content-around text-center text-md-start mt-5`}
            >
              <div
                className={`d-flex flex-column justify-content-around ${styles.quickLink}`}
              >
                <h2>Quick Links</h2>
                <p>Home</p>
                <p>Contact us</p>
                <p>About us</p>
                <p>Carrers</p>
              </div>
              <div className="d-flex flex-column justify-content-around">
                <h2>Contact Us</h2>
                <p>
                  Beyox, 87 kumaran street
                  <br />
                  15.Velampalayam
                  <br />
                  Tiruppur India, 641652
                </p>
                <p>+(91) 76039 63047</p>
                <p> sales@beyox.in</p>
              </div>
              <div className="d-flex flex-row flex-md-column  justify-content-between align-items-center">
                <span className="">
                  <img
                    src="/fb.png"
                    className={`img-fluid ${styles.social_icon}`}
                  />
                </span>
                <span className="">
                  <img
                    src="/insta.png"
                    className={`img-fluid ${styles.social_icon}`}
                  />
                </span>
                <span className="">
                  <img
                    src="/linkedin.png"
                    className={`img-fluid ${styles.social_icon}`}
                  />
                </span>
                <span className="">
                  <img
                    src="/tweet.png"
                    className={`img-fluid ${styles.social_icon}`}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-dark">
        <div className="container-xs-fluid  container text-light py-4">
          <div className="row">
            <div className="col-xs-12 col-md-8 my-3 ">
              &#169; 2023 BEYOX. All Rights Reserved.
            </div>
            <div className="col-xs-12 col-md-4 d-flex justify-content-between justify-content-md-around align-items-center">
              <span>Terms of use</span>
              <span>Privacy policy</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default Footer;
