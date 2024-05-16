import { db, auth } from "../firebase";
import {
  doc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../NavigationBar";
interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
}
const MovieLibrary: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const q = query(
          collection(db, "Movies"),
          where("userId", "==", auth.currentUser?.uid)
        );
        const querySnapshot = await getDocs(q);
        const movieData = querySnapshot.docs.map((doc) => doc.data() as Movie);
        setMovies(movieData);
      } catch (error) {
        setError("Error getting movies:");
      }
      setLoading(false);
    };
    fetchMovies();
  }, []);
  const handleClick = (movie: Movie) => {
    navigate(`/movies/${movie.id}`, { state: { movie } });
  };
  const handleDelete = async (movie: Movie) => {
    try {
      console.log("Deleting " + movie.id.toString());
      await deleteDoc(doc(db, "Movies", movie.id.toString()));
      console.log(movie.id.toString() + " deleted");
      setMovies((prevMovies) => prevMovies.filter((m) => m.id !== movie.id));
    } catch (error) {
      setError("Error getting movies:");
      console.log(error);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <h1>
        {" "}
        <NavigationBar />
        Loading...
      </h1>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="MoviePage Text">
      <NavigationBar />
      <div className="container">
        {movies.length > 0 && (
          <>
            {[...Array(Math.ceil(movies.length / 4))].map((_, index) => (
              <div key={index} className="row">
                {movies.slice(index * 4, index * 4 + 4).map((movie) => (
                  <div key={movie.id} className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        className="card-img-top"
                        alt="movie poster"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">
                          Release Date: {movie.release_date}
                        </p>
                        <button
                          onClick={() => handleClick(movie)}
                          className="btn btn-primary"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() =>handleDelete(movie)}
                          className="btn btn-primary"
                        >
                            Delete
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
};

export default MovieLibrary;
