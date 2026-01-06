import Recat from 'react';
import { PrivateRoutes } from './PrivateRoutes';
import Home from '../Pages/Home/Home';
export const ProtectedRoutes=[
    {
        path:'/home',element:(
            <PrivateRoutes>
                <Home/>
            </PrivateRoutes>
        )
    }
]