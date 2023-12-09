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
                    <Link to="/">Home</Link>
                    <Link to="/">Sobre</Link>
                    <Link to="/">Equipe</Link>
                    <Link to="/">Serviços</Link>
                    <Link to="/">Fotos</Link>
                    <Link to="/">Contato</Link>
                </nav>
            </div>
            <button onClick={()=>handleClick()}>⇊</button>
        </header>
    )
}