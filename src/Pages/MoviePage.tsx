import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export interface Movie {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
}
function Moviepage() {
    const [data, setData] = useState<Movie[]>([]);
    const navigate = useNavigate();
    useEffect(() => { 
        const fetchData = async () => { 
            const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=550576ca6fc7f4c8979fd14c73137502');
            setData(response.data.results);
        };
        fetchData();
    }, []);

    const handleClick = (movie: Movie) => { 
        navigate(`/movies/${movie.id}`, { state: { movie } });
    }
    return (
        <div className="MoviePage Text">
            <center>
                <h1>Movie Page</h1>
                <button onClick={() => navigate("/user")}>profile</button>
            </center>
           
            <div className="MoviePage">
                {data.map((movie) => (
                    <button onClick={() => handleClick(movie)}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" />
                        <h2>{movie.title}</h2>
                    </button>
                ))}
                 </div>
        </div>
    );
}
export default Moviepage;