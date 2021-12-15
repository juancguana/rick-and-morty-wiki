import { useState } from "react";
import "./App.scss";
import { Cards } from "./components/Cards";
import { Filters } from "./components/Filters";
import { useFetchCharacters } from "./hooks/useFetchCharacters";

function App() {
  const [pageNumber, setPageNumber] = useState(1);

  const { characters } = useFetchCharacters(pageNumber);

  return (
    <div className="App">
      <h1>
        Rick & Morty <span>Wiki</span>
      </h1>

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
    </div>
  );
}

export default App;
