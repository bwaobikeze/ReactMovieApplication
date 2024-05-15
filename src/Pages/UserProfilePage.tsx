import { db, auth} from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
const UserProfilePage: React.FC = () => { 
  const user = auth.currentUser;
  const [movies, setMovies] = useState<any[]>([]);
  useEffect(() => {
    const getMovies = async () => {
        try {
            if (user) {
                const moviesDocRef = doc(db, "Movies", user.uid);
                const moviesDoc = await getDoc(moviesDocRef);
                if (moviesDoc.exists()) {
                    setMovies(moviesDoc.data().movies);
                } else {
                    console.log("No such document!");
                }
            } else {
                console.log("User not authenticated.");
            }
        } catch (error) {
            console.log(error);
        }
    }

    getMovies();
}, [user]);
    return (
      <div>
      <h1>Your Movies</h1>
      <div className="movies-container">
          {movies.map((movie) => (
              <div key={movie.id} className="movie">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" />
                  <p>{movie.title}</p>
              </div>
          ))}
      </div>
  </div>
    )
}

export default UserProfilePage;