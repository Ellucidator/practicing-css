import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

export function HeaderLayout() {
    return (
        <>
            <Header />
            <Outlet />
            
            <footer>

            </footer>
        </>
    )
}