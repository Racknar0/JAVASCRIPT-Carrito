// Variables
const carrito = document.querySelector("#carrito"); //!selección Carrito
const contenedorCarrito = document.querySelector("lista-carrito tbody"); //!selección Body table
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito"); //!btn vaciar
const listaCursos = document.querySelector("#lista-cursos"); //!lista de cursos

cargarEventListeners();
function cargarEventListeners() {
  listaCursos.addEventListener("click", agregarCurso);
}

// Funciones
function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

function leerDatosCurso(curso) {
  // crear objeto con datos

  console.log(curso);

  const infoCurso = {
      imagen: curso.querySelector('img').src,
      titulo: curso.querySelector('h4').textContent,
      precio: curso.querySelector('.precio span').textContent,
      id: curso.querySelector('a').getAttribute('data-id'),
      cantidad: 1

  }

  console.log(infoCurso);
}
