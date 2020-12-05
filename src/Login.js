import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';
function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signIn=e=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
            history.push('/');
        })
    }
    const register=e=>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/');
            }
        })
        .catch(error=>alert(error.message))
    }
    return (
        <div className="login">
            <Link to='/'>
            <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email-Address</h5>
                    <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
                    <h5>password</h5>
                    <input type='password' value={password} onChange={e=>setPassword(e.target.value)} />
                    <button type="submit" onClick={signIn} className="login_signinbutton">Sign In</button>
                </form>
                <p>By signing you are agree to the amazon term and condtions of use</p>
                <button type='submit' onClick={register} className="login_registerbutton">Create New Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
