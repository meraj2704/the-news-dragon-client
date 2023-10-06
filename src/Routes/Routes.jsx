import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main";
import Category from "../Pages/Home/Category";
import DetailsNewsLayout from "../LayOuts/DetailsNewsLayout";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
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
        // children:[
        //     {
        //         path:'/:id',
        //         element:<News></News>
        //     }
        // ]
    }
])

export default router;