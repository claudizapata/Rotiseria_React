import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import styled from 'styled-components';

export default function IniciarSesion() {
  const { iniciarSesion } = useAuthContext();
  const navigate = useNavigate();
  const ubicacion = useLocation();

  const [formulario, setFormulario] = useState({ nombre: "", email: "" });

  const manejarEnvio = (e) => {
    e.preventDefault();
    
    // Verificar credenciales (admin/1234@admin)
    if (formulario.nombre === "admin" && formulario.email === "1234@admin") {
      // Guarda el email ingresado y pasa nombre para el token admin
      localStorage.setItem("authEmail", formulario.email);
      iniciarSesion("admin");
      navigate("/dashboard");
    }
    // Lógica para usuarios normales - SOLO si NO es admin
    else if (
      formulario.nombre &&
      formulario.email &&
      formulario.nombre !== "admin"
    ) {
  // Guarda el email ingresado y pasa nombre para el token user
  localStorage.setItem("authEmail", formulario.email);
  iniciarSesion(formulario.nombre);

      // Si venía del carrito, redirige a pagar
      if (ubicacion.state?.carrito) {
        navigate("/pagar", { state: { carrito: ubicacion.state.carrito } });
      } else {
        navigate("/productos");
      }
    } else {
      alert(
        "Credenciales de administrador incorrectas. Usa: admin / 1234@admin"
      );
    }
  };

  return (
    <PanelIniciarSesion className='container my-4 p-5' id="panel-sesion">
      <h3 className=" p-3" id="titulo-sesion">Inicia sesión para continuar</h3>
      <form onSubmit={manejarEnvio}>
        <input className="me-2"
          type="text"
          placeholder="Nombre completo"
          value={formulario.nombre}
          onChange={(e) =>
            setFormulario({ ...formulario, nombre: e.target.value })
          }
          required
        />
        <input className="me-2"
          type="email"
          placeholder="Email"
          value={formulario.email}
          onChange={(e) =>
            setFormulario({ ...formulario, email: e.target.value })
          }
          required
        />
        <ButtonSesion type="submit">Iniciar Sesión</ButtonSesion>
        <strong> </strong>
        <ButtonSesion type="button" onClick={() => navigate("/productos")}>
          Cancelar
        </ButtonSesion>
      </form>
      {/* <p style={{ marginTop: "20px", fontSize: "12px", color: "#666" }}>
        <strong>Credenciales de prueba para Dashboard:</strong>
        <br />
        Nombre: admin
        <br />
        Email: 1234@admin
      </p> */}
    </PanelIniciarSesion>
  );
}

const PanelIniciarSesion = styled.div`
  background: #fbf3ebff;
  color: black;
  border: 2px solid black;
  border-radius: 7px;
 `

const ButtonSesion = styled.button`
  padding: .5rem;
  border: 2px solid black;
  border-radius: 10px;

`
 