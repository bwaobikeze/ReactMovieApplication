import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import { Movie } from "../interfaces/MovieInterface";



function Moviepage() {
    const [data, setData] = useState<Movie[]>([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=550576ca6fc7f4c8979fd14c73137502"
      );
      setData(response.data.results);
    };
    fetchData();
  }, []);

  const handleClick = (movie: Movie) => {
    navigate(`/movies/${movie.id}`, { state: { movie } });
    };
  return (
    <div className="MoviePage Text">
      <NavigationBar />
      <div className="container">
        {data.length > 0 && (
          <>
            {[...Array(Math.ceil(data.length / 4))].map((_, index) => (
              <div key={index} className="row">
                {data.slice(index * 4, index * 4 + 4).map((movie) => (
                  <div key={movie.id} className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        className="card-img-top"
                        alt="movie poster"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">Release Date: {movie.release_date}</p>
                        <button onClick={() => handleClick(movie)} className="btn btn-primary">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
export default Moviepage;
