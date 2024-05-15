import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const HandleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/movies");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="LoginPage Text">
      <div
        className="LoginPage"
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          className="background-image"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "url(the-creator-movie-poster-4k-wallpaper-uhdpaper.com-979@1@m.jpg)",
            backgroundSize: "cover",
            filter: "blur(10px)",
          }}
        ></div>
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>
        <div
          className="content"
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            color: "white",
          }}
        >
          <h1>Login</h1>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
                          value={password}
                          style={{marginTop: "10px"}}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={HandleLogin} className="btn btn-primary btn-lg" style={{marginTop: "10px"}}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
