import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src="THIS IS 4K MARVEL (Ultra HD).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: "2",
          textAlign: "center",
          padding: "50px",
          color: "white",
        }}
      >
        <h1>Welcome to My Entertainment App</h1>
        <button onClick={() => navigate("/login")} className="btn btn-primary" style={{marginRight: "20px"}}>Login</button>
        <button onClick={() => navigate("/register")} className="btn btn-primary">Register</button>
      </div>
    </div>
  );
};
export default LandingPage;
