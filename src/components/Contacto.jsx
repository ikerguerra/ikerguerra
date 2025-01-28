import React from 'react'

export const Contacto = () => {
    return (
        <form>
            <div className='d-flex row'>
                <div className="mb-3 col-6">
                    <label htmlFor="inputNombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="inputNombre" placeholder='Nombre' />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="inputApellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="inputApellido" placeholder='Apellido' />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" placeholder='email@email.com' />
            </div>
            <div className="mb-3">
                <label htmlFor="textAreaMensaje" className="form-label">Mensaje</label>
                <textarea className='form-control' name="mensaje" id="textAreaMensaje" placeholder='Escribe tu mensaje' rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}
