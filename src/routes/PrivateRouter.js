import { Navigate } from "react-router-dom"

export const PrivateRouter = ({ children, autenticado }) => {
  return autenticado ? children : <Navigate to="/login" replace />
}
