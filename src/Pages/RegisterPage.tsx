import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const HandleRegister = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      const userDocRef = doc(db, "users", user.user.uid); // Create a reference to the user's document
      await setDoc(userDocRef, {
        username: username,
        email: email,
        password: password,
      });
      navigate("/movies");
      console.log("Document written with ID: ", user.user.uid);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    //   <div className="LandingPage Text">
    //       <center>
    //       <h1>Register</h1>
    //       </center>
    //   <center>
    //   <div>
    //     <input type='username'
    //       placeholder='username'
    //       value={username}
    //       onChange={e => setUsername(e.target.value)} />
    //     </div>
    //     <div>
    //     <input type='email'
    //       placeholder='Email'
    //       value={email}
    //       onChange={e => setEmail(e.target.value)} />
    //     </div>
    //     <div>
    //     <input type='password'
    //       placeholder='Password'
    //       value={password}
    //     onChange={e => setPassword(e.target.value)}/>
    //     </div>
    //     <button onClick={HandleRegister}>Login</button>
    //       </center>
    // </div>
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
          <h1>Register</h1>
          <div>
            <input
              type="username"
              className="form-control"
              placeholder="username"
              style={{ marginBottom: "10px" }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

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
              style={{ marginTop: "10px" }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={HandleRegister}
            className="btn btn-primary btn-lg"
            style={{ marginTop: "10px" }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
