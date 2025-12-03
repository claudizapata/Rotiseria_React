import React from 'react';


function Header() { 

   /*  const navigate = useNavigate();//Hook para navegar entre rutas */
    return (
     <>
        <header //archivo css inline (en la misma línea del HEADER)
         //en .jsx es con camelcase el nombre de la propiedad
         //en .jsx los valores van entre comillas
         >
                <div className='header_box'>
                    {/* <button className='boton_login' 
                    onClick={() => navigate ("/IniciarSesion")}>
                        Login
                    </button> */}
                    
                    <h1 className='header_tit' style={{fontWeight: "bold", color: "orange", fontSize:'4rem',
                        /* backgroundColor: "#ccaa8dff", */ width: "100%"}}>Food <img id='cucharon' src="img/cucharones_mini.gif" alt="cucharones" /> Great</h1>
                   
                    

                </div>
            
        </header> 
     </>
    )
} export default Header;