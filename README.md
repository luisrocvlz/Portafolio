# ENGLISH

## Portfolio Template V1

A minimalist, high-performance, and easily customizable personal portfolio template. Built with semantic HTML, Tailwind CSS, and Vanilla JavaScript.

### Features

- **Minimalist Design:** Clean and focused on content.
- **Responsive:** Adapts perfectly to any screen size.
- **Dark/Light Mode:** Automatic and manual theme switching.
- **Bilingual:** Supports English and Spanish out-of-the-box.
- **Scroll Animations:** Subtle animations on scroll.
- **No Build Step:** No need for complex build tools, everything runs in the browser.

### Technologies

- Semantic HTML5
- Tailwind CSS (v3.4) via CDN for styling.
- Vanilla JavaScript (ES6+) for interactivity.
- [Phosphor Icons](https://phosphoricons.com/) for iconography.
- [Formspree](https://formspree.io/) for contact form management.

---

### How to Use & Customize

#### 1. Local Installation

1.  Clone this repository:
    ```
    git clone https://github.com/luisrocvlz/Portafolio.git
    ```
2.  Navigate to the project directory.
3.  Open the `index.html` file in your browser. A local server can be helpful for development but is not strictly necessary.

#### 2. Personal Information

-   Open `index.html` and edit the text directly (e.g., name, titles, descriptions).
-   The portfolio supports two languages. To change the text for both, find the `data-i18n` attributes in the HTML and then modify the corresponding entries in the `assets/js/main.js` file within the `translations` object.

#### 3. Images & CV

-   **Portrait:** Replace `assets/img/portrait.png` with your own photo.
-   **Project Images:** Replace the images in `assets/img/` with your project thumbnails.
-   **CV:** Replace the PDF files `cv_luis_roca_en.pdf` and `cv_luis_roca_es.pdf` in the `assets/docs/` folder. Make sure to update the file names in `index.html` and `assets/js/main.js` if you change them.

#### 4. Contact Form

1.  Go to [Formspree](https://formspree.io/) and create a new form.
2.  You will get a unique endpoint URL.
3.  Open `index.html`, find the `<form>` tag, and replace the `action` attribute URL with your new Formspree URL.

#### 5. Customizing the Theme

-   **Colors & Fonts:** Open `assets/js/tailwind.config.js`. You can modify the primary colors and fonts used in the portfolio within the `theme` object.
-   **Custom CSS:** For more advanced style changes, you can add your own CSS rules in `assets/css/style.css`.

### License

This project is licensed under the MIT License. You are free to use, modify, and distribute it as you see fit.

### Credits

This template was originally created by [Luis Roca](https://github.com/luisrocvlz). If you use it, a small credit would be appreciated but is not required.

---

# ESPAÑOL

## Plantilla de Portafolio V1

Una plantilla de portafolio personal minimalista, de alto rendimiento y fácilmente personalizable. Construido con HTML semántico, Tailwind CSS y Vanilla JavaScript.

### Características

- **Diseño Minimalista:** Limpio y centrado en el contenido.
- **Responsivo:** Se adapta perfectamente a cualquier tamaño de pantalla.
- **Modo Oscuro/Claro:** Cambio de tema automático y manual.
- **Bilingüe:** Soporte para inglés y español listo para usar.
- **Animaciones de Scroll:** Animaciones sutiles al desplazarse.
- **Sin Compilación:** No necesita herramientas complejas, todo se ejecuta en el navegador.

### Tecnologías

- HTML5 Semántico
- Tailwind CSS (v3.4) vía CDN para los estilos.
- Vanilla JavaScript (ES6+) para la interactividad.
- [Phosphor Icons](https://phosphoricons.com/) para la iconografía.
- [Formspree](https://formspree.io/) para la gestión del formulario de contacto.

---

### Cómo Usar y Personalizar

#### 1. Instalación Local

1.  Clona este repositorio:
    ```
    git clone https://github.com/luisrocvlz/Portafolio.git
    ```
2.  Navega al directorio del proyecto.
3.  Abre el archivo `index.html` en tu navegador. Un servidor local puede ser útil para el desarrollo, pero no es estrictamente necesario.

#### 2. Información Personal

-   Abre `index.html` y edita el texto directamente (ej. nombre, títulos, descripciones).
-   El portafolio soporta dos idiomas. Para cambiar el texto de ambos, busca los atributos `data-i18n` en el HTML y luego modifica las entradas correspondientes en el archivo `assets/js/main.js` dentro del objeto `translations`.

#### 3. Imágenes y CV

-   **Retrato:** Reemplaza `assets/img/portrait.png` con tu propia foto.
-   **Imágenes de Proyectos:** Reemplaza las imágenes en `assets/img/` con las miniaturas de tus proyectos.
-   **CV:** Reemplaza los archivos PDF `cv_luis_roca_en.pdf` y `cv_luis_roca_es.pdf` en la carpeta `assets/docs/`. Asegúrate de actualizar los nombres de los archivos en `index.html` y `assets/js/main.js` si los cambias.

#### 4. Formulario de Contacto

1.  Ve a [Formspree](https://formspree.io/) y crea un nuevo formulario.
2.  Obtendrás una URL de endpoint única.
3.  Abre `index.html`, busca la etiqueta `<form>` y reemplaza la URL en el atributo `action` con tu nueva URL de Formspree.

#### 5. Personalizar el Tema

-   **Colores y Fuentes:** Abre `assets/js/tailwind.config.js`. Puedes modificar los colores primarios y las fuentes utilizadas en el portafolio dentro del objeto `theme`.
-   **CSS Personalizado:** Para cambios de estilo más avanzados, puedes agregar tus propias reglas de CSS en `assets/css/style.css`.

### Licencia

Este proyecto está bajo la Licencia MIT. Eres libre de usarlo, modificarlo y distribuirlo como consideres oportuno.

### Créditos

Esta plantilla fue creada originalmente por [Luis Roca](https://github.com/luisrocvlz). Si la utilizas, un pequeño crédito sería apreciado pero no es obligatorio.