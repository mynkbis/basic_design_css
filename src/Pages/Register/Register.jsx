import React, { useState } from 'react'
import "./Register.css"
import { Link } from 'react-router-dom'
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../firebase.js';

const Register = () => {
  const [username, setUsername] = useState()
  const [password, setPassword]=useState()

    const onSubmit = async (e) => {
        e.preventDefault()
      await createUserWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
          // Signed in
          console.log(userCredential,"cred")
            const user = userCredential.user;
            // console.log(user);
      })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        }); 
    }


  return (
    <div className="wrapper-main">
          <img className='signup-btn' src="https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg" alt="signup"/>
                    <div className = "vertical"></div>
        <form action="" className='form'>
            <h1>SignUp</h1>
            <div className="input-box">
                <input type="text" placeholder="username" required autoComplete='false'  onChange={(e) => setUsername(e.target.value)}  />
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input type="password" placeholder="password"  autoComplete='false' required  onChange={(e) => setPassword(e.target.value)}/>
                <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="remeber">
                <label><input type="checkbox"/>Remember Me</label>
             </div>
            <input type="submit" onClick={(e)=>{onSubmit(e)}} className="btn" value="SignUp"/>
            <div className="register">
                <p>Already have an account ? </p> &nbsp; 
          <Link to="/login" style={{color:"blue"}}>Login</Link>
            </div>
          </form>
              </div>
  )
}

export default Register