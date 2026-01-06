import { Navigate } from "react-router-dom";
export const PrivateRoutes=({children})=>{
    const isValid=true
    return isValid?children: <Navigate to='/'/>
    
}