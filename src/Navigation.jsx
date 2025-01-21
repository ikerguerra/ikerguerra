import React, { useEffect, useState } from "react";

// Importacion para desplegar el menu en Responsive
import { Collapse } from 'bootstrap';

export function Navigation() {
    
    const [scrollTop, setScrollTop] = useState(0);
    const [isScrolling, setIsScrolling] = useState('');
    const [isScrollingUp, setIsScrollingUp] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;

            if(currentScroll > 80) {
                if (currentScroll > scrollTop) {
                    setIsScrolling('scrolling');
                    setIsScrollingUp('');
                } else {
                    setIsScrollingUp('up');
                }
            } else {
                setIsScrolling('');
                setIsScrollingUp('');
            }
    
            setScrollTop(currentScroll);
        })

    }, [scrollTop])

    return (
        <div className={`smart-scroll ${isScrolling} ${isScrollingUp}`} >
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-dark">
                    <a className="navbar-brand heading-black" href="index.php">
                        IKER GUERRA
                    </a>
                    <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fa-solid fa-burger fa-xl"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#inicio">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#sobremi">Sobre mí</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#proyectos">Proyectos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#contacto">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll d-flex flex-row align-items-center text-primary" href="https://www.linkedin.com/in/iker-guerra-mielgo">
                                    <em data-feather="layout" width="18" height="18" className="mr-2"></em>
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}