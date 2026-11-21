"use strict";

/* Busco los elementos que voy a manejar desde JavaScript. */
const botonMenu = document.querySelector(".hamburguesa");
const menu = document.querySelector("#menu");
const recursos = document.querySelector(".recursos");
const tituloRecursos = recursos.querySelector("summary");
const pantallaMovil = window.matchMedia("(max-width: 53rem)");

/* Abrir y cerrar el menú del celular. */
function cambiarMenu(abierto) {
  menu.classList.toggle("menu-abierto", abierto);
  botonMenu.setAttribute("aria-expanded", String(abierto));

  // Al cerrar el panel también se reinicia su submenú.
  if (!abierto) {
    recursos.open = false;
  }
}

// Indico que JavaScript está activo y habilito el botón del menú.
document.documentElement.classList.add("js");
botonMenu.hidden = false;

botonMenu.addEventListener("click", function () {
  // Reviso si está abierto para cambiar al estado contrario.
  const abierto = botonMenu.getAttribute("aria-expanded") === "true";
  cambiarMenu(!abierto);
});

// Al rotar el dispositivo o redimensionar la ventana, se restablece el panel.
pantallaMovil.addEventListener("change", function () {
  const focoEnMenu = menu.contains(document.activeElement);
  cambiarMenu(false);

  // Si el cambio ocultó el enlace enfocado, el foco regresa a un control visible.
  if (pantallaMovil.matches && focoEnMenu) {
    botonMenu.focus();
  }
});

/* Cerrar los menús con Escape y manejar los saltos a las secciones. una funcion que encontre en un repo y me parecio bien incluirla */
document.addEventListener("keydown", function (evento) {
  if (evento.key !== "Escape") {
    return;
  }

  if (recursos.open) {
    recursos.open = false;
    tituloRecursos.focus();
  } else if (menu.classList.contains("menu-abierto")) {
    cambiarMenu(false);
    botonMenu.focus();
  }
});

document.addEventListener("click", function (evento) {
  // closest revisa el elemento pulsado y sus padres. Así también detecta clics sobre una imagen dentro del enlace.
  const enlaceInterno = evento.target.closest('a[href^="#"]');
  const focoEnMenu = menu.contains(document.activeElement);

  // Al elegir un enlace interno o pulsar fuera, se cierra el panel móvil.
  if (menu.classList.contains("menu-abierto") &&
    (enlaceInterno || !evento.target.closest(".menu, .hamburguesa"))) {
    cambiarMenu(false);
    if (!enlaceInterno && focoEnMenu) {
      botonMenu.focus();
    }
  }

  // En escritorio, tocar fuera de Explorá también cierra el submenú.
  if (recursos.open && !evento.target.closest(".recursos")) {
    recursos.open = false;
  }

  // Conservamos atajos del navegador como Ctrl+clic para abrir en otra pestaña.
  if (!enlaceInterno || evento.ctrlKey || evento.metaKey || evento.shiftKey || evento.altKey) {
    return;
  }

  // Quito el # del enlace para buscar la sección por su id.
  const seccion = document.getElementById(enlaceInterno.hash.slice(1));
  const titulo = seccion?.querySelector("h1, h2");

  // El navegador actualiza la URL y hace el salto. Luego enfocamos su título
  // para que al volver a usar Tab se continúe desde ese punto de la página.
  if (titulo) {
    requestAnimationFrame(function () {
      titulo.focus({ preventScroll: true });
    });
  }
});

/* Cambiar la foto según el botón seleccionado. */
const fotos = document.querySelectorAll("[data-foto]");
const botonesFoto = document.querySelectorAll("[data-elegir]");
const pieFoto = document.querySelector("#pie-foto");
const controles = document.querySelector(".controles-galeria");

botonesFoto.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const fotoElegida = boton.dataset.elegir;

    // Muestro la foto elegida y oculto las demás.
    fotos.forEach(function (foto) {
      const activa = foto.dataset.foto === fotoElegida;
      foto.classList.toggle("activa", activa);
      foto.setAttribute("aria-hidden", String(!activa));
    });

    // aria-pressed informa cuál botón representa la foto visible en este momento.
    botonesFoto.forEach(function (opcion) {
      opcion.setAttribute("aria-pressed", String(opcion === boton));
    });

    // Actualizo la descripción que aparece debajo de la foto.
    pieFoto.textContent = boton.dataset.pie;
  });
});
controles.hidden = false;

/* Mostrar el botón de inicio cuando el banner sale de la pantalla. */
const volverArriba = document.querySelector(".volver-arriba");
const banner = document.querySelector("#inicio");

if ("IntersectionObserver" in window) {
  const observador = new IntersectionObserver(function (entradas) {
    volverArriba.hidden = entradas[0].isIntersecting;
  }, { rootMargin: "-64px 0px 0px 0px" });

  observador.observe(banner);
} else {
  // En navegadores sin el observador, el enlace queda disponible todo el tiempo.
  volverArriba.hidden = false;
}
