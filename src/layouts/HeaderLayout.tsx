import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export function HeaderLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}