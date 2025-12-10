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
                    
                    <h1 className='header_tit' style={{fontWeight: "bold", color: "orange"}}>Great</h1>
                    <img id='cucharon' src="img/cucharones_mini.jpg" alt="cucharones" />
                    <img id='cucharon2' src="img/cucharones_mini..jpg" alt="cucharones" />
                    <h1 className='header_tit' style={{fontWeight: "bold", color: "orange"}}>Food</h1>
                   
                    

                </div>
            
        </header> 
     </>
    )
} export default Header;