import { db, auth } from '../firebase';
import {doc,collection, query, where, getDocs,  deleteDoc} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const q = query(collection(db, "Movies"), where("userId", "==", auth.currentUser?.uid));
                const querySnapshot = await getDocs(q);
                const movieData = querySnapshot.docs.map(doc => doc.data() as Movie);
                setMovies(movieData);
            } catch (error) {
                setError('Error getting movies:');
            }
            setLoading(false);
        };
        fetchMovies();
    }, []);
    const handleClick = (movie: Movie) => { 
        navigate(`/movies/${movie.id}`, { state: { movie } });
    }
    const handleDelete = async (movie: Movie) => {
        try {
            console.log("Deleting " + movie.id.toString());
            await deleteDoc(doc(db, "Movies", movie.id.toString()));
            console.log(movie.id.toString() + " deleted");
            setMovies(prevMovies => prevMovies.filter(m => m.id !== movie.id));
        } catch (error) {
            setError('Error getting movies:');
            console.log(error);
        }
        setLoading(false);
    };
    const handleLogout = () => {
        auth.signOut();
        navigate('/');
     };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            <h1>Movie Library</h1>
            <button onClick={() => handleLogout()}>
                Logout
            </button>
            <ul>
                {movies.map(movie => (
                    <div>
                             <button onClick={() => handleClick(movie)}>
                             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" />
                             <h2>{movie.title}</h2>
                        </button>
                        <button onClick={() => handleDelete(movie)}>Delete</button>
                    </div>

                ))}
            </ul>
        </div>
    );

}

export default MovieLibrary;