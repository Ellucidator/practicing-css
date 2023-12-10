import { Link } from "react-router-dom";
import './header.css'
import logoMarca from './img/logo-marca.gif'
import { useState } from "react";

export default function Header() {
    const [headerContainer, setHeaderContainer]= useState('header-container')
    const [classNav, setClassNav] = useState('nav-container')
    const [bodyHeader, setBodyHeader] = useState('body-header')
    function handleClick(){
        if(headerContainer === 'header-container'){
            setHeaderContainer('header-container-minimized')
            setClassNav('nav-container-minimized')
            setBodyHeader('body-header-minimized')
        }
        else{
            setHeaderContainer('header-container')
            setClassNav('nav-container')
            setBodyHeader('body-header')
        }
    }
    return (
        <header className={bodyHeader}>
            <div className={headerContainer}>
                <Link to="/" className="logo">
                    <img src={logoMarca} alt="logo marca" />
                </Link>
                <nav className={classNav}>
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/" className="nav-item">Sobre</Link>
                    <Link to="/" className="nav-item">Equipe</Link>
                    <Link to="/" className="nav-item">Serviços</Link>
                    <Link to="/" className="nav-item">Fotos</Link>
                    <Link to="/" className="nav-item">Contato</Link>
                </nav>
            </div>
            <button onClick={()=>handleClick()} className="button-header">≡</button>
        </header>
    )
}