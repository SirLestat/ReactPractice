import { useState } from "react";

export default function FormularioSimple() {
  const [nombre, setNombre] = useState("");
  const [listaNombres, setListaNombres] = useState([]);

  const handleInputChange = (evento) => {
    setNombre(evento.target.value);
  };

  const agregarNombre = (evento) => {
    evento.preventDefault();

    setListaNombres([...listaNombres, nombre]);

    setNombre("");
  };

  const eliminarNombre = (nombreAEliminar) => {
    const nuevosNombres = listaNombres.filter(
      (nombre) => nombre !== nombreAEliminar
    );
    setListaNombres(nuevosNombres);
  };

  return (
    <div>
      <form onSubmit={agregarNombre}>
        <input
          name={nombre}
          type="text"
          value={nombre}
          onChange={handleInputChange}
          placeholder="Ingresa tu nombre"
        />
        <button type="submit">Agregar</button>
      </form>

      <ul style={{ listStyle: "none" }}>
        {listaNombres.map((nombre) => {
          return (
            <li key={nombre} style={{marginBottom: "10px"}}>
              <button
                style={{
                  color: "white",
                  backgroundColor: "red",
                  borderRadius: "10px",
                  marginRight: "10px",
                }}
                onClick={() => eliminarNombre(nombre)}
              >
                x
              </button>
              {nombre}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
