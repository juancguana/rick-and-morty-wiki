import React from "react";
import { Cards } from "../components/Cards";
import { useFetchEpisodes } from "../hooks/useFetchEpisodes";

export const Episodes = () => {
  const { airDate, name, characters } = useFetchEpisodes(1);

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
          <div className="col-3">Pick episode</div>
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
