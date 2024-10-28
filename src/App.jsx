import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>

          <Route path="/" exact element={<Home />} />
          <Route
            path="/movies"
            element={<Movies />}
          />
          <Route
            path="/movies/search/:query"
            element={<Movies />}
          />
          <Route
            path="/movies/:id"
            element={<Movie />}
          />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
