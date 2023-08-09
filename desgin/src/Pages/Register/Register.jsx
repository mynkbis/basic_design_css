import React from 'react'
import "./Register.css"
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className="wrapper-main">
          <img className='signup-btn' src="https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg" alt="signup"/>
                    <div className = "vertical"></div>
        <form action="" className='form'>
            <h1>SignUp</h1>
            <div className="input-box">
                <input type="text" placeholder="username" required autoComplete='false'/>
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input type="password" placeholder="password"  autoComplete='false' required/>
                <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="remeber">
                <label><input type="checkbox"/>Remember Me</label>
             </div>
            <input type="submit" className="btn" value="SignUp"/>
            <div className="register">
                <p>Already have an account ? </p> &nbsp; 
          <Link to="/login" style={{color:"blue"}}>Login</Link>
            </div>
          </form>
              </div>
  )
}

export default Register