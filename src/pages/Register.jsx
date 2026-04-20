
import { useContext, useState } from "react"
import { PostContext } from "../app/PostContext"
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[Name, setName] = useState("");
    const {user, setUser, currentUser, setCurrentUser} = useContext(PostContext);

    const navigate = useNavigate();
    const addToUser = () => {
        if(!username || !password || !Name) return;
        const name = user.find(u => u.username === username);
        if(name) {
            alert('Username exists! Try something new');
            return;
        }

        setUser((prev) => [
            ...prev,
            {username, password, Name}
        ])
        // setCurrentUser((prev)=>({userName: username, password:password}));
        setName("");
        setUsername("");
        setPassword("");
        alert("Registration done Successfully!")
        navigate("/login");
    }
    console.log(user);
    return(
        <div className="registration">
            <h1>Registration</h1>
            <input 
                type="text"
                value = {Name}
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
                style={{
                    marginLeft: "20px",
                    resize: "vertical",
                    padding: "12px",
                    borderRadius: "14px",
                    border: "2px solid #e8c6a6", 
                    fontSize: "14px",
                    outline: "none",
                    backgroundColor: "#fff3e6",
                    color: "#5a4633",
                    boxShadow: "0 4px 12px rgba(232, 198, 166, 0.35)"
                }}
            />
            <input
                type = "username"
                value = {username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                style={{
                    marginLeft: "20px",
                    resize: "vertical",
                    padding: "12px",
                    borderRadius: "14px",
                    border: "2px solid #e8c6a6", 
                    fontSize: "14px",
                    outline: "none",
                    backgroundColor: "#fff3e6",
                    color: "#5a4633",
                    boxShadow: "0 4px 12px rgba(232, 198, 166, 0.35)"
                }}
            />
            <input
                type = "password"
                value = {password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                style={{
                    marginLeft: "20px",
                    resize: "vertical",
                    padding: "12px",
                    borderRadius: "14px",
                    border: "2px solid #e8c6a6", 
                    fontSize: "14px",
                    outline: "none",
                    backgroundColor: "#fff3e6",
                    color: "#5a4633",
                    boxShadow: "0 4px 12px rgba(232, 198, 166, 0.35)"
                }}
            />
            <button 
            style={{
                    marginLeft: "20px",
                    resize: "vertical",
                    padding: "12px",
                    borderRadius: "14px",
                    border: "2px solid #e8c6a6", 
                    fontSize: "14px",
                    outline: "none",
                    backgroundColor: "#fff3e6",
                    color: "#5a4633",
                    boxShadow: "0 4px 12px rgba(232, 198, 166, 0.35)"
                }}
            onClick={addToUser}>Registration</button>
        </div>
    )
}
