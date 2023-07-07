import Image from "next/image";
import React from "react";
import { IoGameController } from "react-icons/io5";
import styles from "./careers.module.css";

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
      </div>
    </div>
  );
}

export default Carrers;
