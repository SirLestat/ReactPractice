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

    if (!lista.includes(task)) setLista([...lista, task]);
    setTask({
      tarea: "",
      isComplete: false,
    });
  };

  const deleteTask = (eliminarTarea) => {
    const nuevalista = lista.filter((tarea) => tarea !== eliminarTarea);
    setLista(nuevalista);
  };

  const completedTask = (task) => {
    const nuevalista = lista.map((item) =>
      item === task ? { ...item, isComplete: !item.isComplete } : item
    );
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
              <input
                type="checkbox"
                checked={task.isComplete}
                onChange={() => completedTask(task)}
              />
              <label
                style={{
                  textDecoration: task.isComplete ? "line-through " : "none",
                }}
              >
                {task.tarea}
              </label>
              <button
                style={{
                  marginLeft: "10px",
                  borderRadius: "10px",
                }}
                onClick={() => deleteTask(task)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
