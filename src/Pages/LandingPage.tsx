import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebase';


const LandingPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const HandleRegister = async () => { 
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user.user);
    } catch (error) {
      console.log(error);
    }

  }
  return (
      <div className="LandingPage Text">
          <center>
          <h1>Welcome to My Entertainment App</h1>
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
export default LandingPage;