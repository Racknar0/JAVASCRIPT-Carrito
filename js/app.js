// Variables
const carrito = document.querySelector("#carrito"); //!selección Carrito
const contenedorCarrito = document.querySelector("#lista-carrito tbody"); //!selección Body table
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito"); //!btn vaciar
const listaCursos = document.querySelector("#lista-cursos"); //!lista de cursos
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
  listaCursos.addEventListener("click", agregarCurso);

  // Elimina cursos del carrito
  carrito.addEventListener("click", eliminarCurso);
}

// Funciones
function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

// Elimina el curso del carrito
function eliminarCurso(e) {
    
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        // Elimina del arreglo de articulosCarrito por data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId );

        carritoHTML(); //llama función de imprimir html
        console.log(articulosCarrito);
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

  //Revisa si un elemento si un elemento ya existe en el carrito
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    //actualizar cantidad
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso; //retorna objeto actualizado
      } else {
        return curso; //retorna objetos no duplicados
      }
    });
    articulosCarrito = [...cursos];
  } else {
    //Agrega Elementos al arreglo
    articulosCarrito = [...articulosCarrito, infoCurso];
  }
  carritoHTML();
}

//Muestra el carrito en el HTML
function carritoHTML() {
  //limpiar el html
  limpiarHTML();

  // itera el carrito y genera html
  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso; //!Aplicando Destructuring
    const row = document.createElement("TR");
    row.innerHTML = `
        <td><img src="${imagen}" width="100"></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
        `;

    //Agrega HTML al tbody
    contenedorCarrito.appendChild(row);
  });
}

//Elimina los curso del tbody
function limpiarHTML() {
  /* contenedorCarrito.innerHTML = ''; */

  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
