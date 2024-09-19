import { useState } from "react";

export default function Carrito() {
  const producto = {
    nombre: "",
    precio: 0,
    cantidad: 0,
  };

  const [carrito, setCarrito] = useState([producto]);
  const [total, setTotal] = useState(0);

  const agregarProducto = (e) => {
    setCarrito([...carrito, { nombre: e.target.value }]);
  };

  return (
    <div>
      <form>
        <input
          name={producto.nombre}
          type="text"
          placeholder="Nombre del producto"
        />
        <input name="precio" type="number" placeholder="Precio" />
        <input name="cantidad" type="number" placeholder="Cantidad" />
        <button type="submit" onSubmit={agregarProducto}>
          Agregar producto
        </button>
      </form>

      <ul>
        {carrito.map((producto) => (
          <li key={producto.name}>
            {producto.name} {producto.precio} {producto.cantidad}
          </li>
        ))}
      </ul>
    </div>
  );
}
