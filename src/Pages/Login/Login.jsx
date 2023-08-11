import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/userSlice';
const Login = () => {
     const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    const dispatch=useDispatch()

    
    const onSubmit = async (e) => {
        e.preventDefault()
     signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            const user = userCredential.user;
            dispatch(loginUser(user.providerData))
            console.log("first", user)
            navigate("/dashboard")          

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });

    }
    
  return (
      <div className="wrapper">
          <img className='login-btn' src="https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg" alt="signup"/>
           <div className = "vertical-login"></div>
        <form action="" className='form-login'>
            <h1>Login</h1>
            <div className="input-box-login">
                <input type="text" placeholder="username" required autoComplete='false'  onChange={(e) => setUsername(e.target.value)} />
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box-login">
                <input type="password" placeholder="password"  autoComplete='false' required  onChange={(e) => setPassword(e.target.value)} />
                <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="remember">
                <label><input type="checkbox"/>Remember Me</label>
                <a href="#">Forget password?</a>
            </div>
            <input type="submit" className="btn-login" value="Login" onClick={(e)=>{onSubmit(e)}}/>
            <div className="register">
                  <p>Don't have an account ?{" "} </p> &nbsp; 
                <Link to="/register" style={{color:"blue"}}> signup</Link>
            </div>
          </form>
             
              {/* <button className='signup-btn'>Sign-Up</button> */}
    </div>
  )
}

export default Login