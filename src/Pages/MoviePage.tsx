import '../Pages/MoviePage.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Movie {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
}
function Moviepage() {
    const [data, setData] = useState<Movie[]>([]);
    useEffect(() => { 
        const fetchData = async () => { 
            const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=550576ca6fc7f4c8979fd14c73137502');
            setData(response.data.results);
            console.log(data[1].title);
        };
        fetchData();
    }, []);
    return (
        <div className="MoviePage Text">
            <center>
                <h1>Movie Page</h1>
            </center>
            <center>
                <div className="MovieSearch">
                    <form action="GET">
                        <label htmlFor="movie">Search for a movie:</label>
                        <input type="text" id="movie" name="movie" />
                        <button>Submit</button>
                  </form>
                </div>
            </center>
        </div>
    );
}
export default Moviepage;