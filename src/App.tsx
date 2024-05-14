import LandingPage from './Pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviePage from './Pages/MoviePage';
import UserProfilePage from './Pages/UserProfilePage';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/user" element={<UserProfilePage />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
