import { useEffect, useState } from "react";
import styles from "./service.module.css";
function Service(props) {
  const handleScroll = () => {
    const contentElements = document.querySelectorAll(".scroll_content");
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
            Our expertise lies in building modern and responsive web
            applications using the latest frameworks and technologies. We
            prioritize user-friendliness, captivating design, and optimal
            performance to ensure exceptional user experiences. With a focus on
            delivering visually appealing websites, we create engaging digital
            platforms that leave a lasting impact. Our team's proficiency in
            cutting-edge technologies allows us to craft web applications that
            are tailored to your specific needs and goals. From intuitive
            interfaces to seamless functionality, we create user-friendly web
            experiences that drive results. Trust us to transform your ideas
            into visually stunning and high-performing web applications. Stay
            ahead in the digital realm with our expertise in web application
            development. Let's bring your vision to life and leave a memorable
            impression on the web.
          </p>
        </div>
      </div>
      <div className={`row d-flex flex-xs-column flex-md-row`}>
        <div className="col-md-6 d-flex flex-column justify-content-center justify-content-md-around align-items-center align-items-md-end text-start px-5 scroll_content appear_from_left">
          <h1>Mobile Development</h1>
          <p>
            From iOS to Android, we craft captivating native and cross-platform
            mobile apps. Our expert team harnesses the power of mobile
            technology to create feature-rich experiences that cater to your
            unique needs. Whether you seek a consumer app or an enterprise
            solution, our intuitive and engaging mobile applications are
            designed to unlock your business's full potential. With a focus on
            user-centric design and cutting-edge technology, we deliver apps
            that captivate audiences and drive results. Trust us to transform
            your ideas into seamless, user-friendly mobile experiences. Stay
            ahead in the mobile landscape with our expertise in mobile app
            development. Let's bring your vision to life and make a lasting
            impact on the mobile platform.
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
            Revolutionize your business by harnessing the power of blockchain
            technology. Our expert blockchain developers specialize in creating
            secure and transparent systems using platforms such as Ethereum,
            Hyperledger, and Corda. Whether you need blockchain-based supply
            chain solutions or decentralized finance (DeFi) applications, we
            develop tailored solutions that optimize efficiency and foster
            trust. Unlock the potential of blockchain to streamline processes,
            enhance security, and transform your industry. Trust us to be your
            partner in navigating the world of blockchain technology and
            building innovative solutions that propel your business forward.
            Let's leverage the power of blockchain together and shape a more
            secure and efficient future.
          </p>
        </div>
      </div>
      <div className={`row d-flex flex-xs-column flex-md-row`}>
        <div className="col-md-6 d-flex flex-column justify-content-center justify-content-md-around align-items-center align-items-md-end text-start px-5 scroll_content appear_from_left">
          <h1>Branding Consultancy</h1>
          <p>
            We specialize in developing comprehensive brand strategies that
            align with your business goals and target audience. Our approach
            involves in-depth research, market analysis, and competitor analysis
            to uncover valuable insights that shape the development of a strong
            and differentiated brand. By understanding your industry and target
            market, we craft strategies that resonate with your audience and set
            you apart from the competition. Our goal is to create a compelling
            brand identity that drives customer engagement and loyalty. Trust us
            to guide you through the strategic process and build a brand that
            makes a lasting impact. Let's collaborate to shape your brand's
            success and stand out in the marketplace.
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
