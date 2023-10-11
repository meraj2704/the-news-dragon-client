import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main";
import Category from "../Pages/Home/Category";
import DetailsNewsLayout from "../LayOuts/DetailsNewsLayout";
import News from "../Pages/News/News";
import Profile from "../LayOuts/Profile";
import LoginLayouts from "../LayOuts/LoginLayouts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRout from "./PrivateRout";
import Terms from "../Pages/Shared/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayouts></LoginLayouts>,
        children: [
            {
                path: '/',
                element: <Navigate to="/categories/0"></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element:<Terms></Terms>
            }
        ]
    },
    {
        path: 'categories',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }

        ]

    },
    {
        path: 'news',
        element: <DetailsNewsLayout></DetailsNewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRout><News></News></PrivateRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
    
])

export default router;