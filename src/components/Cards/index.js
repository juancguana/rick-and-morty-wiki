import React from "react";
import styles from "./Card.module.scss";

export const Cards = ({ characters }) => {
  if (characters.length === 0) {
    return <p>No Data</p>;
  }

  return characters.map((character) => {
    const { id, image, name, location, status } = character;
    const color = {
      Alive: "success",
      Dead: "danger",
      unknown: "secondary",
    };
    return (
      <div key={id} className={`${styles.card} col-3`}>
        <figure>
          <img src={image} alt={name} className={`${styles.img} img-fluid`} />
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
