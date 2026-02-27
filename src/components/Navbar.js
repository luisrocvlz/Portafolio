/**
 * @file Navbar.js
 * @description Floating top navigation with theme toggle, language toggle, CV download, and contact CTA.
 * Exposes initNavbar() which wires up the button events.
 */

import { Theme } from '../utils/theme.js';
import { I18n } from '../utils/i18n.js';

export function Navbar() {
    return `
    <nav class="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-auto transition-all duration-300">
      <div class="glass-card rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center justify-between gap-4 md:gap-8">

        <a href="#" class="text-sm font-semibold tracking-wide hover:opacity-70 transition-colors">Luis R.</a>

        <div class="hidden md:flex space-x-6">
          <a href="#about"   class="text-xs font-medium text-muted hover:text-[var(--text-main)] transition-colors uppercase tracking-wider" data-i18n="nav_about">Perfil</a>
          <a href="#projects" class="text-xs font-medium text-muted hover:text-[var(--text-main)] transition-colors uppercase tracking-wider" data-i18n="nav_projects">Proyectos</a>
          <a href="#stack"   class="text-xs font-medium text-muted hover:text-[var(--text-main)] transition-colors uppercase tracking-wider" data-i18n="nav_stack">Stack</a>
        </div>

        <div class="flex items-center gap-3">
          <!-- Theme toggle -->
          <button
            id="theme-btn"
            class="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
            data-i18n-title="theme_tooltip">
            <i id="theme-icon" class="ph ph-sun text-lg"></i>
          </button>

          <!-- Language toggle -->
          <button
            id="lang-btn"
            class="flex items-center gap-1 px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors text-xs font-bold w-12 justify-center"
            data-i18n-title="lang_tooltip">
            <span id="lang-text">EN</span>
          </button>

          <!-- CV download -->
          <a id="cv-btn"
            href="/docs/cv_luis_roca_es.pdf"
            download="Luis_Roca_CV_ES.pdf"
            class="group relative p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center justify-center text-[var(--text-main)]">
            <i class="ph ph-file-pdf text-lg"></i>
            <span class="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">CV</span>
          </a>

          <!-- Contact CTA -->
          <a href="#contact"
            class="hidden sm:block bg-[var(--text-main)] text-[var(--bg-color)] text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            data-i18n="nav_contact">
            Contactar
          </a>
        </div>

      </div>
    </nav>
  `;
}

export function initNavbar() {
    document.getElementById('theme-btn')?.addEventListener('click', () => Theme.toggle());
    document.getElementById('lang-btn')?.addEventListener('click', () => I18n.toggle());
}
