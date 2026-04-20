import { useContext } from "react"
import { PostContext } from "../app/PostContext"
import { PostCard} from "../components/PostCard"

export const MyPosts = () => {
    const {post, currentUser} = useContext(PostContext);
    const filtered = post.filter(item => item.author === currentUser.userName);
    return (
        <div>
            <h1>All Your Posts</h1>
            <div className="container">
                {[...filtered].reverse().map((i, index) => (
                    <div key = {index}><PostCard text = {i.text} id = {i.author} time = {i.time} /></div>
                ))}
            </div>
        </div>
    )
}
