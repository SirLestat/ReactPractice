import { useState } from "react";

export default function Carrito() {
  const [productos, setProductos] = useState({
    nombre: "",
    precio: "",
    cantidad: "",
  });

  const [carrito, setCarrito] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setProductos({ ...productos, [name]: value });
  };

  const agregarProducto = (e) => {
    e.preventDefault();
    setCarrito([...carrito, productos]);
    setProductos({
      nombre: "",
      precio: "",
      cantidad: "",
    });
  };

  const QuitarProducto = (productoAQuitar) => {
    const nuevoCarrito = carrito.filter(
      (producto) => producto !== productoAQuitar
    );
    setCarrito(nuevoCarrito);
  };

  return (
    <div>
      <form onSubmit={agregarProducto}>
        <input
          name="nombre"
          type="text"
          value={productos.nombre}
          onChange={handleInputChange}
          placeholder="Nombre del producto"
          autoComplete="off"
        />
        <input
          name="precio"
          type="number"
          placeholder="Precio"
          value={productos.precio}
          onChange={handleInputChange}
        />
        <input
          name="cantidad"
          type="number"
          placeholder="Cantidad"
          value={productos.cantidad}
          onChange={handleInputChange}
        />
        <button type="submit">Agregar producto</button>
      </form>

      <ul>
        {carrito.map((productos) => (
          <li key={productos.nombre}>
            <button onClick={() => QuitarProducto(productos)}>x</button>
            Producto: {productos.nombre} <br />
            Precio: $ {productos.precio} <br /> Cantidad: {productos.cantidad}
          </li>
        ))}
      </ul>
    </div>
  );
}
