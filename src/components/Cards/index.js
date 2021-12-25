import React from "react";
import { color } from "../../constants";
import styles from "./Card.module.scss";

export const Cards = ({ characters }) => {
  if (characters.length === 0) {
    return <p>No Data</p>;
  }

  return characters.map((character) => {
    const { id, image, name, location, status } = character;

    return (
      <div key={id} className={`${styles.card} col-3`}>
        <figure className="d-flex justify-content-center">
          <img src={image} alt={name} className={`${styles.img} img-fluid`}/>
        </figure>
        <div className="content">
          <h4 className="fw-bold mb-4">{name}</h4>
          <div className="">
            <span>Last location: </span>
            <p className="fs-5">{location.name}</p>
          </div>
        </div>
        <div
          className={`${styles.badge} badge bg-${color[status]}`}
        >
          {status}
        </div>
      </div>
    );
  });
};
