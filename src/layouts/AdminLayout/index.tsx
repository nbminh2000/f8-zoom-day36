import { Outlet } from "react-router";
import AdminFooter from "./components/AdminFooter";
import AdminSideBar from "./components/AdminSideBar";

const AdminLayout = () => {
    return (
        <div>
            <AdminSideBar/>
            <div className="container">
                <Outlet/>
            </div>
            <AdminFooter/>
        </div>
    );
}

export default AdminLayout;
