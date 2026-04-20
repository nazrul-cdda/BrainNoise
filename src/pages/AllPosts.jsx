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
            <h1>All Previous Posts</h1>
            <div className="container">
                {[...post].reverse().map((i, index) => (
                 <div key = {index}><PostCard text = {i.text} id = {i.author} time = {i.time} /></div>
                ))}
            </div>
        </div>
    )
}
