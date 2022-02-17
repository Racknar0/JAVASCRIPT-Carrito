// Variables
const carrito = document.querySelector("#carrito"); //!selección Carrito
const contenedorCarrito = document.querySelector("#lista-carrito tbody"); //!selección Body table
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito"); //!btn vaciar
const listaCursos = document.querySelector("#lista-cursos"); //!lista de cursos
let articulosCarrito = [];

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

  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //Agrega Elementos al arreglo
  articulosCarrito = [...articulosCarrito, infoCurso];

  console.log(articulosCarrito);

  carritoHTML();
}

//Muestra el carrito en el HTML
function carritoHTML () {

    //limpiar el html
    limpiarHTML();

    // itera el carrito y genera html
    articulosCarrito.forEach(curso => {
        const row = document.createElement('TR');
        row.innerHTML = `
        <td>
            ${curso.titulo}
        </td>
        `;

        //Agrega HTML al tbody
        contenedorCarrito.appendChild(row);
    });
}

//Elimina los curso del tbody
function limpiarHTML() {
    /* contenedorCarrito.innerHTML = ''; */

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}