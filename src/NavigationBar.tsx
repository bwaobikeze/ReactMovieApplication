import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
}
const NavigationBar: React.FC = () => {
  const [movieSearch, setMovieSearch] = useState<string>("");
  const [data, setData] = useState<Movie[]>([]);
  const navigate = useNavigate();
  const HandleLogout = () => {
    auth.signOut();
    navigate("/");
  };
  const fetchData = async (movieName: string) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=550576ca6fc7f4c8979fd14c73137502&query=${movieName}&include_adult=false&language=en-US&page=1`
    );
    const datamovies = await response.json();
      setData(datamovies.results);
    };
    useEffect(() => {
        if (data.length > 0) {
          navigate(`/search/${movieSearch}`, { state: { data } });
        }
      }, [data, movieSearch, navigate]);
  return (
    <div className="NavigationBar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/movies" className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/movies" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user" className="nav-link">
                  My Movies
                </Link>
              </li>
            </ul>
            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent the default form submission behavior
                fetchData(movieSearch); // Call the fetchData function with the current movieSearch value
              }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={movieSearch}
                onChange={(e) => setMovieSearch(e.target.value)}
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <button
              className="btn btn-outline-success"
              onClick={() => HandleLogout()}
              type="submit"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavigationBar;
