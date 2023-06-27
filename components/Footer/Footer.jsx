import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
function Footer(props) {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex flex-column justify-content-between">
              <div>
                <img src="/logo.png" className={`img-fluid `} />
              </div>
              <div>
                <hr />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="col-md-3 d-flex flex-column justify-content-evenly">
              <h2>Lorem Ipsum</h2>
              <p>lorem ipsum</p>
              <p>lorem ipsum</p>
              <p>lorem ipsum</p>
              <p>lorem ipsum</p>
            </div>
            <div className="col-md-3  d-flex flex-column justify-content-evenly">
              <h2>Lorem Ipsum</h2>
              <p>lorem ipsum</p>
              <p>lorem ipsum</p>
              <p>lorem ipsum</p>
              <p>lorem ipsum</p>
            </div>
            <div className="col-md-2 d-flex flex-column  justify-content-evenly">
              <span>
                <BsFacebook size="2em" />
              </span>
              <span>
                <AiFillInstagram size="2em" />
              </span>
              <span>
                <TiSocialLinkedinCircular size="2em" />
              </span>
              <span>
                <AiFillTwitterCircle size="2em" />
              </span>
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
        `}</style>
      </footer>
      <div className="bg-dark">
        <div className="container d-flex justify-content-between text-light p-4">
          <div className="col-8">&#169; 2023 BEYOX. All Rights Reserved.</div>
          <div className="col-4 d-flex justify-content-around">
            <span>Terms of use</span>
            <span>Privacy policy</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
