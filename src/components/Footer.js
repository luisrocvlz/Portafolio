/**
 * @file Footer.js
 * @description Simple footer with copyright and location/availability info.
 */

export function Footer() {
    return `
    <footer class="mt-16 text-center text-muted text-sm">
      <p>&copy; 2025 Luis Roca Velásquez. <span data-i18n="footer_text">Diseñado con estilo.</span></p>
      <p data-i18n="footer_location">Venezuela (GMT-4) | Disponible para proyectos remotos a nivel global.</p>
    </footer>
  `;
}
