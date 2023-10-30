import { Outlet } from "react-router-dom"
import Header from "../partials/Header"
import Footer from "../partials/Footer"
function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}
export default RootLayout
