import { Link, useNavigate } from "react-router-dom";
import CarritoCompras from "./Carrito";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import { useProducts } from "../context/ProductsContext";
/* import styled from 'styled-components';
 */
export default function Productos() {
  const { productos, cargando, error } = useProducts();
  const { agregarAlCarrito } = useCartContext();
  const { esAdmin } = useAuthContext();
  const navigate = useNavigate();

  const manejarEliminar = (producto) => {
    // Navegar a la página de confirmación de eliminación
    navigate('/eliminar-producto', { state: { producto } });
  };

  const manejarEditar = (producto) => {
    // Navegar al formulario de edición
    navigate('/formulario-producto', { state: { producto } });
  };

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div id="lista-productos" className="mt-3">
        {productos.map((producto) => (
          <ProductoItem
            key={producto.id}
            producto={producto}
            esAdmin={esAdmin}
            onEditar={() => manejarEditar(producto)}
            onEliminar={() => manejarEliminar(producto)}
            onAgregarCarrito={() => agregarAlCarrito(producto)}
          />
        ))}
      </div>
{/*  <CarritoCompras /> */}
    </>
  );
}
const ProductoItem = ({ producto, esAdmin, onEditar, onEliminar, onAgregarCarrito }) => (
  <div className="col-12 col-md-6 col-lg-4 bg-light mx-4 m-1 p-2 card-body">
    <img src={producto.avatar} alt={producto.nombre} width="80%" />
    <p className="h4">{producto.nombre}</p>
    <p>{producto.descripcion}</p>
    
    <p><strong>$ {producto.precio}</strong></p>
   
    <Link to={`/productos/${producto.id}`} state={{producto}}><button>Más detalles</button></Link>
   
    <button onClick={onAgregarCarrito}>Comprar</button>

    {/* BOTONES ADMIN - Agregar contenedor */}
    {esAdmin && (
      <div>
        
        <button onClick={onEditar} className="btn-editar">
          Editar
        </button>
        <button onClick={onEliminar} className="btn-eliminar">
          Eliminar
        </button>
        <hr />
      </div>
     
    )}
  </div>
);
/* https://www.themealdb.com/images/category/vegetarian.png */
