
import { PostCard } from "../components/PostCard";
import { useContext, useState } from "react"
import { PostContext } from "../app/PostContext"
export const Home = () => {
    const[text,setText] = useState("");
    const {user, post, setPost, currentUser, setCurrentUser} = useContext(PostContext);

    function formatPostTime(date) {
        return new Date(date).toLocaleString(undefined, {
            month: 'long',
            day: 'numeric', 
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }

    const addToPost = () => {
        if(!currentUser.userName) {
            return;
        }
        if(text.trim() === "") return;
        setPost((prev) => [
            ...prev, 
            {
                id: Math.random(),
                text: text,
                author: currentUser.userName,
                time: formatPostTime(new Date()),
            }
        ]);
        setText("");
    };
    const fullName = user.find(u => u.username === currentUser.userName);
    const filtered = post.filter(item => item.author === currentUser.userName);
    if(!fullName) {
        return(
            <div>
                <h1>WelCome to MyDiary</h1>
                <h2>Please Login to view your Diary :)</h2>
            </div>
        );
    }
    return (
        <div>
            <h1>Welcome Home, {fullName.Name}</h1>
            <h2>Share a thought? </h2>
            <textarea
                value={text}
                placeholder="Share a random thought..."
                onChange={(e) => setText(e.target.value)}
                rows={5}
                style={{
                    marginLeft: "20px",
                    width: "400px",
                    height: "200px",
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
                type = "submit"
                onClick={addToPost}
            />
            <h2>Previous Posts:</h2>
            <div className="container">
                 {[...filtered].reverse().map((i) => (
                    <div key = {i.id}><PostCard id = {i.id} text = {i.text} author = {i.author} time = {i.time} isLoggedIn = {true}/></div>
                ))}
            </div>
        </div>
    )
}