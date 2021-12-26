import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Navbar } from "./components/Navbar";
import { Episodes } from "./pages/Episodes";
import { Home } from "./pages/Home";
import { Locations } from "./pages/Locations";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="mb-4 p-2">
          <Navbar />
        </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
