import React, {useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate } from "react-router-dom";

const LoginPage:React.FC = () => {
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
            <center>
                <h1>Login</h1>
            </center>
            <center>
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
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <button onClick={HandleLogin}>Login</button>
            </center>
        </div>
    );
}
export default LoginPage;