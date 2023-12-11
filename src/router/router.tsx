import { createBrowserRouter } from "react-router-dom";
import { HeaderLayout } from "../layouts/HeaderLayout";
import { Home } from "../pages/home/Home";
import RegistrationPage from "../pages/register/RegistrationPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HeaderLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/register',
                element: <RegistrationPage />
            }
        ]
    }
])


export default router