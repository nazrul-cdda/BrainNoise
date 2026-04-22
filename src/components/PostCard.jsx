import { useContext, useState, useEffect } from "react"
import { PostContext } from "../app/PostContext"

export const PostCard = ({id, text, author, time, isLoggedIn}) => {
    const {currentUser, user, setUser, post, setPost} = useContext(PostContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

    useEffect(() => {
        setEditedText(text);
    }, [text]);

    const handleEdit = () => {
        setPost((prev) => prev.map(u => 
            u.id === id ? {...u, text: editedText} : u
        ))
        setIsEditing(false);
    }

    const handleDelete = () => {
      setPost((prev) => prev.filter(u => u.id != id))
    }

    return (
        <div>
            <div>
                <p id="one">@{author}</p>
                <p id="two">{editedText}</p>
                <p id="three">{time}</p>

                {isLoggedIn && (
                    <div className="buttonPostcard">
                        <button id="button-PostCard" onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                        <button id="button-PostCard" onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                )}
            </div>

            {/* Edit Modal */}
            {isEditing && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Edit Post</h3>
                        <textarea
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                            rows={4}
                        />
                        <div className="modal-buttons">
                            <button onClick={handleEdit}>Save</button>
                            <button onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}