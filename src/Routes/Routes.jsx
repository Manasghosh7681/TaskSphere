import { createBrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./PublicRoute";
import { ProtectedRoutes } from "./ProtectedRoutes";
export const Routes=createBrowserRouter([
    
        ...PublicRoutes,
        ...ProtectedRoutes,
    
])

