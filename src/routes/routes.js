import Login from "../components/Login/Login";
import Main from "../components/Main/Main";
import Movies from "../components/Movies/Movies";
import NotFound from "../components/NotFound/NotFound";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
import SavedMovies from "../components/SavedMovies/SavedMovies";

export const AUTHTORIZED_ROUTES = [
    {path: '/', element: <Main/> },
    {path: '/signin', element: <Login/> },
    {path: '/signup', element:  <Register/>},
    {path: '/movies', element:  <Movies/>},
    {path: '/saved-movies', element:  <SavedMovies/>},
    {path: '/profile', element:  <Profile/>},
    {path: '*', element:  <NotFound/>},
    
]

export const UNAUTHTORIZED_ROUTES = [
    {path: '/', element: <Main/> },
    {path: '/signin', element: <Login/> },
    {path: '/signup', element:  <Register/>},
    {path: '*', element:  <Login/>},
]