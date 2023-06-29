import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
function Footer(props) {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 d-flex flex-column justify-content-between">
              <div>
                <img src="/logo.png" className={`img-fluid logo_icon`} />
              </div>
              <div>
                <hr />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="col-md-8 wrapper d-flex justify-content-around text-start">
              <div className="d-flex flex-column justify-content-evenly">
                <h2>Lorem Ipsum</h2>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
              </div>
              <div className="d-flex flex-column justify-content-evenly">
                <h2>Lorem Ipsum</h2>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
              </div>
              <div className="d-flex flex-column  justify-content-evenly">
                <span className="mx-4">
                  <img src="/fb.png" className={`img-fluid social_icon`} />
                </span>
                <span className="mx-4">
                  <img src="/insta.png" className={`img-fluid social_icon`} />
                </span>
                <span className="mx-4">
                  <img
                    src="/linkedin.png"
                    className={`img-fluid social_icon`}
                  />
                </span>
                <span className="mx-4">
                  <img src="/tweet.png" className={`img-fluid social_icon`} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          footer {
            background-color: rgb(242, 242, 242);
            font-family: "Poppins";
            padding: 50px;
            margin-top: 3rem;
          }
          .logo_icon {
            height: 80px;
          }
          .wrapper h2 {
            margin-bottom: 2rem;
          }
          .social_icon {
            width: 40px;
            height: 40px;
          }
        `}</style>
      </footer>
      <div className="bg-dark">
        <div className="container-fluid text-light p-4">
          <div className="row  px-5">
            <div className="col-8">&#169; 2023 BEYOX. All Rights Reserved.</div>
            <div className="col-4 d-flex justify-content-around">
              <span>Terms of use</span>
              <span>Privacy policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
