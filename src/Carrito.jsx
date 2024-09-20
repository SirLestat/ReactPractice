import { useState } from "react";

export default function Carrito() {
  const [producto, setProducto] = useState({
    nombre: "",
    precio: 0,
    cantidad: 0,
  });

  const [carrito, setCarrito] = useState([]);

  const handleInputChange = (e) => {
    setProducto((prevProducto) => ({
      ...prevProducto,
      [e.target.name]: e.target.value,
    }));
  };

  const agregarProducto = (e) => {
    e.preventDefault();
    setCarrito([...carrito, producto]);
    setProducto("");
  };

  return (
    <div>
      <form onSubmit={agregarProducto}>
        <input
          name="nombre"
          type="text"
          value={producto.nombre}
          onChange={handleInputChange}
          placeholder="Nombre del producto"
        />
        <input name="precio" type="number" placeholder="Precio" />
        <input name="cantidad" type="number" placeholder="Cantidad" />
        <button type="submit">Agregar producto</button>
      </form>

      <ul>
        {carrito.map((producto) => (
          <li key={producto.nombre}>
            {producto.nombre} {producto.precio} {producto.cantidad}
          </li>
        ))}
      </ul>
    </div>
  );
}
