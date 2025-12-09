import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from "../context/CartContext";
import styled from 'styled-components';
import { FaShoppingCart } from "react-icons/fa";/* Lo traigo de la pagina react-icons, para el icono que elegí(carrito) */

function Navbar() {
  const { usuario, isAuthenticated, cerrarSesion } = useAuthContext();
  const {carrito, vaciarCarrito } = useCartContext();
  const navigate = useNavigate();

  //Para computar el contador que aparece en el CARRITO
  const totalItemsCarrito = carrito.reduce((total, item) => total + item.cantidad, 0);
 
  const manejarCerrarSesion = () => {
    navigate("/productos");
    // Tiempo 1'' para asegurar la navegación
    setTimeout(() => {
      vaciarCarrito();
      cerrarSesion();
    }, 100);
  };

  return (
    
      <>
       
        
          <hr />
          <nav className='navContainer navBar'  >
                <div className='navbar'>
                     {/*  <li className='nav-item'><Link to="/" >Inicio</Link></li>              
                      <li className='nav-item'><Link to="/productos">Productos</Link></li>
                      <li className='nav-item'><Link to="/nosotros">Nosotros</Link></li> */}
                      <NavLink className='nav-item'  to="/" >Inicio</NavLink>           
                      <NavLink className='nav-item' to="/productos">Productos</NavLink>
                      <NavLink className='nav-item' to="/nosotros">Nosotros</NavLink>


                    {/*  {usuario?.nombre === "admin" && (
                        <li className='nav-item'>
                          <Link to="/formulario-producto">Agregar Producto</Link>
                        </li>
                      )} */}
                </div>
                
                  
                    <SeccionUsuario >
                      {usuario?.nombre != "admin" && ( <IconoCarrito to="/carrito" className="nav-link d-flex align-items-center">
                          <span id='carrito' className="me-1">Carrito</span>
                          <FaShoppingCart />

                        {totalItemsCarrito > 0 && (
                        <ContadorCarrito>{totalItemsCarrito}</ContadorCarrito>)}
                        </IconoCarrito>) }            
                      
                      
                          {isAuthenticated ? (
                            <ContenedorUsuario className='d-flex align-items-center gap3'>
                              <Bienvenida>Hola, {usuario.nombre}</Bienvenida>
                            
                              {usuario.nombre === "admin" && (
                                <NavLinkAdmin to="/dashboard">Dashboard</NavLinkAdmin>
                              )}

                              <BotonCerrarSesion onClick={manejarCerrarSesion}>
                                Cerrar Sesión
                              </BotonCerrarSesion>
                            </ContenedorUsuario>
                          ) : (
                            <NavLinkSesion id='iniciar-sesion-nav' to="/iniciar-sesion">Iniciar Sesión</NavLinkSesion>
                          )}
                    </SeccionUsuario>
                  
          </nav>
        <hr />
    </>
  )
} export default Navbar;

// Styled Components actualizados


const NavbarContainer = styled.nav`
  background-color: #556B2F !important;
  padding: 0.5rem 1rem;
`;

const NavbarSpacer = styled.div`
  height: 80px;

  @media (max-width: 991.98px) {
    height: 76px;
  }
`;

const Logo = styled(Link)`
  color: white !important;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
 
  &:hover {
    color: white !important;
  }
`;

// NavLink normal (para usuarios)
const NavLink = styled(Link)`
  color: #ef7008ff !important;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 1rem;
 
  &:hover {
    color: white !important;
     
    background-color: #c6851eff !important;
    padding: .5rem 1rem;
      
  }
`;
const NavLinkSesion = styled(Link)`
  color: white !important;
  background: green;
  padding: 1rem;
  text-decoration: none;

  &:hover {
  color: yellow !important;
  text-decoration: underline;
  }
`;

// NavLink especial para admin
const NavLinkAdmin = styled(Link)`
  color: black !important;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
 
  &:hover {
    color: gold !important;
    text-decoration: underline;
  }
`;

const Bienvenida = styled.span`
  color: #dd6113ff;
  font-weight: bold;
  font-size: 0.9rem;
  margin: 0;
  white-space: nowrap;

  @media (max-width: 991.98px) {
    margin-bottom: 0.5rem;
  }
`;

const BotonCerrarSesion = styled.button`
  background: #dd6113ff;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  white-space: nowrap;
 
  &:hover {
    background: white;
    color: #556B2F;
  }

  @media (max-width: 991.98px) {
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const ContenedorCarrito = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const IconoCarrito = styled(Link)`
  color: green !important;
  text-decoration: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 1rem;
  gap: 5px;
 
  &:hover {
    color: brown !important;
  }
`;

const ContadorCarrito = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`;

const SeccionUsuario = styled.div`
  display: flex;
 /*  gap: 1rem; */
  align-items: center;

  @media (max-width: 991.98px) {
    flex-direction: column;
    gap: 0.5rem;
    /* margin-top: 1rem; */
    width: 100%;
  }
`;

const ContenedorUsuario = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 991.98px) {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
`;