import React from "react";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div
      className={`${styles.card_wrapper} d-md-flex justify-content-between mt-4`}
    >
      <div className="role">
        <div className="role_wrapper">
          <h5 className="m-0">senior project management</h5>
          <p className="mt-3">project management, senior</p>
        </div>
        <span className="status">status</span>
      </div>
      <div
        className={`${styles.salary} d-flex flex-column justify-content-between`}
      >
        <div className="">
          <p className={`m-md-0 ${styles.range}`}>15,000 - 20,000</p>
          <span>contract</span>
        </div>
        <p className="location m-0">chennai</p>
      </div>

      <div className="button align-self-center">
        <button className={`${styles.apply_btn}`}>Apply</button>
      </div>
    </div>
  );
};

export default Card;
