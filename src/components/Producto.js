import React from "react";

const Producto = ({ producto, carrito, agregarProducto, productos }) => {
  const { nombre, precio, id } = producto;

  const seleccionarProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id);
    agregarProducto([...carrito, ...producto]);
  };
  // Eliminarun producto del carrito del
  const eliminarProducto = (id) => {
    const productos = carrito.filter((producto) => producto.id !== id);
    // Colocar los productos en el State de
    agregarProducto(productos);
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <h2>{precio}</h2>

      {productos ? (
        <button type="button" onClick={() => seleccionarProducto(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onclick={() => eliminarProducto(id)}>
          Eliminar
        </button>
      )}
    </div>
  );
};
export default Producto;
