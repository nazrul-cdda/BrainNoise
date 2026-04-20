import { Link, Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { useState, useEffect } from "react"
import { PostContext } from "./PostContext"


export const App = () => {
  const[currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('currentUser');
    return saved ? JSON.parse(saved) : {userName: "", password: ""};
  })
  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  },[currentUser]);

  const[user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved? JSON.parse(saved):[];
  });
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  },[user]);

  const[post, setPost] = useState(() => {
    const saved = localStorage.getItem('post');
    return saved ? JSON.parse(saved): [];
  });
  useEffect(() => {
    localStorage.setItem('post', JSON.stringify(post));
  }, [post]);

  return (
    <PostContext.Provider value = {{post, setPost, user, setUser, currentUser, setCurrentUser}}>
        <div>
          <Navbar />
          <Outlet />
        </div>
    </PostContext.Provider>
  )
}
