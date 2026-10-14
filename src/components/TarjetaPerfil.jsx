function TarjetaPerfil({ nombre, carrera, semestre }) {
  return (
    <div className="tarjeta">
      <h2>{nombre}</h2>
      <p>Carrera: {carrera}</p>
      <p>Semestre: {semestre}</p>
    </div>
  )
}

export default TarjetaPerfil