/**
 * 1. Lista de Contactos


Instrucciones:

- Crea un componente llamado `ContactList` que permita agregar, mostrar y eliminar contactos.
- Cada contacto debe tener nombre y número de teléfono.
- Implementa la funcionalidad para evitar duplicados basándote en el número de teléfono.
- Añade la capacidad de editar contactos existentes.


Elementos necesarios:

- Estado para el contacto actual y la lista de contactos.
- Formulario con inputs para nombre y teléfono.
- Función para manejar cambios en los inputs.
- Funciones para agregar, eliminar y editar contactos.
- Renderizado de la lista de contactos con opciones para editar y eliminar.
 */

import { useState } from "react";

export default function Contactos() {
  //Estado de la lista de contactos
  const [contacts, setContacts] = useState([]);
  //Estado de cada contacto
  const [contact, setContact] = useState({
    nombre: "",
    telefono: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setContact({ ...contact, [name]: value });
  };

  //Funcion que se ejecuta cuando se envia el formulario (e = evento de enviar formulario)
  const addContact = (e) => {
    //previene la recarga de la pagina
    e.preventDefault();

    //ejecuta la funcion para setear un nuevo objeto (contact) al arreglo [contacts]
    setContacts([...contacts, contact]);

    //reestablece el objeto a su valor inicial
    setContact({
      nombre: "",
      telefono: 0,
    });
  };

  const deleteContact = (deleteContact) => {
    const newContacts = contacts.filter((contact) => contact !== deleteContact);
    setContacts(newContacts);
  };

  return (
    <div>
      <form onSubmit={addContact}>
        <input
          type="text" //Tipo de dato que va recibir
          name="nombre" //Identificador estatico
          placeholder="Nombre de contacto" //Marca de agua en el campo
          autoComplete="off" //Desactiva autocompletado
          value={contact.nombre} //recibe el valor del estado de contact y lo sincroniza con value
          onChange={handleInputChange} // manejador de cambios por evento
        />

        <input
          type="number"
          name="telefono"
          placeholder="Teléfono"
          autoComplete="off"
          value={contact.telefono}
          onChange={handleInputChange}
        />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {contacts.map((contacto) => (
          <li key={contacto.telefono} style={{ listStyle: "none" }}>
            <input type="checkbox" value={contacto.name} />
            <label>
              {contacto.nombre} - {contacto.telefono}{" "}
              <button
                onClick={() => deleteContact(contacto)}
                style={{ marginLeft: "30px" }}
              >
                x
              </button>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
