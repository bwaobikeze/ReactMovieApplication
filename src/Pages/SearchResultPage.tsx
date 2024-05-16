import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavigationBar from "../NavigationBar";
import { Movie } from "../interfaces/MovieInterface";
const SearchResultPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const data:Movie[] = location.state.data;
    const handleClick = (movie: Movie) => {
        navigate(`/movies/${movie.id}`, { state: { movie } });
        };
  return (
      <div>
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
export default SearchResultPage;