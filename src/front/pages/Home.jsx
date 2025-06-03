import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom";

export const Home = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("https://refactored-bassoon-g47p4rj6vx4qhpvr4-3001.app.github.dev/api/user/login",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email, password }),
				});

				if (response.ok) {
					const data = await response.json();
					localStorage.setItem("token", data.token); //Guardado de Token
					localStorage.setItem("username", data.user.name); //Nombre usuario para renderizar al iniciar sesión
					navigate("/privatepage");
				} else {
					const errorData = await response.json();
					alert ("Error al iniciar sesión: " + errorData.message);
				}
		} catch (error) {
			console.error("Error en login:", error);
			alert("A ocurrido un error al inicias sesión.");
		}
	};

	return (
		<>
			<div>
				<h1>Iniciar Sesion</h1>
			</div>
			<div>
				<form onSubmit={handleLogin}>
					<div>
						<label>Email</label>
						<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
					</div>
					<div>
						<label>Contraseña</label>
						<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
					</div>
					<div>
						<button type="submit">Iniciar sesión</button>
					</div>
				</form>
				<div>
					<Link to="/createuser"><p>Crear Usuario</p></Link>
				</div>
			</div>
		</>
	);
}; 




//Quería hacer la pagína más bonita pero no me daba el tiempo, no obstante he practicado mucho el uso de CSS y bootstrap en otros proyectos

//En este proyecto me he centrado en Crear Usuarios y abrir/cerrar sesión

//He borrado todos los usuarios creados en las pruebas asíque puedes crear uno directamente al abrir la pagina