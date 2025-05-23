import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
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
            <>Welcome Page</>
        )
    }

    return (
        <>
            Loading...
        </>
    )
}

export default Welcome