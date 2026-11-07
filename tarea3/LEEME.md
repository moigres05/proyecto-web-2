# Tarea #3 — Landing page de Go Karts
**Autor:** Sergio E. Méndez Mora · Proyecto Web 2 · Universidad CENFOTEC.


## Qué incluye 
| Requisito | Implementación |
| ---       |             --- |
| Sin menú | Encabezado con marca y un llamado a la acción; sin nav ni hamburguesa |
| Español | Contenido de la página y comentarios en español |
| Bootstrap desde nube | CDN oficial de Bootstrap 5.3.8 en index.html |
| Exactamente 5 secciones | Experiencia, multimedia, planes, ubicación y suscripción |
| Encabezado y pie aparte | header con banner, main con cinco section y footer |
| Favicon del tema | imagenes/favicon.svg: V y motivo de bandera |
| Video | video/promocional.mp4 local + YouTube en desplegable de sección 2 |
| Audio MP3 | audio/salida.mp3 con controles, sin reproducción automática |
| Banner full width | Encabezado a todo el ancho, imagen local optimizada |
| Mapa Google full width | iframe fuera del contenedor, en sección 4 |
| WhatsApp | Botón flotante, diálogo, mensaje editable y enlace wa.me |
| Scrolltop | Flecha flotante después de bajar 450 px |
| Botones interactivos | CTA, detalles de tres planes, contacto, mapa, descarga del afiche |
| Formulario sin programar | Sección 5: solo visual, sin envío ni almacenamiento |
| Imagen promocional con IA | promo.png, en la raíz de tarea3 y descargable desde la página |
| Responsivo | Rejilla Bootstrap y media queries propias; objetivo Galaxy S8 360 × 740 |

## Contacto de WhatsApp: personalización
Se proporcionó un teléfono personal para este trabajo en.`js/configuracion.js` para hacer la simulacion correctamente he puiesto el mio personal.


## Formulario, evento y ubicación
El formulario lo dejé intencionalmente SIN PROGRAMACIÓN, como pide la tarea.
El botón deshabilitado comunica que es una muestra y evita prometer un envío real.

## Entender el código
- `index.html`: estructura semántica y contenido, con cada sección identificada.
- `css/estilos.css`: colores en variables; estilos de componentes y consultas de medios al final.
- `js/configuracion.js`: número de WhatsApp configurable.
- `js/script.js`: eventos click, diálogos nativos, URL codificada y botón scrolltop.
- `.row` y `.col-lg-*`: rejilla Bootstrap, apilada en pantallas pequeñas.
- `data-plan` y `data-detalle`: texto de las experiencias usado por los botones.
- `dialog.showModal()`: abre diálogos con control nativo del foco y tecla Escape.
- `encodeURIComponent()`: prepara un mensaje con espacios y tildes para su URL.
- `prefers-reduced-motion`: evita animaciones cuando el dispositivo lo solicita.

## Comprobación manual en Chrome
1. F12 → Ctrl + Shift + M → Samsung Galaxy S8, o tamaño 360 × 740.
2. Desplazate hasta el pie: no debe existir desplazamiento horizontal.
3. Probá los tres planes, el cierre con × y Escape, WhatsApp y la flecha de regreso.
4. Reproducí MP3 y MP4. Abrí el desplegable con YouTube.
5. Comprobá Google Maps conectado a Internet; si un iframe está bloqueado,
   usá los enlaces externos incluidos bajo el video y junto a la ubicación.
6. Descargá el afiche y comprobá que su nombre sea `promo.png`.
7. El formulario debe permanecer visual: no debe confirmar suscripciones.

Los videos externos pueden imponer cookies, anuncios, restricciones regionales o de
incrustación. Se incluye enlace directo a YouTube y un MP4 propio como alternativa.
El reproductor externo puede mostrar textos de su plataforma según el idioma del navegador.

## Entrega
Desde la raíz de tu repositorio, luego de revisar los cambios:

```powershell
git status
git add tarea3
git commit -m "Completa tarea 3 landing de Go Karts"
git push origin main
```

En `ENTREGA_MOODLE.txt` reemplazá la indicación por la URL REAL de tu repositorio
personal. Subí ese TXT a Moodle. El curso pide repositorio, no publicar con hosting.
No se ha hecho ningún push ni publicación automáticamente.

## Recursos y créditos
- Bootstrap 5.3.8 (MIT), cargado por CDN:
  https://getbootstrap.com/docs/5.3/getting-started/introduction/
- Video externo: K1 Speed, “2016 Red Bull GRC Karting Event”:
  https://www.k1speed.com/blog/video-2016-red-bull-grc-karting-event.html
  https://www.youtube.com/watch?v=zqULkHJhgQc
  Se incrusta el reproductor, no se redistribuye ni se atribuye la autoría del video.
- Google Maps: https://maps.google.com/ (mapa externo de referencia).
- WhatsApp: https://wa.me/ (apertura del servicio, no integración de API empresarial).
- Banner y promo.png: generados para este proyecto con la herramienta de imágenes IA
  integrada de ChatGPT. No son fotografías de una pista ni evento reales.
- MP3: composición electrónica sintetizada para este proyecto, no grabación de motor real.
- MP4: pieza promocional creada con la imagen de IA y el audio original.
- Favicon y código: elaborados para esta entrega, sin plantilla comercial.

### Prompts de las imágenes IA
Banner: fotografía cinematográfica horizontal de un go-kart naranja con conductor adulto
con casco en una pista al atardecer, asfalto oscuro, barrido de movimiento, kart a la derecha,
espacio oscuro a la izquierda para el título, sin texto, logos ni marcas de agua.

Afiche: póster vertical de automovilismo con kart naranja, paleta carbón, naranja y crema,
tipografía editorial y textos exactos: “VÉRTICE KARTS”, “TU PRÓXIMA GRAN VUELTA”,
“FESTIVAL DE KARTING”, “24 OCTUBRE 2026”, “DESDE ₡8.000”, “Evento académico ficticio”.

## Verificación de esta entrega
Se comprobaron: sintaxis JavaScript, las cinco secciones, ausencia de menú, rutas locales,
IDs únicos, destinos de anclas, MP3 y MP4 válidos de 12 segundos e imágenes generadas.
La revisión visual automática en navegador no pudo ejecutarse: el entorno de generación
no tenía Chromium y su descarga falló. La adaptación está implementada en el CSS;
confirmá su apariencia final y los servicios externos con los pasos de Chrome anteriores.
