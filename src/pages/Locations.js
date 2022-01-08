import React, { useState } from "react";
import { Cards } from "../components/Cards";
import { InputGroup } from "../components/Filters/InputGroup";
import { useFetchLocations } from "../hooks/useFetchLocations";

export const Locations = () => {
  const [id, setId] = useState(1);
  const { name, type, dimension, residents } = useFetchLocations(id);

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center mb-4">
            Locations:{" "}
            <span className="primary">{name === "" ? "Unknow" : name}</span>
          </h1>
          <h3 className="text-center">
            Dimension {dimension === "" ? "Unknow" : dimension}
          </h3>
          <h4 className="text-center">Type {type === "" ? "Unknow" : type}</h4>
        </div>
        <div className="row">
          <div className="col-3">
            <h4 className="text-center mb-4">Pick Location</h4>
            <InputGroup setId={setId} name="location" total={126} />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards characters={residents} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
