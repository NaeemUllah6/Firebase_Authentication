import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PublicRoutes from './publicRoutes'
import ProtectedRoutes from './protectedRoutes'

const Routes = () => {
    return (
        <BrowserRouter>
            <PublicRoutes />
            <ProtectedRoutes />
        </BrowserRouter>
    )
}
export default Routes