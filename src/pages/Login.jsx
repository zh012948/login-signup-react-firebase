import '../styles/Login.css'
import Image from '../assets/images/image.png'
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
                </div>
                <div className="image-container">
                    <img src={Image} alt="sideImage" />
                </div>

            </div>
        </>
    )
}


export default Login