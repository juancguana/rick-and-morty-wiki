import { useState } from "react";
import "./App.scss";
import { Cards } from "./components/Cards";
import { Filters } from "./components/Filters";
import { Pagination } from "./components/Pagination";
import { useFetchCharacters } from "./hooks/useFetchCharacters";

function App() {
  const [pageNumber, setPageNumber] = useState(1);

  const { characters } = useFetchCharacters(pageNumber);

  return (
    <div className="App">
      <header className="mb-4 p-2">
        <h1>
          Rick & Morty <span>Wiki</span>
        </h1>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-9">
            <div className="row">
              <Cards characters={characters} />
            </div>
          </div>
        </div>
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
