import { Outlet } from "react-router";
import Header from "../components/Header";
import AuthSideBar from "./components/AuthSideBar";

const AuthLayout = () => {
    return (
        <div>
            <Header/>
            <AuthSideBar/>
            <div className="container">
                <Outlet/>
            </div>
        </div>
    );
}

export default AuthLayout;
