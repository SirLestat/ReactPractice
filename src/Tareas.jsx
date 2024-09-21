import { useState } from "react";

export default function TaskList() {
  const [task, setTask] = useState({
    tarea: "",
    isComplete: false,
  });

  const [lista, setLista] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTask({ ...task, [name]: value });
  };

  const addTask = (event) => {
    event.preventDefault();

    if (!lista.includes(task)) {
      setLista([...lista, task]);
    } else return console.log("ya en la lista");

    setTask({
      tarea: "",
      isComplete: false,
    });
  };

  const deleteTask = (eliminarTarea) => {
    const nuevalista = lista.filter(( tarea) => tarea !== eliminarTarea);
    setLista(nuevalista);
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input
          name="tarea"
          type="text"
          placeholder="Tarea"
          value={task.tarea}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {lista.map((task) => {
          return (
            <li key={task.tarea}>
              <button onClick={() => deleteTask(task)}>x</button>
              {task.tarea}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
