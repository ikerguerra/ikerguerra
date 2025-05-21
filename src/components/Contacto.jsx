import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


export const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        message: ''
    });

    const form = useRef();
    
    const { name, lastName, email, message } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, {
                publicKey: process.env.PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("Email enviado correctamente");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Error al enviar el email. Inténtalo de nuevo");
                },
            );

        setFormData({
            name: '',
            lastName: '',
            email: '',
            message: ''
        });
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <div className='d-flex row'>
                    <div className="mb-3 col-6">
                        <label htmlFor="inputNombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="inputNombre" name='name' placeholder='Nombre' value={name} onChange={handleChange}/>
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="inputApellido" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="inputApellido" name='lastName' placeholder='Apellido' value={lastName} onChange={handleChange}/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" name='email' placeholder='email@email.com' value={email} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="textAreaMensaje" className="form-label">Mensaje</label>
                    <textarea className='form-control' name='message' id="textAreaMensaje" placeholder='Escribe tu mensaje' rows="5" value={message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            
            {/* Toast mensaje envio del correo */}
            <Toaster
                position="bottom-center"
                reverseOrder={true}
            />
        </>
    )
}
