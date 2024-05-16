import React from 'react';
import { db, auth } from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../NavigationBar';
const MovieDetailsPage: React.FC = () => { 
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const movie = location.state.movie;
    const navigate = useNavigate();
    const handleAdd = async () => { 
        const user = auth.currentUser;
        try {
            if (user) {
                const userDocRef = doc(db, "Movies", movie.id.toString()); 
                await setDoc(userDocRef, {
                    userId: user.uid,
                    title: movie.title,
                    release_date: movie.release_date,
                    overview: movie.overview,
                    poster_path: movie.poster_path,
                    backdrop_path: movie.backdrop_path,
                    id: movie.id 
                  });
            } else {
                console.log("User not authenticated.");
            }
        } catch (error) {
            console.log(error);
        }
    }
    console.log(id);
    return (
        <div>
            <NavigationBar />
             <button onClick={() => navigate("/movies")}>back</button>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" />
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}
export default MovieDetailsPage;