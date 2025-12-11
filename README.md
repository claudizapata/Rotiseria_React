# React + Vite

PROYECTO "CARRITO DE COMPRAS de platos de comidas"
Este proyecto utiliza React.js. Se trata de una aplicación que consta de un Carrito de Compras de Comidas. La interfaz de usuario consume una API REST para obtener y mostrar una lista de platos de comida disponibles en un stock o inventario. El proceso de renderizado en React se encarga de mostrar los datos e imágenes de la API, que son de tipo JSON, de manera eficiente en el navegador del usuario.

Este proyecto consta de las siguientes pages: Header, NavBar, Inicio, Productos, DetalleProductos, Nosotros y Footer.

# Consumo de API:
A la API la creé con Mockapi.io, pero a las imágenes las obtuve de otra API relacionada con comidas: https://www.themealdb.com/api/json/v1/1/categories.php Esta API contiene imágenes de distintos platos de comida, con diversas categorías.

Con Mockapi.io, creé una API personalizada y edité los textos de forma alusiva a las imágenes obtenidas de la API externa. Consideré utilizar Mockapi.io como una manera más rápida de construir una API para probar el Frontend y el acceso a los datos. Asigné propiedades a cada comida: un "nombre", una "descripción", una "categoría", un "precio" y un "ID" (artículo), y pegué la URL de la imagen en la propiedad "avatar".

Este trabajo fue necesario porque la API de comidas original tiene todos los textos en inglés.# Rotiseria_React

Este desarrollo abarca: un CRUD de platos de comidas, al que tiene acceso el usuario "admin" (agregar nueva comida, eliminar, editar y consultar el listado de comidas almacenado en la BD externa). 
Los demás usuarios que ingresen al sitio tendrán acceso a: consultar los platos de comidas y comprar en la cantidad que elijan y luego "pagar" (el pago es ficticio).
La aplicación muestra cómo se incrementa el contador del carrito de compras.

# Diseño:
Esta aplicación reúne todas las variantes de diseño que nos ofrece REACT:
Mediante la instalación de "styled-components", "Bootstrap", y la utilización de íconos mediante la instalación de: react-icons
Además se utilizó: archivos App.css e index.css y "styles" definidos en algunos elementos de ciertos componentes.
