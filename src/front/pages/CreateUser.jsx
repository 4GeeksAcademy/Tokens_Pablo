import React from 'react'
import { Link } from 'react-router-dom'

export const CreateUser = () => {
    return (
        <>
            <div>
                <div>
                    <h1>Crear Usuario</h1>
                </div>
                <form>
                    <div>
                        <label>Nombre Usuario</label>
                        <input type='text' required />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='text' required />
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type='password' />
                    </div>
                    <div>
                        <button>Crear Usuario</button>
                        <Link to="/"><p>Volver a "Iniciar Sesion"</p></Link>
                    </div>
                </form>
            </div>
        </>
    )
}
