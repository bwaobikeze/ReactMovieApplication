import { useNavigate } from "react-router-dom";



const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="LandingPage Text">
    <center>
    <h1>Welcome to My Entertainment App</h1>
    </center>
<center> 
<div>
  <button onClick={() => navigate("/login")}>Login</button>
  <button onClick={() => navigate("/register")}>Register</button>
    </div>
      </center>
</div>
  );

}
export default LandingPage;