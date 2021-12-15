import React from "react";

const Cards = ({ characters }) => {
  if (characters.length === 0) {
    return <p>No Data</p>;
  }

  return characters.map((character) => (
    <div key={character.id} className="col-4">
      <figure >
        <img src={character.image} alt={character.name} className="img-fluid"/>
      </figure>
      {character.name}
    </div>
  ));
};

export { Cards };
