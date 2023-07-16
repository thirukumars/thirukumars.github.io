"use client";
import React from "react";
import { IoGameController } from "react-icons/io5";
import { BsGoogle } from "react-icons/bs";
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
              className={`col-md-6  d-flex  flex-column justify-content-center justify-content-md-center align-items-center align-items-md-start px-5 scroll_content appear_from_right`}
            >
              <h1 className="text-xs-center text-start ">Our Vision</h1>
              <p className="mt-5">
                Our vision is to be a leading global software development
                company, recognized for our expertise, innovation, and
                unwavering commitment to excellence. We aspire to be at the
                forefront of technological advancements, shaping the future of
                software development. By building strong and lasting
                relationships with our clients, we aim to be their trusted
                partner in harnessing the power of technology to drive success
                and create a positive impact on businesses worldwide.
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
              className={`col-md-6  d-flex  flex-column justify-content-center justify-content-md-center align-items-center align-items-md-end px-5 scroll_content appear_from_right`}
            >
              <h1 className="text-xs-center text-start">Our mission</h1>
              <p className="mt-5">
                At Beyox, our mission is to empower businesses through
                innovative software solutions. We strive to deliver exceptional
                value to our clients by leveraging cutting-edge technologies,
                fostering creativity, and providing unparalleled customer
                service. We are dedicated to driving digital transformation,
                enhancing efficiency, and helping our clients achieve their
                business goals.
              </p>
            </div>
          </div>
        </div>
        <div className="cards_wrapper">
          {/* <div className="row">
            <div className="col-md-4 text-center">
              <IoGameController size={100} />
              <h5>creative web design</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                sit soluta saepe praesentium magnam dolor nostrum repellat.
                Magni iusto id
              </p>
            </div>
            <div className="col-md-4 text-center">
              <IoGameController size={100} />
              <h5>user friendly tools</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                sit soluta saepe praesentium magnam dolor nostrum repellat.
                Magni iusto id
              </p>
            </div>{" "}
            <div className="col-md-4 text-center">
              <IoGameController size={100} />
              <h5>web development</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                sit soluta saepe praesentium magnam dolor nostrum repellat.
                Magni iusto id
              </p>
            </div>
          </div> */}
          <div className="row">
            <div className="col-md-4 text-center">
              <IoGameController size={100} />
              <h5 className="mt-3">Innovation Driven Approach</h5>
              <p>
                Innovation is at the core of what we do. We stay ahead of the
                curve by continuously exploring the latest advancements in AI
                technology. By leveraging state-of-the-art tools and frameworks,
                we develop intelligent applications that give your business a
                competitive edge in the rapidly evolving digital landscape.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <IoGameController size={100} />
              <h5 className="mt-3">Tailoured Solutions</h5>
              <p>
                We understand that every business is unique, and we take pride
                in crafting bespoke AI solutions that align with your goals and
                objectives. Our team works closely with you to analyze your
                requirements, identify opportunities, and create customized
                software that enhances your efficiency, accuracy, and
                decision-making processes.
              </p>
            </div>{" "}
            <div className="col-md-4 text-center">
              <IoGameController size={100} />
              <h5 className="mt-3">AI Expertise</h5>
              <p>
                With deep expertise in AI development, our team of seasoned
                professionals is adept at developing cutting-edge AI solutions
                tailored to your specific needs. From machine learning
                algorithms to natural language processing and computer vision,
                we have the knowledge and skills to build intelligent systems
                that deliver tangible results.
              </p>
            </div>
          </div>
        </div>
        <div className="clients_wrapper text-center mt-4">
          <h1>Technology we specailized</h1>
          <p className="mt-4">
            At <b>Beyox</b>, we are leaders in harnessing cutting-edge
            technologies to drive innovation and transformation. Our expertise
            spans artificial intelligence, blockchain, cloud computing, and IoT.
            With deep technical knowledge and a commitment to staying ahead of
            the curve, we specialize in delivering customized solutions that
            empower businesses to thrive in the digital age.
          </p>
          <div className="row mt-5">
            <div className="col-xs-12  col-sm-6 col-md-4 ">
              <img
                src="/client/windows.png"
                className={`img-fluid ${styles.icons}`}
              />
            </div>
            <div className="col-xs-12  col-sm-6 col-md-4 my-4">
              <img
                src="/client/google_icons.png"
                className={`img-fluid ${styles.icons}`}
              />
            </div>
            <div className="col-xs-12  col-sm-6 col-md-4">
              <img
                src="/client/aws_icons.png"
                className={`img-fluid ${styles.icons}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_Us;
