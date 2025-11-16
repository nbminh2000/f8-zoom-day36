import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "./Footer";

const DefaultLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <div className="flex-1">
                <Outlet/>
            </div>
            <Footer/>
            
        </div>
    );
}

export default DefaultLayout;
