import React from 'react'
import '../css/login.css'

const Login = () => {
  return (
    <div>
      <div className="login-section">
        <form action="" className="login-form">
            <div className="upper">
                <h4>Log in or Sign up</h4>
            </div>

            <div className="middle">
                <h3>Welcome to <span>SWAARI</span></h3>
                <div className="login-inputs">
                    <input type="text" placeholder='Email or Mobile Number'/>
                    <input type="Password" placeholder='Password'/>
                </div>
                <p>By logging in, you agree to our <a href="/terms-and-conditions" target="_blank">Terms and Conditions</a>.</p>
                <button>Login</button>
            </div>

            <div className="lower">
                <div className="login-social-media">
                    <img src="Images/facebook.png" alt="" />
                    <h4>Continue with Facebook</h4>
                </div>
                <div className="login-social-media">
                    <img src="Images/google.png" alt="" />
                    <h4>Continue with Google</h4>
                </div>
                <div className="login-social-media">
                    <img src="Images/apple-logo.png" alt="" />
                    <h4>Continue with Apple</h4>
                </div>
                <div className="login-social-media">
                    <img src="Images/email.webp" alt="" />
                    <h4>Continue with Email</h4>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
