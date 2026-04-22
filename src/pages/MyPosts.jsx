import { useContext } from "react"
import { PostContext } from "../app/PostContext"
import { PostCard} from "../components/PostCard"

export const MyPosts = () => {
    const {post, currentUser} = useContext(PostContext);
    const filtered = post.filter(item => item.author === currentUser.userName);
    return (
        <div>
            <h1 style={{ marginLeft: "50px" }}>All Your Posts</h1>
            <div className="container">
                {[...filtered].reverse().map((i) => (
                    <div key = {i.id}><PostCard id = {i.id} text = {i.text} author = {i.author} time = {i.time} isLoggedIn = {true}/></div>
                ))}
            </div>
        </div>
    )
}
