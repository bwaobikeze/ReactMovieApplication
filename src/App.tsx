import LandingPage from './Pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviePage from './Pages/MoviePage';
import UserProfilePage from './Pages/UserProfilePage';
import Register from './Pages/RegisterPage';
import Login from './Pages/LoginPage';

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
      </Routes>
      </Router>
    </div>
  );
}

export default App;
