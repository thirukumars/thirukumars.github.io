import Image from "next/image";
import React from "react";
import { IoGameController } from "react-icons/io5";
import styles from "./about.module.css";

function About_Us(props: any) {
  return (
    <div className={`wrapper`}>
      <div className={`${styles.about_us_banner}`}></div>
      <div className="container mt-5">
        <div className="about_us_wrapper">
          <h1 className="text-center">About us</h1>
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
              <h1 className="text-xs-center text-start">Our Vision</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis nostrum recusandae non numquam veritatis possimus
                adipisci maxime, debitis temporibus laudantium hic, culpa
                sapiente quae. Eum delectus eligendi eos commodi consectetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis nostrum recusandae non numquam veritatis possimus
                adipisci maxime, debitis temporibus laudantium hic, culpa
                sapiente quae. Eum delectus eligendi eos commodi consectetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis nostrum recusandae non numquam veritatis possimus
                adipisci maxime, debitis temporibus laudantium hic, culpa
                sapiente quae. Eum delectus eligendi eos commodi consectetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis nostrum recusandae non numquam veritatis possimus
                adipisci maxime, debitis temporibus laudantium hic, culpa
                sapiente
              </p>
            </div>
          </div>
          <div className={`row d-flex flex-column-reverse flex-md-row-reverse`}>
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
              className={`col-md-6  d-flex  flex-column justify-content-center justify-content-md-around align-items-center align-items-md-end px-5 scroll_content appear_from_right`}
            >
              <h1 className="text-xs-center text-start">Our mission</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis nostrum recusandae non numquam veritatis possimus
                adipisci maxime, debitis temporibus laudantium hic, culpa
                sapiente quae. Eum delectus eligendi eos commodi consectetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis nostrum recusandae non numquam veritatis possimus
                adipisci maxime, debitis temporibus laudantium hic, culpa
                sapiente quae. Eum delectus eligendi eos commodi consectetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis nostrum recusandae non numquam veritatis possimus
                adipisci maxime, debitis temporibus laudantium hic, culpa
                sapiente quae. Eum delectus eligendi eos commodi consectetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis nostrum recusandae non numquam veritatis possimus
                adipisci maxime, debitis temporibus laudantium hic, culpa
                sapiente
              </p>
            </div>
          </div>
        </div>
        <div className="cards_wrapper">
          <div className="row">
            <div className="col text-center">
              <IoGameController size={100} />
              <h5>creative web design</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                sit soluta saepe praesentium magnam dolor nostrum repellat.
                Magni iusto id
              </p>
            </div>
            <div className="col text-center">
              <IoGameController size={100} />
              <h5>user friendly tools</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                sit soluta saepe praesentium magnam dolor nostrum repellat.
                Magni iusto id
              </p>
            </div>{" "}
            <div className="col text-center">
              <IoGameController size={100} />
              <h5>web development</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                sit soluta saepe praesentium magnam dolor nostrum repellat.
                Magni iusto id
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <IoGameController size={100} />
              <h5>creative web design</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                sit soluta saepe praesentium magnam dolor nostrum repellat.
                Magni iusto id
              </p>
            </div>
            <div className="col text-center">
              <IoGameController size={100} />
              <h5>creative web design</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                sit soluta saepe praesentium magnam dolor nostrum repellat.
                Magni iusto id
              </p>
            </div>{" "}
            <div className="col text-center">
              <IoGameController size={100} />
              <h5>creative web design</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                sit soluta saepe praesentium magnam dolor nostrum repellat.
                Magni iusto id
              </p>
            </div>
          </div>
        </div>
        <div className="clients_wrapper text-center">
          <h1>Client really loves us</h1>
          <p>
            Far far away, behind the word mountains, far from the countries USA{" "}
            <br />
            and Canada, there live the blind texts.
          </p>
          <div className="row">
            <div className="col">
              <Image
                src="/client/client-1.jpg"
                alt="client_1"
                width={300}
                height={150}
              />
            </div>
            <div className="col">
              <Image
                src="/client/client_2.jpg"
                alt="client_1"
                width={300}
                height={150}
              />
            </div>
            <div className="col">
              <Image
                src="/client/client_3.jpg"
                alt="client_1"
                width={300}
                height={150}
              />
            </div>
            <div className="col">
              <Image
                src="/client/client_4.jpg"
                alt="client_1"
                width={300}
                height={150}
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="col">
              <Image
                src="/client/client_4.jpg"
                alt="client_1"
                width={300}
                height={150}
              />
            </div>
            <div className="col">
              <Image
                src="/client/client_3.jpg"
                alt="client_1"
                width={300}
                height={150}
              />
            </div>
            <div className="col">
              <Image
                src="/client/client_2.jpg"
                alt="client_1"
                width={300}
                height={150}
              />
            </div>

            <div className="col">
              <Image
                src="/client/client-1.jpg"
                alt="client_1"
                width={300}
                height={150}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Image
                src="/client/client-1.jpg"
                alt="client_1"
                width={300}
                height={150}
              />
            </div>
            <div className="col">
              <Image
                src="/client/client_2.jpg"
                alt="client_1"
                width={300}
                height={150}
              />
            </div>
            <div className="col">
              <Image
                src="/client/client_3.jpg"
                alt="client_1"
                width={300}
                height={150}
              />
            </div>
            <div className="col">
              <Image
                src="/client/client_4.jpg"
                alt="client_1"
                width={300}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_Us;
