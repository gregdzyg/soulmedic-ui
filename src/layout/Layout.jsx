import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Layout = () => {
    return (
        <div className="d-flex flex-column min-vh-100 text-center">
            <header className="py-3 bg-light">
                <Navbar />
            </header>

            <main className="flex-grow-1 d-flex align-items-center justify-content-center bg-white">
                <Outlet />
            </main>

            <footer className="py-3 bg-light mt-auto">
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;