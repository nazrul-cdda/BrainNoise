
import { useContext, useState } from "react"
import { PostContext } from "../app/PostContext"
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const {user, setUser, currentUser, setCurrentUser} = useContext(PostContext);

    const navigate = useNavigate();
    const addToUser = () => {
        if(!username || !password) return;
        const name = user.find(u => u.username === username);
        if(!name) {
            alert(`Username doesn't match`);
            return;
        }
        if(name) {
            const pass = user.find(u => u.password === password);
            if(!pass) {
                alert(`Password doens't match`);
                return;
            }
        }
        setCurrentUser((prev)=>({userName: username, password:password}));
        setUsername("");
        setPassword("");
        navigate("/");
    }
    console.log(`User = ${user}`);
    return(
        <div className="Login">
            <h1>Please, Login</h1>
            <input
                type = "username"
                value = {username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type = "password"
                value = {password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={addToUser}>Login</button>
        </div>
    )
}
