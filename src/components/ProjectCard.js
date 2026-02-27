/**
 * @file ProjectCard.js
 * @description Reusable project card component.
 * Accepts a project data object and renders the card markup.
 */

import { I18n } from '../utils/i18n.js';

export function ProjectCard(project) {
    const tag = project.tagKey ? `<span data-i18n="${project.tagKey}">${I18n.t(project.tagKey)}</span>` : `<span>${project.tagLabel ?? ''}</span>`;

    // Determine image/icon area based on project type
    let imageArea;
    if (project.isPortfolio) {
        imageArea = `
      <div class="h-48 ${project.bgColor} relative overflow-hidden flex items-center justify-center">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
        <i class="ph ph-github-logo text-6xl text-white group-hover:text-gray-200 transition-colors duration-500 relative z-10"></i>
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
        <div class="absolute bottom-4 left-4 z-20">
          <span class="${project.tagColor} backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">${tag}</span>
        </div>
      </div>`;
    } else if (project.isGithub) {
        imageArea = `
      <div class="h-48 ${project.bgColor} relative overflow-hidden flex items-center justify-center">
        <img src="${project.imgSrc}" alt="${project.imgAlt}" loading="lazy" width="600" height="400"
          class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500">
        <i class="ph ph-github-logo text-6xl text-gray-300 group-hover:text-white transition-colors duration-500 relative z-10"></i>
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
        <div class="absolute bottom-4 left-4 z-20">
          <span class="${project.tagColor} backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">${tag}</span>
        </div>
      </div>`;
    } else {
        imageArea = `
      <div class="h-48 ${project.bgColor} relative overflow-hidden">
        <img src="${project.imgSrc}" alt="${project.imgAlt}" loading="lazy" width="600" height="400"
          class="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:scale-110 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div class="absolute bottom-4 left-4">
          <span class="${project.tagColor} backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">${tag}</span>
        </div>
      </div>`;
    }

    const techTags = project.tags.map((t) => `
    <span class="text-xs text-muted border border-[var(--glass-border)] px-2 py-1 rounded-md">${t}</span>
  `).join('');

    const hiddenClass = project.hidden ? 'hidden-project hidden' : '';

    return `
    <a href="${project.href}" target="${project.target ?? '_blank'}"
      class="${hiddenClass} group glass-card rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 block">
      ${imageArea}
      <div class="p-6 relative">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-xl font-bold ${project.hoverColor} transition-colors">${project.title}</h3>
          <div class="relative group/info z-30">
            <button class="text-muted/50 hover:text-[var(--text-main)] transition-colors p-1" aria-label="Info">
              <i class="ph ph-info text-xl"></i>
            </button>
            <div class="absolute right-0 top-full mt-2 w-64 bg-gray-900/95 dark:bg-black/95 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl opacity-0 invisible group-hover/info:opacity-100 group-hover/info:visible transition-all duration-200 scale-95 group-hover/info:scale-100 origin-top-right z-50 pointer-events-none">
              <p class="text-xs text-gray-200 leading-relaxed font-medium text-left" data-i18n="${project.descKey}">
                ${I18n.t(project.descKey)}
              </p>
            </div>
          </div>
        </div>
        <p class="text-muted text-sm line-clamp-2 mb-4" data-i18n="${project.descKey}">
          ${I18n.t(project.descKey)}
        </p>
        <div class="flex flex-wrap gap-2">${techTags}</div>
      </div>
    </a>
  `;
}
