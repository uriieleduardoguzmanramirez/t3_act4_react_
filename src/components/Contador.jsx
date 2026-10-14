import { useState } from 'react'

function Contador() {
  const [contador, setContador] = useState(0)

  return (
    <div className="tarjeta">
      <h2>Contador</h2>

      <p>Valor actual: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>
        +1
      </button>

      <button onClick={() => setContador(contador - 1)}>
        -1
      </button>

      <button onClick={() => setContador(0)}>
        Reiniciar
      </button>
    </div>
  )
}

export default Contador