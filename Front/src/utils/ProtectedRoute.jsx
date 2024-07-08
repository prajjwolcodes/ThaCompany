import { Navigate, Route } from "react-router-dom"

const ProtectedRoute = ({ element: Element, ...rest }) => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (!user)
        return
    if (user.role !== "admin ")
        return <Navigate to="/login" />

    return <Route {...rest} element={<Element />} />
}

export default ProtectedRoute