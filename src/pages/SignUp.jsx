import '../styles/Login.css'
import Image from '../assets/images/image.png'
import googleLogo from '../assets/images/google-logo.png'
import appleLogo from '../assets/images/apple-logo.png'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;

            // Add to firestore Database
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name,
                email,
                createdAt: new Date()
            });

            alert('User registered Successfully!');
            setName("");
            setEmail("");
            setPassword("");
            localStorage.setItem("isLoggedIn", "true");
            navigate("/welcome");
        }
        catch (error) {
            alert(error.message);
            setName("");
            setEmail("");
            setPassword("");
        }
    }

    return (
        <>
            <div className="login-container">
                <div className="content-container">
                    <p className='welcome'>Get Started Now</p>

                    <form onSubmit={handleSignup}>
                        <div className="input-container">

                            <label htmlFor="name" >Name</label><br />
                            <input type="text" name="name" id="name" value={name} placeholder='Enter your Name...' onChange={(e) => setName(e.target.value)} required /> <br /><br />

                            <label htmlFor="email" >Email address</label><br />
                            <input type="email" name="email" id="email" value={email} placeholder='Enter your email...' onChange={(e) => setEmail(e.target.value)} required />

                            <div className="password-label">
                                <label htmlFor="password">Password</label>
                            </div>

                            <input type="password" name="password" id="password" value={password} placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} required />
                        </div>

                        <div className="remember-checkbox">
                            <input type="checkbox" name="remember" id="remember" />
                            <label htmlFor="remember">I Agree to the Terms and Conditions</label>
                        </div>

                        <div className="btnLogin">
                            <button type="submit">Sign Up</button>
                        </div>
                    </form>

                    <div className="seperation-styling">
                        <div className="horizontal">{""}</div>
                        <span id="or">Or</span>
                        <div className="horizontal">{""}</div>
                    </div>

                    {/* other Sigin Options */}
                    <div className="other-signin-optoins">
                        <div className="google">
                            <img src={googleLogo} alt="google" />
                            Signup with Google
                        </div>


                        <div className="apple">
                            <img src={appleLogo} alt="apple" />
                            Signup with Apple
                        </div>

                    </div>

                    <div className="signup-link">
                        <span>Have an account?</span>
                        <NavLink style={styles} to="/"  >    Login</NavLink>

                    </div>

                </div>
                <div className="image-container">
                    <img src={Image} alt="sideImage" />
                </div>

            </div >
        </>
    )
}


export default SignUp


const styles = {
    "text-decoration": "none",

}