import { Link } from "react-router-dom";
import './header.css'
import logoMarca from './img/logo-marca.gif'
import logoMarcaWhite from './img/logo-marca-white.gif'
import { useState } from "react";

export default function Header() {
    const [headerContainer, setHeaderContainer]= useState<string>('header-container')
    const [classNav, setClassNav] = useState<string>('nav-container')
    const [bodyHeader, setBodyHeader] = useState<string>('body-header')
    const [logoHeader, setLogoHeader] = useState<string>(logoMarca)
    const [buttonTheme, setButtonTheme] = useState<string>('button-theme dark')
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
    function handleClickTheme(){

        if(buttonTheme === 'button-theme dark'){
            setButtonTheme('button-theme white')
            document.documentElement.style.setProperty('--primary', '#EDEDED')
            document.documentElement.style.setProperty('--tertiary', 'black')
            document.documentElement.style.setProperty('--design-bg', 'url(./design-bg-white.png)')
            setLogoHeader(logoMarcaWhite)
        }
        else{
            setButtonTheme('button-theme dark')
            document.documentElement.style.setProperty('--primary', '#111111')
            document.documentElement.style.setProperty('--tertiary', '#ffffff')
            document.documentElement.style.setProperty('--design-bg', 'url(./design-bg.png)')
            setLogoHeader(logoMarca)
        }
    }
    return (
        <header className={bodyHeader}>
            <div className={headerContainer}>
                <Link to="/" className="logo">
                    <img src={logoHeader} alt="logo marca" />
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
            <button className="button-theme" onClick={()=>handleClickTheme()}>Dark/white</button>
            <button onClick={()=>handleClick()} className="button-header">≡</button>
        </header>
    )
}