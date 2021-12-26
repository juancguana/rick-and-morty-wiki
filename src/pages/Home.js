import React, { useState } from "react";
import { Cards } from "../components/Cards";
import { Filters } from "../components/Filters";
import { Pagination } from "../components/Pagination";
import { Search } from "../components/Search";
import { useFetchCharacters } from "../hooks/useFetchCharacters";

export const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ gender: "", species: "", status: "" });
  const { characters, info } = useFetchCharacters(pageNumber, search, filter);

  return (
    <>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
          <Filters setFilter={setFilter} setPageNumber={setPageNumber} />
          <div className="col-9">
            <div className="row">
              <Cards characters={characters} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
};
