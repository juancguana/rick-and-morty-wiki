import { useState } from "react";
import "./App.scss";
import { Cards } from "./components/Cards";
import { Filters } from "./components/Filters";
import { Pagination } from "./components/Pagination";
import { Search } from "./components/Search";
import { useFetchCharacters } from "./hooks/useFetchCharacters";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ gender: "", species: "", status: "" });
  const { characters, info } = useFetchCharacters(pageNumber, search, filter);

  return (
    <div className="App">
      <header className="mb-4 p-2">
        <h1>
          Rick & Morty <span>Wiki</span>
        </h1>
      </header>
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
    </div>
  );
}

export default App;
