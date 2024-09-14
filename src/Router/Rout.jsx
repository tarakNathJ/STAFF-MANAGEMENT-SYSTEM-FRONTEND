


import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Component/Home";
import LogIn from "../Component/LogIn";
import Profile from "../Component/Profile";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [{
            path: '/',
            element: <Home />
        },
        {
            path: '/LogIn',
            element: <LogIn />
        }, {
            path: '/Profile',
            element: <Profile />
        }

        ]
    }
])

export default Router;