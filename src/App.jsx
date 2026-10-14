import './App.css'

import Encabezado from './components/Encabezado.jsx'
import TarjetaPerfil from './components/TarjetaPerfil.jsx'
import Contador from './components/Contador.jsx'
import ListaTareas from './components/ListaTareas.jsx'

function App() {
  return (
    <div className="app">

      <Encabezado />

      <main className="contenido">

        <TarjetaPerfil
          nombre="Uriel Eduardo Guzman Ramirez"
          carrera="Ingeniería en Sistemas"
          semestre="7"
        />

        <Contador />

        <ListaTareas />

      </main>

    </div>
  )
}

export default App