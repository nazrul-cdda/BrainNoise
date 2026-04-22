
import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Login } from "../pages/Login";
import { MyPosts } from "../pages/MyPosts";
import { AllPosts } from "../pages/AllPosts";
import { Register } from "../pages/Register";
import { VoiceRoom } from "../pages/VoiceRoom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "myposts",
                element: <MyPosts />
            },
            {
                path: "allposts",
                element: <AllPosts />
            },
            {
                path: "registration",
                element: <Register />
            },
            {
                path: "voiceroom",
                element: <VoiceRoom />
            }
        ]
    }
])
