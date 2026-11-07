/* =========================================================================
   INTERACCIONES DEL LANDING (PÁGINA DE ATERRIZAJE)
   -------------------------------------------------------------------------
   Nota: No se programa el formulario de suscripción, ya que así lo exige 
   la rúbrica del profesor (es una demostración puramente visual).
   Este archivo se encarga exclusivamente de:
   1. La lógica para mostrar los detalles de los planes de karting.
   2. La ventana emergente (diálogo) de contacto por WhatsApp.
   3. La aparición y funcionamiento del botón de "volver arriba" (scrolltop).
   ========================================================================= */

// El modo estricto ("use strict") le dice al navegador que evalúe el código 
// de forma más rigurosa, evitando errores comunes como usar variables no declaradas, en otras palabras
// es una buena practica segun lo que investigué son estandares relativamente modernos 
// para evitar crear variables globales por error o usar palabras
// que estan reservadas sin querer .
"use strict";

/* =========================================================================
   SECCIÓN 1: SELECCIÓN DE ELEMENTOS DEL DOM Y VARIABLES GLOBALES
   ========================================================================= */

// Seleccionamos la ventana emergente (etiqueta <dialog>) que muestra los detalles del plan.
const dialogoPlan = document.querySelector("#dialogo-plan");

// Seleccionamos la ventana emergente (<dialog>) para el chat de WhatsApp.
const dialogoChat = document.querySelector("#dialogo-chat");

// Seleccionamos el campo de texto (<textarea>) donde el usuario escribe su mensaje.
const mensaje = document.querySelector("#mensaje-chat");

// Seleccionamos el botón final que redirigirá al usuario a la app/web de WhatsApp.
const enlace = document.querySelector("#enlace-whatsapp");

// Extraemos el número de teléfono desde el archivo de configuración (configuracion.js).
// Usamos encadenamiento opcional (?.) por si window.CONFIGURACION no existe.
// .replace(/\D/g, "") elimina cualquier cosa que no sea un número (como guiones o espacios).
const numero = (window.CONFIGURACION?.whatsapp || "").replace(/\D/g, "");

// Variable para guardar el nombre del plan que el usuario seleccionó antes de abrir el diálogo.
let planActual = "";


/* =========================================================================
   SECCIÓN 2: LÓGICA DE WHATSAPP
   ========================================================================= */

/**
 * Función que construye y actualiza la URL del botón hacia WhatsApp.
 * Toma el número de teléfono y el mensaje que escribió el usuario.
 * Utiliza encodeURIComponent() para transformar espacios, tildes y caracteres 
 * especiales en un formato válido para direcciones web (URLs).
 */
function actualizarEnlace() {
  enlace.href = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje.value.trim())}`;
}

// Configuración del texto de aviso debajo del área de mensaje:
// Si hay un número configurado, muestra un texto comercial. 
// Si no lo hay (modo demo), avisa que es académico.
document.querySelector("#aviso-chat").textContent = numero
  ? "Se abrirá WhatsApp para que revisés y enviés tu consulta."
  : "Demostración académica: elegí un destinatario en WhatsApp. No hay un número comercial asociado.";

/**
 * Función que abre la ventana emergente del chat.
 * Primero actualiza el enlace con el texto actual y luego usa 
 * el método nativo .showModal() de la etiqueta HTML <dialog>.
 */
function abrirChat() {
  actualizarEnlace();
  dialogoChat.showModal();
}


/* =========================================================================
   SECCIÓN 3: MANEJO DE LOS PLANES DE KARTING
   ========================================================================= */

// Seleccionamos todos los botones que tengan la clase ".elegir-plan" (hay 3 en total).
// Los recorremos con un forEach para asignarle a cada uno un evento de clic.
document.querySelectorAll(".elegir-plan").forEach((boton) => {
  boton.addEventListener("click", () => {

    // Extraemos los datos que guardamos en los atributos "data-plan" y "data-detalle" del HTML.
    planActual = boton.dataset.plan;

    // Inyectamos esos datos en los campos correspondientes dentro del <dialog> de planes.
    document.querySelector("#nombre-plan").textContent = planActual;
    document.querySelector("#detalle-plan").textContent = boton.dataset.detalle;

    // Mostramos la ventana emergente con los detalles del plan seleccionado.
    dialogoPlan.showModal();
  });
});

// Evento para el botón "Consultar por WhatsApp" que está dentro del diálogo de detalles del plan.
document.querySelector("#consultar-plan").addEventListener("click", () => {
  // Cerramos el diálogo actual (el del plan).
  dialogoPlan.close();

  // Pre-llenamos el área de texto del chat con un mensaje que incluye el nombre del plan actual.
  mensaje.value = `¡Hola! Me interesa la experiencia ${planActual} del festival Vértice Karts. ¿Me compartís más información?`;

  // Abrimos la ventana del chat.
  abrirChat();
});

// Evento para el botón flotante con el icono de WhatsApp en la esquina de la pantalla.
document.querySelector("#abrir-chat").addEventListener("click", abrirChat);

// Cada vez que el usuario teclee algo en el área de mensaje (evento "input"), 
// actualizamos la URL del enlace en tiempo real.
mensaje.addEventListener("input", actualizarEnlace);


/* =========================================================================
   SECCIÓN 4: CONTROL GENERAL DE CIERRE DE DIÁLOGOS (<dialog>)
   ========================================================================= */

// Seleccionamos todos los botones que tengan el atributo personalizado "data-cerrar" (las "X").
document.querySelectorAll("[data-cerrar]").forEach((boton) => {
  // Al hacer clic, busca el elemento <dialog> más cercano hacia arriba en el HTML y lo cierra.
  boton.addEventListener("click", () => boton.closest("dialog").close());
});

// Nota: La etiqueta <dialog> ya cierra automáticamente si el usuario presiona la tecla "Escape".
// Este bloque extra cierra el diálogo si el usuario hace clic fuera de la "caja blanca" (en el fondo oscuro).
document.querySelectorAll("dialog").forEach((dialogo) => {
  dialogo.addEventListener("click", (evento) => {
    // Si el clic fue directamente sobre un hijo del diálogo (ej: un texto), ignoramos.
    if (evento.target !== dialogo) return;

    // Calculamos las coordenadas de la caja blanca del diálogo.
    const rect = dialogo.getBoundingClientRect();

    // Si el clic del mouse ocurrió por fuera de esas coordenadas (arriba, abajo, izq o der), cerramos el diálogo.
    if (evento.clientX < rect.left || evento.clientX > rect.right || evento.clientY < rect.top || evento.clientY > rect.bottom) {
      dialogo.close();
    }
  });
});


/* =========================================================================
   SECCIÓN 5: BOTÓN FLOTANTE "VOLVER ARRIBA" (SCROLLTOP)
   ========================================================================= */

// Seleccionamos el botón de flecha hacia arriba.
const subir = document.querySelector("#subir");

/**
 * Función que decide si mostrar u ocultar el botón de subir.
 * Se oculta (propiedad hidden = true) si el usuario ha bajado menos de 450 píxeles.
 * Se muestra si ha bajado 450 píxeles o más.
 */
function actualizarScroll() {
  subir.hidden = window.scrollY < 450;
}

// Escuchamos el evento de desplazamiento ("scroll") de la ventana.
// { passive: true } mejora el rendimiento en móviles al indicar que no bloquearemos el scroll.
window.addEventListener("scroll", actualizarScroll, { passive: true });

// Ejecutamos la función una vez al cargar la página por si el usuario recargó a la mitad de la misma.
actualizarScroll();

// Evento al hacer clic en el botón de subir.
subir.addEventListener("click", () => {
  // Consultamos si el sistema operativo del usuario tiene activada la preferencia 
  // de "reducir movimiento" (accesibilidad para evitar mareos).
  const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Hacemos scroll hacia la coordenada superior (top: 0).
  // Si pide reducir movimiento, el salto es instantáneo ("instant").
  // Si no, hacemos un desplazamiento suave ("smooth").
  window.scrollTo({
    top: 0,
    behavior: reducirMovimiento ? "instant" : "smooth"
  });
});

// Llamada inicial para asegurar que el enlace de WhatsApp arranque con el formato correcto 
// en caso de que el textarea ya tuviera un valor predeterminado por el HTML.
actualizarEnlace();