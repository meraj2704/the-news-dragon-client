import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main";
import Category from "../Pages/Home/Category";
import DetailsNewsLayout from "../LayOuts/DetailsNewsLayout";
import News from "../Pages/News/News";
import Profile from "../LayOuts/Profile";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Category></Category>,
                loader: ()=> fetch('http://localhost:5000/news')
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
        
    },
    {
        path:'news',
        element:<DetailsNewsLayout></DetailsNewsLayout>,
        children:[
            {
                path:':id',
               element:<News></News>,
               loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    },
    {
        path:'profile',
        element:<Profile></Profile>
    }
])

export default router;