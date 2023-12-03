import { Outlet } from "react-router-dom";

import { Footer, Header } from "../componets";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
};

export { MainLayout };