import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
  <div className="wrapper">
        <form action="" className='form-login'>
            <h1>Login</h1>
            <div className="input-box-login">
                <input type="text" placeholder="username" required autoComplete='false'/>
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box-login">
                <input type="password" placeholder="password"  autoComplete='false' required/>
                <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="remember">
                <label><input type="checkbox"/>Remember Me</label>
                <a href="#">Forget password?</a>
            </div>
            <input type="submit" className="btn-login" value="Login"/>
            <div className="register">
                  <p>Don't have an account ?{" "} </p> &nbsp; 
                <Link to="/register" style={{color:"blue"}}> signup</Link>
            </div>
          </form>
              <div className = "vertical-login"></div>
          <img className='login-btn' src="https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg" alt="signup"/>
              {/* <button className='signup-btn'>Sign-Up</button> */}
    </div>
  )
}

export default Login