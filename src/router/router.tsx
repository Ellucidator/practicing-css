import { createBrowserRouter } from "react-router-dom";
import { HeaderLayout } from "../layouts/HeaderLayout";
import { Home } from "../pages/home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HeaderLayout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
])


export default router