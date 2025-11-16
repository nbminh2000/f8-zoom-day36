import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "./Footer";

const DefaultLayout = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <Outlet/>
            </div>
            <Footer/>
            
        </div>
    );
}

export default DefaultLayout;
