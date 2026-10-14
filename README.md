# Instituto Tecnológico de Oaxaca
## Ingeniería en Sistemas Computacionales
### Materia: Programación Web
**Alumno:** Uriel Eduardo Guzmán Ramírez
**Actividad:** Actividad 5 - Lista de Tareas con React

---

### Introducción
En esta práctica se desarrollo una aplicación web sencilla utilizando Vite y React. El objetivo principal fue crear una interfaz que tenga tres partes: una tarjeta con datos, un contador interactivo que suma y reinicia valores, y una lista de tareas. Con esto se logro crear componentes y cómo usar el estado en React.

---
## Tecnologías usadas

- **HTML:** estructura base del proyecto.
- **CSS:** diseño visual de la aplicación.
- **JavaScript:** lógica de funcionamiento.
- **React:** creación de componentes.
- **Vite:** herramienta para crear y ejecutar el proyecto React.

### Respuestas al cuestionario

**a) ¿Qué diferencia hay entre props y state en React?**
Las **props** son como variables que le pasas de un componente a otro (de padre a hijo) y no se pueden cambiar, solo sirven para leer los datos. 
El **state** (estado) es como la memoria interna del componente si este valor cambia (por ejemplo, si le das clic a un botón), la página se actualiza solita para mostrar el nuevo valor sin tener que recargar.

**b) ¿Por qué es importante usar una key al renderizar una lista de elementos?**
Sirve para que React no se confunda. Si haces una lista y le pones una `key` única a cada elemento, React sabe exactamente cuál tarea borraste o cuál agregaste. Si no se la pones, a veces se traba o mezcla los datos en la pantalla.

**c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.**
El `useState` es una función que nos deja crear una variable que cambia en tiempo real en la pantalla. 
**Ejemplo:** En mi proyecto lo usé para el contador se declaro la variable: `const [contador, setContador] = useState(0);`. Cuando el usuario le da clic al botón de "Aumentar", se ejecuta `setContador(contador + 1)` y el número cambia al instante en la tarjeta.

### Encabezado.jsx

El componente `Encabezado.jsx` se encarga de mostrar el título principal de la aplicación.

### TarjetaPerfil.jsx

El componente TarjetaPerfil.jsx muestra información del estudiante. En este componente se usaron props para recibir el nombre, la carrera y la materia desde App.jsx.

### Contador.jsx

El componente Contador.jsx usa useState para manejar un contador. El usuario puede aumentar el número o reiniciarlo usando botones.

### ListaTareas.jsx

El componente ListaTareas.jsx muestra una lista de tareas usando un arreglo y el método .map(). Esto permite renderizar varios elementos de forma dinámica.

### App.jsx

El archivo App.jsx es el componente principal de la aplicación. Aquí se importan y se muestran todos los componentes creados.




### Conclusión
Esta práctica me sirvió bastante para entender cómo funciona realmente React en comparación con el HTML y JavaScript tradicionales. Al principio cuesta un poco acostumbrarse a dividir todo en componentes y entender cómo manejar el estado con `useState`.

