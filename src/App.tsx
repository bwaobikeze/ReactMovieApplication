import LandingPage from './Pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviePage from './Pages/MoviePage';
import UserProfilePage from './Pages/UserProfilePage';
import Register from './Pages/RegisterPage';
import Login from './Pages/LoginPage';
import MovieDetailsPage from './Pages/MovieDetailsPage';

function App() {
  
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movies" element={<MoviePage />} />
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
