import { Outlet } from "react-router-dom";
import { Footer, Header } from "../componets";


const MainLayout = () => {
    return (
        <div>
            Main Layout
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
};

export { MainLayout };