"use client";
import React from "react";
import Card from "../components/Card/Card.jsx";
import { IoGameController } from "react-icons/io5";
import { LOCATIONS, SPECIALIZATION } from "../../constants";
import styles from "./careers.module.css";
import MOCK_DATA from "../../../MOCK_DATA.json";

function Carrers(props: any) {
  return (
    <div className={`wrapper`}>
      <div className={`${styles.about_us_banner}`}></div>
      <div className="container mt-5">
        <h1 className="text-center">
          Steer your carrer in the right direction
        </h1>
        <p className={`text-center ${styles.para}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iure
          culpa voluptatem, necessitatibus quod molestiae at vero nam modi
          cumque provident cum tempora eos voluptate nisi fugit architecto, odio
          quam?
        </p>
        <div className="d-md-flex justify-content-xs-start justify-content-between mt-5">
          <div className={`${styles.select_box} col-md-4`}>
            <span className="title">specialization</span>
            <select
              className="form-select form-select-lg my-2"
              aria-label=".form-select-lg example"
            >
              <option selected>All Specalization</option>
              {SPECIALIZATION.map((data: any) => (
                <option value={data.name} key={Math.random()}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>
          <div className={`${styles.select_box}  col-md-4`}>
            <span className="title">Location</span>
            <select
              className="form-select form-select-lg my-2 me-4"
              aria-label=".form-select-lg example"
            >
              <option selected>All Locations</option>
              {LOCATIONS.map((data: any) => (
                <option value={data.name} key={Math.random()}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>{" "}
          <div className={`${styles.select_box}  col-md-3`}>
            <span className="title">contract types</span>
            <select
              className="form-select form-select-lg my-2 me-4"
              aria-label=".form-select-lg example"
            >
              <option selected>All types</option>
              <option value="full_time">Full Time</option>
              <option value="contract">Contract</option>
            </select>
          </div>{" "}
        </div>
        <div className="card_warapper ">
          <h3 className="text-center">{MOCK_DATA.length} Jobs available</h3>
          {MOCK_DATA.map((data: any) => {
            return <Card key={Math.random()} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Carrers;
