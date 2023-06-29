import Slider from "../Slider/Slider";

import styles from "./banner.module.css";

import { useEffect, useState } from "react";

function Banner(props) {
  const { activeSection } = props;
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);

  // // Function to advance to the next slide
  // const nextSlider = () => {
  //   setCurrent((prevSlide) =>
  //     prevSlide <= 3 ? setCurrent(prevSlide + 1) : setCurrent(0)
  //   );
  //   setNext((nextImg) => (nextImg < 4 ? setNext(nextImg + 1) : setNext(0)));
  // };

  // useEffect(() => {
  //   // Set interval to automatically advance to the next slide every 3 seconds
  //   const interval = setInterval(nextSlider, 3000);

  //   // Clean up the interval when the component unmounts
  //   return () => clearInterval(interval);
  // }, []);

  const prev = () => {
    current > 0 ? setCurrent(current - 1) : setCurrent(4);
    next >= 1 ? setNext(next - 1) : setNext(4);
  };
  const nextSlide = () => {
    current <= 3 ? setCurrent(current + 1) : setCurrent(0);
    next < 4 ? setNext(next + 1) : setNext(0);
  };

  return (
    <div className="container" id="home">
      <div className="row h-100 justify-content-between align-items-center text-left">
        <div className="col-md-4 col-sm-12">
          <h1>DISRUPTIVE INNOVATION</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
            obcaecati quibusdam magni numquam facere dignissimos optio, ullam
            iure, molestias sequi voluptatibus quae? Optio, ab debitis similique
            officia velit quod nobis.
          </p>
        </div>
        <div className="col-md-8 col-sm-12">
          <Slider current={current} next={next} />
        </div>
      </div>
      <div className="row  justify-content-between align-items-center mt-5">
        <div className="col-md-4">
          <span className="mx-4">
            <img src="/fb.png" className={`img-fluid ${styles.social_icon}`} />
          </span>
          <span className="mx-4">
            <img
              src="/insta.png"
              className={`img-fluid  ${styles.social_icon}`}
            />
          </span>
          <span className="mx-4">
            <img
              src="/linkedin.png"
              className={`img-fluid  ${styles.social_icon}`}
            />
          </span>
          <span className="mx-4">
            <img
              src="/tweet.png"
              className={`img-fluid  ${styles.social_icon}`}
            />
          </span>
        </div>
        <div
          className={`col-md-8  d-flex  justify-content-end align-items-center ${styles.gallery_container} ${styles.gallery_controls}`}
        >
          <div className={`${styles.box}`}>
            <button
              className={`${styles.gallery_controls_button} ${styles.gallery_controls_previous}`}
              onClick={() => prev()}
            ></button>
            <button
              className={`${styles.gallery_controls_button} ${styles.gallery_controls_next}`}
              onClick={() => nextSlide()}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
