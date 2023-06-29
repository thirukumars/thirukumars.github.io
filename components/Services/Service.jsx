import styles from "./service.module.css";
function Service(props) {
  return (
    <section className={`container mt-5`} id="services">
      <h1 className="header  text-center">Services</h1>
      <div className="row">
        <div
          className={`col-md-6 bg-image d-flex justify-content-center align-items-center pt-5 pb-5 ${styles.col_background}`}
        >
          <img
            src="/web_development.jpg"
            alt="service image"
            className={`img-fluid ${styles.service_img}`}
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-around align-items-start px-5">
          <h1>Web Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            nostrum recusandae non numquam veritatis possimus adipisci maxime,
            debitis temporibus laudantium hic, culpa sapiente quae. Eum delectus
            eligendi eos commodi consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Blanditiis nostrum recusandae non
            numquam veritatis possimus adipisci maxime, debitis temporibus
            laudantium hic, culpa sapiente quae. Eum delectus eligendi eos
            commodi consectetur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis nostrum recusandae non numquam
            veritatis possimus adipisci maxime, debitis temporibus laudantium
            hic, culpa sapiente quae. Eum delectus eligendi eos commodi
            consectetur. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Blanditiis nostrum recusandae non numquam veritatis possimus
            adipisci maxime, debitis temporibus laudantium hic, culpa sapiente
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-around align-items-end text-end px-5 ">
          <h1>Mobile Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            nostrum recusandae non numquam veritatis possimus adipisci maxime,
            debitis temporibus laudantium hic, culpa sapiente quae. Eum delectus
            eligendi eos commodi consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Blanditiis nostrum recusandae non
            numquam veritatis possimus adipisci maxime, debitis temporibus
            laudantium hic, culpa sapiente quae. Eum delectus eligendi eos
            commodi consectetur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis nostrum recusandae non numquam
            veritatis possimus adipisci maxime, debitis temporibus laudantium
            hic, culpa sapiente quae. Eum delectus eligendi eos commodi
            consectetur. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Blanditiis nostrum recusandae non numquam veritatis possimus
            adipisci maxime, debitis temporibus laudantium hic, culpa sapiente
          </p>
        </div>
        <div
          className={`col-md-6 bg-image d-flex justify-content-center align-items-center pt-5 pb-5 ${styles.col_background_2}`}
        >
          <img
            src="/mobile_development.jpg"
            alt="service image"
            className={`img-fluid ${styles.service_img}`}
          />
        </div>
      </div>
      <div className="row">
        <div
          className={`col-md-6 bg-image d-flex justify-content-center align-items-center pt-5 pb-5 ${styles.col_background}`}
        >
          <img
            src="/web_development.jpg"
            alt="service image"
            className={`img-fluid ${styles.service_img}`}
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-around align-items-start px-5">
          <h1>Blockchain Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            nostrum recusandae non numquam veritatis possimus adipisci maxime,
            debitis temporibus laudantium hic, culpa sapiente quae. Eum delectus
            eligendi eos commodi consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Blanditiis nostrum recusandae non
            numquam veritatis possimus adipisci maxime, debitis temporibus
            laudantium hic, culpa sapiente quae. Eum delectus eligendi eos
            commodi consectetur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis nostrum recusandae non numquam
            veritatis possimus adipisci maxime, debitis temporibus laudantium
            hic, culpa sapiente quae. Eum delectus eligendi eos commodi
            consectetur. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Blanditiis nostrum recusandae non numquam veritatis possimus
            adipisci maxime, debitis temporibus laudantium hic, culpa sapiente
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-around align-items-end text-end px-5 ">
          <h1>Branding Consultancy</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            nostrum recusandae non numquam veritatis possimus adipisci maxime,
            debitis temporibus laudantium hic, culpa sapiente quae. Eum delectus
            eligendi eos commodi consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Blanditiis nostrum recusandae non
            numquam veritatis possimus adipisci maxime, debitis temporibus
            laudantium hic, culpa sapiente quae. Eum delectus eligendi eos
            commodi consectetur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis nostrum recusandae non numquam
            veritatis possimus adipisci maxime, debitis temporibus laudantium
            hic, culpa sapiente quae. Eum delectus eligendi eos commodi
            consectetur. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Blanditiis nostrum recusandae non numquam veritatis possimus
            adipisci maxime, debitis temporibus laudantium hic, culpa sapiente
          </p>
        </div>
        <div
          className={`col-md-6 bg-image d-flex justify-content-center align-items-center pt-5 pb-5 ${styles.col_background_3}`}
        >
          <img
            src="/AI.jpg"
            alt="service image"
            className={`img-fluid ${styles.service_img}`}
          />
        </div>
      </div>
    </section>
  );
}

export default Service;
