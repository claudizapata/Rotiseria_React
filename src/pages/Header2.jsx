import React from 'react';
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';


//LINK para turas ESTÁTICAS


function Header() {

    const { isAuthenticated, usuario, cerrarSesion} = useAuthContext();

   /*  const navigate = useNavigate();//Hook para navegar entre rutas */
    return (
     <>
        <header className='header_box' //archivo css inline (en la misma línea del HEADER)
         //en .jsx es con camelcase el nombre de la propiedad
         //en .jsx los valores van entre comillas
         >
               
                  {/* ENLACE PARA ADMIN - Solo visible para admin */}
                  <div>
                                  <li>
                                      { isAuthenticated? ( 
                                          <div>
                                              <span>Hola, {usuario.nombre} </span>
                  
                                              {/* ENLACE DASHBOARD solo para admin */}
                                              {usuario.nombre === "admin" &&(
                                                  <Link to="/dasboard" style={{margin: '0 10px'}} >
                                                      Dashboard Administrativo
                                                  </Link>
                                              )}
                                             
                                              <button onClick={cerrarSesion}>Cerrar Sesión</button>
                                          </div>
                                      ):(
                                          <Link to="/iniciarSesion" >Iniciar Sesión</Link>
                                      )}
                                  </li>
                                   {usuario?.nombre === "admin" && (
                                      <li>
                                          <Link to="/agregar-producto">Agregar Producto</Link>
                                      </li>
                                  )}

                  </div>
                                  
                    <div className='header_box'>
                            {/* <button className='boton_login' 
                            onClick={() => navigate ("/IniciarSesion")}>
                                Login
                            </button> */}
                            
                            <h1 style={{fontWeight: "bold", color: "orange", fontSize:'4rem',
                                /* backgroundColor: "#ccaa8dff", */ width: "100%"}}>Cook <img id='cucharon' src="img/cucharones_mini.gif" alt="cucharones" /> Great</h1>
                  </div>

                   
            
        </header> 
     </>
    )
} export default Header;