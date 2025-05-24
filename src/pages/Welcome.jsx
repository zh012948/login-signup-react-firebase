import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/Welcome.css'
function Welcome() {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [navigate]);



    if (isLoggedIn) {

        return (
            <>
                <div className="welcome-container">
                    Welcome Page
                </div>
            </>
        )
    }

    return (
        <>
            Loading...
        </>
    )
}

export default Welcome