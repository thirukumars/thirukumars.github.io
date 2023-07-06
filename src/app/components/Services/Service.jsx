import { useEffect, useState } from "react";
import styles from "./service.module.css";
function Service(props) {
  const handleScroll = () => {
    const contentElements = document.querySelectorAll(".scroll_content");
    console.log(contentElements, "contenElements");
    contentElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight * 0.8) {
        element.classList.add("appear");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className={`container mt-5`} id="services">
      <h1 className="header  text-center">Services</h1>
      <div className={`row d-flex flex-column-reverse flex-md-row`}>
        <div
          className={`col-md-6 bg-image d-flex justify-content-center align-items-center pt-5 pb-5 ${styles.col_background} scroll_content appear_from_left`}
        >
          <img
            src="/web_development.jpg"
            alt="service image"
            className={`img-fluid ${styles.service_img}`}
          />
        </div>
        <div
          className={`col-md-6  d-flex  flex-column justify-content-center justify-content-md-around align-items-center align-items-md-start px-5 scroll_content appear_from_right`}
        >
          <h1 className="text-xs-center text-start">Web Development</h1>
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
      <div className={`row d-flex flex-xs-column flex-md-row`}>
        <div className="col-md-6 d-flex flex-column justify-content-center justify-content-md-around align-items-center align-items-md-end text-end px-5 scroll_content appear_from_left">
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
          className={`col-md-6 bg-image d-flex justify-content-center align-items-center pt-5 pb-5 ${styles.col_background_2} scroll_content appear_from_right`}
        >
          <img
            src="/mobile_development.jpg"
            alt="service image"
            className={`img-fluid ${styles.service_img}`}
          />
        </div>
      </div>
      <div className={`row d-flex flex-column-reverse flex-md-row`}>
        <div
          className={`col-md-6 bg-image d-flex justify-content-center align-items-center pt-5 pb-5 ${styles.col_background} scroll_content appear_from_left`}
        >
          <img
            src="/web_development.jpg"
            alt="service image"
            className={`img-fluid ${styles.service_img}`}
          />
        </div>
        <div className="col-md-6  d-flex  flex-column justify-content-center justify-content-md-around align-items-center align-items-md-start px-5 scroll_content appear_from_right">
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
      <div className={`row d-flex flex-xs-column flex-md-row`}>
        <div className="col-md-6 d-flex flex-column justify-content-center justify-content-md-around align-items-center align-items-md-end text-end px-5 scroll_content appear_from_left">
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
          className={`col-md-6 bg-image d-flex justify-content-center align-items-center pt-5 pb-5 ${styles.col_background_3} scroll_content appear_from_right`}
        >
          <img
            src="/AI.jpg"
            alt="service image"
            className={`img-fluid ${styles.service_img}`}
          />
        </div>
      </div>
      <style jsx>{`
        .scroll_content {
          opacity: 0;
          transition: all 0.9s ease-in-out;
        }
        .appear_from_left {
          transform: translateX(-100%);
        }

        .appear_from_right {
          transform: translateX(100%);
        }

        .scroll_content.appear {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </section>
  );
}

export default Service;
