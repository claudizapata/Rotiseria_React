import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function CarritoCompras() {
  const { carrito, vaciarCarrito, agregarCantidad, quitarCantidad, total  } = useCartContext();

  const navigate = useNavigate();

  const irAPagar = () => {
    navigate("/pagar", { state: { carrito } });
  };

  return (
    <div className="carrito-listado">
      <hr />
      <h3>Carrito de Compras</h3>
      <hr />
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {carrito.map((item) => (
            <div id="fila-carrito" key={item.id}>
              
                {item.nombre}   |   $ {Number(item.precio).toFixed(2)}

                <div className="botones-mas-menos">
                   <button className="mas-menos" onClick={() => quitarCantidad(item.id)}>-</button>
                    {item.cantidad || 1}
                  
                    <button className="mas-menos" onClick={() => agregarCantidad(item.id)}>+</button>                  
                </div>
                
            </div>
          ))}
          <div>
            <hr />
            Total: $ {Number(total).toFixed(2)}
          </div>
          <div className="my-5">
             <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            <button onClick={irAPagar}>Pagar</button>

          </div>
         
        </>
      )}
    </div>
  );
}