import { Outlet, Link } from "react-router-dom";
function Layout() {
    return (
        <>
            <header className="flex flex-col">
                <p className="text-2xl font-bold text-[#F45B69]">ACF</p>
                <nav className="flex flex-col">
                <Link to="">Notas</Link>
                <Link to="">Juegos</Link>
                </nav>
            </header>
            <Outlet/>
        </>
    );
}

export default Layout;
