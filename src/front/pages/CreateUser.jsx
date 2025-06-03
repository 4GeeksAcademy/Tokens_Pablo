import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export const CreateUser = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleCreateUser = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://refactored-bassoon-g47p4rj6vx4qhpvr4-3001.app.github.dev/api/users/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: username,email, password })
            });

            if (response.ok) {
                alert("Usuario creado");
                navigate("/");
            } else {
                const errorData = await response.json();
                alert("Error al crear usuario:" + errorData.message);
            }
        } catch(error) {
            console.error("Error en la creación:", error);
            alert("A ocurrido un error al crear usuario.");
        }
    };

    return (
        <>
            <div>
                <div>
                    <h1>Crear Usuario</h1>
                </div>
                <form onSubmit={handleCreateUser}>
                    <div>
                        <label>Nombre de Usuario</label>
                        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
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
