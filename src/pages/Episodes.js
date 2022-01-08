import React, { useState } from "react";
import { Cards } from "../components/Cards";
import { InputGroup } from "../components/Filters/InputGroup";
import { useFetchEpisodes } from "../hooks/useFetchEpisodes";

export const Episodes = () => {
  const [id, setId] = useState(1);
  const { airDate, name, characters } = useFetchEpisodes(id);

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center mb-4">
            Episode:{" "}
            <span className="primary">{name === "" ? "Unknow" : name}</span>
          </h1>
          <h3 className="text-center">
            Air Date {airDate === "" ? "Unknow" : airDate}
          </h3>
        </div>
        <div className="row">
          <div className="col-3">
            <h4 className="text-center mb-4">Pick episode</h4>
            <InputGroup setId={setId} name="episode" total={51} />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards characters={characters} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
