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
    const overlayStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.9) 100%)',
        zIndex: 1,
      };
    
      const imageStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 0,
    };
    
    const containerStyle: React.CSSProperties = {
        position: 'absolute',
        top: 200,
        left: 400,
        zIndex: 2,
        color: 'white', // Set text color to white for better readability
        padding: '20px', // Add some padding for spacing
        width: '100%',
      };
    return (
        <div>
            <NavigationBar />
            <div className="position-relative" style={{ height: '100vh' }}>
                <div style={overlayStyle}></div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Background" className="img-fluid" style={imageStyle} />
            </div>
            <div className="container" style={containerStyle}>
                <div className="row">
                    <div className="col-md-4">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" />
                    </div>
                    <div className="col-md-8" style={{paddingLeft: 100}}>
                        <h1>{movie.title}</h1>
                        <p>{movie.overview} </p>
                        <button className='btn btn-primary btn-lg' onClick={handleAdd}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieDetailsPage;