
import { Link,  useLocation } from "react-router-dom";
import styled from 'styled-components';

const ProductoDetalle = () => {
 
    /* const { id } = useParams(); */
    const location = useLocation();
    const producto = location.state?.producto;
 
if (!producto) {
    return (
      <div>
        <p>No se pudo cargar el producto</p>
        <Link to="/productos">
          <button>Volver a Productos</button>
        </Link>
      </div>
    );
  }
  
    // if (!producto) {
    //     return (
    //         <div className="container-md py-3">
    //             <div className="alert alert-warning">
    //                 <h4>Producto no encontrado</h4>
    //                 <p>No se pudo cargar la información del producto</p>
    //                 <Link to="/carrito" className="btn btn-primary">
    //                     Volver a Productos
    //                 </Link>
    //             </div>
    //         </div>
    //     );
    // }
 
  return(
    <div className="container-md py-3"> {/* defino un container */}
      <h2 className="mb-3 fs-2">Detalles del Producto</h2>

      {/* Defino Fila superior para dividir en 2 columnas */}
      <div className="row align-items-start g-0 mb-4">

        {/* Columna para la imagen - IZQUIERDA (md-6) */}
        <div className="col-md-6"> {/* Indica que la columna ocupará 6 de las 12 columnas disponibles */}
          {/* El sistema de cuadrícula de Bootstrap divide el espacio horizontal en un total de 12 columnas. */}
            <div className="card border-0">
              <div className="card-body text-center p-2">
                <img className="img-fluid rounded w-80" src= {producto.avatar} alt= {producto.nombre} />
                {/* img-fluid hace que la imagen sea responsiva */}
              </div>
            </div>
        </div>

        {/* Columna para la información - DERECHA (md-6) */}
        <div className="col-md-5">
          <div className="card border-0">
            <div className="card-body p-1">

              <h4 className="card-body mb-2 bg-warning p-1 rounded">{producto.nombre}</h4>

              <div className="mb-2">
                <strong>Descripcion:</strong>
                <p className="card-text text-danger fw-bold">{producto.descripcion} </p>
              </div>

              <div className="mb-2">
                <strong>Categoría:</strong>
                <span className="badge bg-warning ms-3 p-2 fs-6">{producto.categoria} </span>
              </div>

              <div className="mb-3">
                <strong>Precio:</strong>
                <h5 className="text-success d-inline ms-1"> ${producto.precio} </h5>
              </div>
            </div>
          </div>
        </div>


      </div>
    {/* <ul>
        <li key={producto.id}>
            {producto.nombre}
            <br />
            <p><strong>Descripción: </strong>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <img src={producto.avatar} alt={producto.nombre} />
        </li>
          </ul> */}
        {/* <Link to={`/productos`}><button className="bg-secondary rounded text-white">Volver a Productos</button></Link> */}
        <Link to={`/productos`}>
          <BotonEstilizado>Volver a Productos</BotonEstilizado>
        </Link>
  
    </div>
  );
}; export default ProductoDetalle;

const BotonEstilizado = styled.button `
  background: white;
  color: black;
  border: 1px solid black;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background: #31312eff;
    color: white;
  }
    `;