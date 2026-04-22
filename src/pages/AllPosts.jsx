import { useContext } from "react"
import { PostContext } from "../app/PostContext"
import { PostCard } from "../components/PostCard";

export const AllPosts = () => {
    const {post, currentUser} = useContext(PostContext);
    if(!currentUser.userName) {
        return(
            <div>
                <h1>Please Login to see Posts!</h1>
            </div>
        )
    }
    return (
        <div>
            <h1 style={{ marginLeft: "50px" }}>All Previous Posts</h1>
            <div className="container">
                {[...post].reverse().map((i) => (
                 <div key = {i.id}><PostCard id = {i.id} text = {i.text} author = {i.author} time = {i.time} isLoggedIn = {i.author === currentUser.userName}/></div>
                ))}
            </div>
        </div>
    )
}
