import { useState } from "react";

export default function App() {
  const [pelicula, setPelicula] = useState("");
  const [ListaPeliculas, setListaPeliculas] = useState([]);

  const handleChange = (e) => {
    setPelicula(e.target.value);
  };

  const agregarPelicula = () => {
    setListaPeliculas((prevPeliculas) => [...prevPeliculas, pelicula]);
    setPelicula("");
  };

  return (
    <div>
      <p>Lista de películas</p>
      <input
        type="text"
        name="name"
        value={pelicula}
        onChange={handleChange}
        placeholder="Película"
      />
      <button onClick={agregarPelicula}>Agregar Película</button>

      <ul style={{ listStyle: "none" }}>
        {ListaPeliculas.map((pelicula) => (
          <li key={pelicula}>{pelicula}</li>
        ))}
      </ul>
    </div>
  );
}
