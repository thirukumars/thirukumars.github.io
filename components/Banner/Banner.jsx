import { useCallback, useEffect, useRef, useState } from "react";
import Slider from "../Slider/Slider";

import styles from "./banner.module.css";

function Banner(props) {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  const handleSlide = useCallback(() => {
    setCurrent((prev) => (prev <= 3 ? prev + 1 : 0));
    setNext((next) => (next < 4 ? next + 1 : 0));
  }, []);
  useEffect(() => {
    // Set interval to automatically advance to the next slide every 3 seconds
    const interval = setInterval(() => {
      if (isAutoSliding) {
        handleSlide();
      }
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [isAutoSliding]);

  const handleControlClick = () => {
    setIsAutoSliding(false);

    // Restore auto-sliding after 5 seconds (adjust the duration as needed)
    setTimeout(() => {
      setIsAutoSliding(true);
    }, 10000);
  };
  const prev = () => {
    current > 0 ? setCurrent(current - 1) : setCurrent(4);
    next >= 1 ? setNext(next - 1) : setNext(4);
    handleControlClick();
  };
  const nextSlide = () => {
    current <= 3 ? setCurrent(current + 1) : setCurrent(0);
    next < 4 ? setNext(next + 1) : setNext(0);
    handleControlClick();
  };

  return (
    <section className="container" id="home">
      <div className="row  justify-content-between align-items-center text-left">
        <div className="col-md-4">
          <h1>DISRUPTIVE INNOVATION</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
            obcaecati quibusdam magni numquam facere dignissimos optio, ullam
            iure, molestias sequi voluptatibus quae? Optio, ab debitis similique
            officia velit quod nobis.
          </p>
        </div>
        <div className="col-md-8">
          <Slider current={current} next={next} />
        </div>
      </div>
      <div className="row  justify-content-between align-items-center mt-5">
        <div className="col-xs-12 col-md-4 d-flex justify-content-around">
          <span className={` ${styles.icon_container}`}>
            <img src="/fb.png" className={`img-fluid ${styles.social_icon}`} />
          </span>
          <span className={` ${styles.icon_container}`}>
            <img
              src="/insta.png"
              className={`img-fluid  ${styles.social_icon}`}
            />
          </span>
          <span className={` ${styles.icon_container}`}>
            <img
              src="/linkedin.png"
              className={`img-fluid  ${styles.social_icon}`}
            />
          </span>
          <span className={` ${styles.icon_container}`}>
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
    </section>
  );
}

export default Banner;
