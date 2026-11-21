# Vértice Karts · Examen One Page

## Abrir la web

1. Descomprimí el ZIP completo.
2. Abrí la carpeta `examen` en VS Code.
3. Abrí `index.html` con Live Server. También podés abrir el archivo directamente en Chrome.
4. En Chrome, presioná **Ctrl + Shift + M** con DevTools abierto y elegí **Samsung Galaxy S8**. Si el perfil no aparece, usá **Responsive** con **360 × 740 píxeles CSS**.

Mantené juntos el HTML y las carpetas `css`, `js`, `imagenes` y `documentos`. Sus rutas son relativas a la carpeta del sitio. El contenido, las imágenes, las fuentes de Google Fonts y el PDF están incluidos. Los enlaces externos requieren Internet.

## Qué archivo hace cada cosa

| Archivo | Función |
|---|---|
| `index.html` | Ordena el encabezado, cinco secciones de contenido, el pie y el acceso para volver al inicio. Incluye los iconos en SVG. |
| `css/estilos.css` | Define colores, Google Fonts, tamaños, disposición, menú móvil y animaciones. |
| `js/examen.js` | Abre y cierra el menú, mueve el foco a los títulos, cambia la foto y muestra el acceso para volver arriba. |
| `fuentes/` | Barlow Condensed y Manrope de Google Fonts, en WOFF2, con sus licencias. |
| `imagenes/` | Banner WebP de 1920 × 1080, tres fotos ilustrativas WebP y favicon SVG. |
| `documentos/guia-vertice-karts.pdf` | Guía de pista redactada con IA. Incluye los tres planes y la preparación previa. |
| `promo.png` | Póster promocional generado con IA para la exposición. |
| `entrega-moodle.txt` | URL del repositorio del curso para entregar después de incorporar el examen al repositorio. |

## Cómo explicar el código

- **Saltos.** El enlace `href="#galeria"` busca la sección `id="galeria"`. El navegador cambia la URL y se desplaza. `scroll-margin-top` deja espacio para la cabecera. JavaScript enfoca el título para que el siguiente Tab continúe desde la sección elegida.
- **Menú.** A partir de 53 rem de ancho hacia abajo, CSS cambia la barra horizontal por el botón hamburguesa. JavaScript pone o quita `menu-abierto` y actualiza `aria-expanded`, que comunica si el panel está abierto. **Explorá** usa `details` y `summary`, elementos que el navegador ya sabe desplegar. Escape cierra primero el submenú y luego el menú.
- **Galería.** Las tres imágenes ocupan la misma caja. Al elegir **Boxes**, JS compara `data-elegir="boxes"` con `data-foto="boxes"`. Activa esa foto, cambia el pie y marca el botón. CSS cambia la opacidad durante 0,55 s. La foto queda fija hasta que alguien elige otra.
- **Volver arriba.** `IntersectionObserver` detecta si el banner está en pantalla. Cuando sale de vista, muestra un enlace a `#inicio`. CSS controla el desplazamiento y lo vuelve instantáneo si el sistema pide movimiento reducido.
- **Iconos.** Están en imagenes/iconos/ y se cargan con etiquetas img. El texto de cada enlace o paso explica su significado. El color del dibujo se cambia dentro de cada SVG.
- **PDF.** El botón es un enlace a `documentos/guia-vertice-karts.pdf`. Abre el archivo en otra pestaña.
- **Responsividad.** Las secciones usan varias columnas cuando hay espacio y una columna cuando la pantalla es angosta. Los botones permiten envolver su contenido.

## Comprobación para la exposición

| Punto de la rúbrica | Dónde mostrarlo |
|---|---|
| Menú hamburguesa y submenú con dos URL externas | Galaxy S8 → botón naranja → **Explorá** → mapa y referencia sobre karting. |
| Saltos a secciones y cinco bloques de contenido | Mostrá **Inicio**, **Experiencia**, **Galería**, **Planes** y **Contáctenos** en el menú. |
| Banner y favicon | Abrí el sitio y señalá el banner y la V de la pestaña. |
| Sección iconográfica y animación | El banner anima la entrada del texto. En **Experiencia**, mostrá casco, volante y cronómetro. |
| Sección fotográfica y transición | En **Galería**, seleccioná **Curva**, **Boxes** y **Meta**. |
| Botón PDF | En **Planes**, pulsá **Abrir guía PDF**. |
| Dos redes y contacto informativo | En **Contáctenos**, mostrá el WhatsApp configurado en el landing y su video de referencia de YouTube. |
| Scrolltop | Desde **Contáctenos**, pulsá **↑** para regresar al banner. |
| Imagen promocional | Abrí `promo.png` directamente para mostrar el póster completo. |

El sitio es un concepto académico. El mapa apunta a una zona de referencia y YouTube enlaza al video de karting utilizado en el landing. Confirmá que el número de WhatsApp del landing sea el que deseás hacer público antes de subir el examen.

## Incorporar al repositorio y entregar

Copiá el contenido de la carpeta extraída `examen` a la carpeta `examen` del repositorio local `C:\Users\moigr\Documents\RepositorioCurso`. Desde la raíz del repositorio en PowerShell, revisá los archivos y subí el cambio.

```powershell
git status
git add -- examen
git diff --cached --stat
git commit -m "Agregar examen One Page de Vértice Karts"
git push
```

Abrí la URL de `entrega-moodle.txt` y verificá que la carpeta `examen` con `index.html` ya esté en el repositorio. Después subí **entrega-moodle.txt** a Moodle.


Los cinco iconos del HTML ahora son imágenes SVG externas: casco, volante, cronómetro, WhatsApp y YouTube. Los trazados están dentro de esos archivos. Para la exposición, explicar que se cargan mediante img, en lugar de describir SVG incrustado en el HTML.
