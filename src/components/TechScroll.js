/**
 * @file TechScroll.js
 * @description Infinite horizontal scroll ticker for the technology/tools list.
 * Uses SVG logos from svgl.app. Items are duplicated for a seamless loop.
 */

import { techStack } from '../data/techStack.js';

/**
 * Renders a single pill for the tech scroll carousel.
 * Supports:
 *  - svgUrl / darkSvgUrl  → external <img> with theme-aware src swap via JS
 *  - svgSrc               → inline SVG string (for tools not on svgl.app)
 */
function TechItem(item) {
  let iconHtml;

  if (item.svgSrc) {
    // Inline SVG (Antigravity etc.) — wrapped in a sized container
    iconHtml = `<span class="tech-icon inline-flex items-center justify-center w-5 h-5">${item.svgSrc}</span>`;
  } else if (item.darkSvgUrl) {
    // Theme-aware: two <img> tags, one hidden per theme
    iconHtml = `
      <img src="${item.svgUrl}" alt="${item.label}" class="tech-icon tech-icon--light w-5 h-5 object-contain" loading="lazy">
      <img src="${item.darkSvgUrl}" alt="${item.label}" class="tech-icon tech-icon--dark w-5 h-5 object-contain hidden" loading="lazy">
    `;
  } else {
    iconHtml = `<img src="${item.svgUrl}" alt="${item.label}" class="tech-icon w-5 h-5 object-contain" loading="lazy">`;
  }

  return `
    <div class="glass-card px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap flex-shrink-0 hover:bg-white/10 transition-colors cursor-default flex items-center gap-2.5">
      ${iconHtml}
      <span>${item.label}</span>
    </div>
  `;
}

export function TechScroll() {
  // Duplicate items for seamless infinite loop
  const items = [...techStack, ...techStack].map(TechItem).join('');

  return `
    <section class="mb-24 px-4 overflow-hidden">
      <p class="text-center text-sm text-muted font-medium mb-8 uppercase tracking-widest" data-i18n="stack_title">
        Herramientas &amp; Tecnologías
      </p>
      <div class="relative max-w-5xl mx-auto flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div class="flex gap-4 animate-scroll w-max py-4 hover:[animation-play-state:paused]">
          ${items}
        </div>
      </div>
    </section>
  `;
}

/**
 * After render, swap MySQL icons based on current theme.
 * Called from main.js after Theme.init().
 */
export function syncTechScrollTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  document.querySelectorAll('.tech-icon--light').forEach(el => {
    el.classList.toggle('hidden', isDark);
  });
  document.querySelectorAll('.tech-icon--dark').forEach(el => {
    el.classList.toggle('hidden', !isDark);
  });
}
