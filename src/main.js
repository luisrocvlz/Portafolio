/**
 * @file main.js
 * @description Application entry point. Imports all components, utilities, and styles.
 * Renders the full page by injecting components into the DOM.
 */

// --- Styles ---
import './styles/main.css';

// --- Utilities ---
import { Theme } from './utils/theme.js';
import { I18n } from './utils/i18n.js';
import { initSmoothScroll } from './utils/smoothScroll.js';

// --- Data ---
import { translations } from './data/translations.js';

// --- Components ---
import { Background } from './components/Background.js';
import { Cursor, initCursor } from './components/Cursor.js';
import { Navbar, initNavbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { TechScroll, syncTechScrollTheme } from './components/TechScroll.js';
import { Projects, initProjects } from './components/Projects.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

// ─────────────────────────────────────────────
// 1. Initialize i18n & theme BEFORE rendering
//    so ProjectCard can call I18n.t() correctly
// ─────────────────────────────────────────────
I18n.init(translations);
Theme.init();

// ─────────────────────────────────────────────
// 2. Render HTML into the #app shell
// ─────────────────────────────────────────────
const app = document.getElementById('app');

app.innerHTML = `
  ${Background()}
  ${Cursor()}
  ${Navbar()}

  <main class="container mx-auto px-4 pt-32 pb-20 max-w-5xl">
    ${Hero()}
    ${About()}
    ${TechScroll()}
    ${Projects()}
    ${Contact()}
    ${Footer()}
  </main>
`;

// ─────────────────────────────────────────────
// 3. Initialize interactive behaviors AFTER render
// ─────────────────────────────────────────────
initCursor();
initNavbar();
initProjects();
initSmoothScroll();
syncTechScrollTheme();

// Re-sync tech scroll icons on every theme toggle
const _toggleTheme = Theme.toggle.bind(Theme);
Theme.toggle = function () {
  _toggleTheme();
  syncTechScrollTheme();
};
