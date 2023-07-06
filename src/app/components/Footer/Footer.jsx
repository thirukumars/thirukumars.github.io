function Footer(props) {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 d-flex flex-column justify-content-between text-center text-md-start">
              <div>
                <img src="/logo.png" className={`img-fluid logo_icon`} />
              </div>
              <div>
                <hr />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="col-md-8 wrapper d-flex flex-column flex-md-row justify-content-around text-center text-md-start">
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
              <div className="d-flex flex-row flex-md-column  justify-content-between align-items-center">
                <span className="">
                  <img src="/fb.png" className={`img-fluid social_icon`} />
                </span>
                <span className="">
                  <img src="/insta.png" className={`img-fluid social_icon`} />
                </span>
                <span className="">
                  <img
                    src="/linkedin.png"
                    className={`img-fluid social_icon`}
                  />
                </span>
                <span className="">
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
            cursor: pointer;
          }
          span {
            cursor: pointer;
          }
        `}</style>
      </footer>
      <div className="bg-dark">
        <div className="container-fluid text-light p-4">
          <div className="row  px-5">
            <div className="col-md-8 my-3 ">
              &#169; 2023 BEYOX. All Rights Reserved.
            </div>
            <div className="col-md-4 d-flex justify-content-between justify-content-md-around align-items-center">
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
