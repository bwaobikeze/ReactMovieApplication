import React, {useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebase';
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
        password: password
      });
      navigate("/movies");
      console.log("Document written with ID: ", user.user.uid);
    } catch (error) {
      console.log(error);
    }

  }
  return (
      <div className="LandingPage Text">
          <center>
          <h1>Register</h1>
          </center>
      <center> 
      <div>
        <input type='username'
          placeholder='username'
          value={username}
          onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
        <input type='email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
        <input type='password'
          placeholder='Password'
          value={password}
        onChange={e => setPassword(e.target.value)}/>
        </div>
        <button onClick={HandleRegister}>Login</button>
          </center>
    </div>
  );
}
export default Register;