import '../styles/Login.css'
import Image from '../assets/images/image.png'
import googleLogo from '../assets/images/google-logo.png'
import appleLogo from '../assets/images/apple-logo.png'
import { useState } from 'react'
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <div className="login-container">
                <div className="content-container">
                    <p className='welcome'>Welcome back!</p>
                    <p className='info'> Enter your Credentials to access your account</p>

                    <div className="input-container">

                        <label htmlFor="email" >Email address</label><br />
                        <input type="email" name="email" id="email" value={email} placeholder='Enter your email...' onChange={(e) => setEmail(e.target.value)} />

                        <div className="password-label">
                            <label htmlFor="password">Password</label>
                            <a href="#">forget password</a>
                        </div>

                        <input type="password" name="password" id="password" value={password} placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="remember-checkbox">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember for 30 days</label>
                    </div>

                    <div className="btnLogin">
                        <button type="submit">login</button>
                    </div>


                    <div className="seperation-styling">
                        <div className="horizontal">{""}</div>
                        <span id="or">Or</span>
                        <div className="horizontal">{""}</div>
                    </div>

                    {/* other Sigin Options */}
                    <div className="other-signin-optoins">
                        <div className="google">
                            <img src={googleLogo} alt="google" />
                            Sign in with Google
                        </div>


                        <div className="apple">
                            <img src={appleLogo} alt="apple" />
                            Sign in with Apple

                        </div>

                    </div>

                </div>
                <div className="image-container">
                    <img src={Image} alt="sideImage" />
                </div>

            </div>
        </>
    )
}


export default Login