import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Courses from "../components/Courses.jsx";
import Mentor from "../components/Mentor.jsx";
import SignIn from "../components/SignIn.jsx";
import Login from "../components/Login.jsx";
import Profile from "../components/Profile.jsx";



const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>} />
            <Route path="courses" element={<Courses/>} />
            <Route path="mentor" element={<Mentor/>} />
            <Route path="signin" element={<SignIn/>} />
            <Route path="login" element={<Login/>} />
            <Route path="/profile" element={<Profile />} />
        </Route>
    )
)
export default Router;