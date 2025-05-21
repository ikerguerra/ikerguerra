import React, { useState } from 'react'

export const Proyectos = () => {

    const [proyectos, setProyectos] = useState([{
        nombre: 'Mundo Zapas',
        descripcion: 'Aplicación web para un ecommerce de zapatillas',
        imagen: 'mundozapas.png',
        tecnologias: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
        urlWeb: 'https://mundozapas.ct.ws',
        gitHub: 'https://github.com/ikerguerra/mundozapas'
    }, {
        nombre: 'Gif Expert App',
        descripcion: 'Aplicación web diseñada para buscar GIFs según la categoría introducida por el usuario',
        imagen: 'gifexpertapp.png',
        tecnologias: ['HTML', 'CSS', 'JavaScript', 'React', 'Giphy API'],
        urlWeb: 'https://ikerguerra.github.io/react-gifexpert',
        gitHub: 'https://github.com/ikerguerra/react-gifexpert'
    }]);

    return (
        <div className="row">
            {
                proyectos.map((proyecto) =>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <div class="tarjeta card h-100 bg-gradient">
                            <img src={`${proyecto.imagen}`} class="card-img-top" alt="Tienda Mundo Zapas" />
                            <div class="card-body">
                                <h4 className="heading-black text-center">{proyecto.nombre}</h4>
                                <p class="card-text text-center">{proyecto.descripcion}</p>
                                <div className="etiquetas d-flex justify-content-center gap-2 flex-wrap">
                                    {
                                        proyecto.tecnologias.map(tecnologia =>
                                            <span className="badge rounded-pill bg-primary">{tecnologia}</span>
                                        )
                                    }
                                </div>
                            </div>

                            <div className="enlaces m-3 d-flex justify-content-center gap-4">
                                <a className='' href={`${proyecto.urlWeb}`}>
                                    <i className="fa-solid fa-globe fa-2x text-white"></i>
                                </a>
                                <a className='' href={`${proyecto.gitHub}`}>
                                    <i className="fa-brands fa-github fa-2x text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        
    )
}
