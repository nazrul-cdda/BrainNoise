
import { Link, useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { PostContext } from "../app/PostContext"
export const Navbar = () => {
    const {currentUser, setCurrentUser} = useContext(PostContext);
    const navigate = useNavigate();
    const onClickButton = () => {
        setCurrentUser({userName: "", password: ""});
        navigate('/');
    }
    return (
        <nav className = 'nav'>
            <Link to = "/">Home</Link>
            {(currentUser.userName) && <Link to = "/myposts">My Posts</Link>}
            <Link to = "/allposts">All Posts</Link>
            <Link to = "/about">About</Link>
            {!currentUser.userName && (
                <span>
                    <Link to="/registration">Register</Link>/<Link to="/login">Login</Link>
                 </span>
            )}
            {(currentUser.userName) && <button onClick={onClickButton}>Logout</button>}
        </nav>
    )
}
