function ListaTareas() {

  const tareas = [
    { id: 1, nombre: 'Estudiar React' },
    { id: 2, nombre: 'Terminar actividad' },
    { id: 3, nombre: 'Subir proyecto a GitHub' },
    { id: 4, nombre: 'Publicar en GitHub Pages' }
  ]

  return (
    <div className="tarjeta">
      <h2>Mis tareas</h2>

      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.nombre}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaTareas