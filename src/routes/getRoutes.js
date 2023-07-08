import { Navigate } from "react-router-dom";
import Login from "../components/Login/Login";
import Movies from "../components/Movies/Movies";
import NotFound from "../components/NotFound/NotFound";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
import SavedMovies from "../components/SavedMovies/SavedMovies";

export const getRoutes = () => { 

 const AUTHTORIZED_ROUTES = [
    {path: '/movies', element:  <Movies/>},
    {path: '/saved-movies', element:  <SavedMovies/>},
    {path: '/profile', element:  <Profile/>},
 ]

 const UNAUTHTORIZED_ROUTES = [
    {path: '/signin', element: <Login/> },
    {path: '/signup', element:  <Register/>},
    {path: '*', element:  <Navigate to='/'/>},
]

return { AUTHTORIZED_ROUTES, UNAUTHTORIZED_ROUTES }
}