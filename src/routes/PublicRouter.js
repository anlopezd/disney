import { Navigate } from "react-router-dom"


export const PublicRouter = ({ children, autenticado }) => {
    return !autenticado ? children : <Navigate to="/" replace />
}