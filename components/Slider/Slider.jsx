import styles from "./slider.module.css";

function Slider(props) {
  const { current, next } = props;
  console.log(current, next);
  return (
    <div className="gallery">
      <div className={`${styles.gallery_container}`}>
        <img
          src="/web_development.jpg"
          alt=""
          className={`img-fluid ${styles.gallery_item} ${
            current === 0 ? styles.gallery_item_1 : styles.fade_current
          } ${next === 0 ? styles.gallery_item_2 : null}`}
        />
        <img
          src="/mobile_development.jpg"
          alt=""
          className={`img-fluid ${styles.gallery_item} ${
            current === 1 ? styles.gallery_item_1 : styles.fade_current
          } ${next === 1 ? styles.gallery_item_2 : null}`}
        />
        <img
          src="/AI.jpg"
          alt=""
          className={`img-fluid ${styles.gallery_item} ${
            current === 2 ? styles.gallery_item_1 : styles.fade_current
          } ${next === 2 ? styles.gallery_item_2 : null}`}
        />
        <img
          src="/web_development.jpg"
          alt=""
          className={`img-fluid ${styles.gallery_item} ${
            current === 3 ? styles.gallery_item_1 : styles.fade_current
          } ${next === 3 ? styles.gallery_item_2 : null}`}
        />
        <img
          src="/branding.jpg"
          alt=""
          className={`img-fluid ${styles.gallery_item} ${
            current === 4 ? styles.gallery_item_1 : styles.fade_current
          } ${next === 4 ? styles.gallery_item_2 : null}`}
        />
      </div>
    </div>
  );
}

export default Slider;
