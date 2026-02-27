/**
 * @file Projects.js
 * @description Projects section. Renders all project cards from data and
 * handles "Load More / Show Less" toggle behavior.
 */

import { projects } from '../data/projects.js';
import { ProjectCard } from './ProjectCard.js';
import { I18n } from '../utils/i18n.js';

export function Projects() {
    const cards = projects.map(ProjectCard).join('');

    const automationCard = `
    <div class="group glass-card rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 relative md:col-span-2">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent dark:from-blue-900/40 dark:to-black pointer-events-none"></div>
      <div class="p-8 h-full flex flex-col md:flex-row gap-8 relative z-10 items-center md:items-stretch">
        <div class="flex-1 flex flex-col items-start justify-center">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-2xl bg-[var(--text-main)] flex items-center justify-center text-[var(--bg-color)]">
              <i class="ph ph-terminal-window text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold" data-i18n="automation_title">Scripts &amp; Automatización</h3>
          </div>
          <p class="text-muted text-sm mb-6 leading-relaxed" data-i18n="automation_desc">
            Más allá del frontend, desarrollo soluciones de web scraping y automatización de tareas masivas con Python para optimizar flujos de trabajo.
          </p>
          <div class="flex flex-wrap gap-2 mt-auto">
            <span class="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium">Selenium</span>
            <span class="px-3 py-1 bg-yellow-500/20 text-yellow-600 dark:text-yellow-300 rounded-full text-xs font-medium">Python</span>
            <span class="px-3 py-1 bg-red-500/20 text-red-600 dark:text-red-300 rounded-full text-xs font-medium">Automation</span>
          </div>
        </div>
        <div class="w-full md:w-5/12 flex items-center">
          <div class="w-full glass-card bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-2xl relative overflow-hidden group-hover:bg-emerald-500/10 transition-colors duration-500">
            <div class="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500 rounded-full blur-[50px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div class="relative z-10">
              <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1">
                <i class="ph ph-trend-up text-lg animate-pulse"></i>
                <span class="text-[10px] font-bold uppercase tracking-widest" data-i18n="automation_performance">Performance Boost</span>
              </div>
              <div class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400 mb-2">300%</div>
              <p class="text-xs text-muted leading-snug font-medium" data-i18n="automation_stat_desc">
                Optimización en tiempos de carga y descarga masiva de datos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

    return `
    <section id="projects" class="mb-24">
      <div class="flex items-center justify-between mb-8 px-2">
        <h2 class="text-3xl font-bold" data-i18n="projects_title">Proyectos</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${cards}
        ${automationCard}
      </div>

      <div class="mt-12 flex justify-center">
        <button id="load-more-btn"
          class="glass-card px-8 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group hover:scale-105 active:scale-95">
          <span id="load-more-text" data-i18n="btn_load_more">Ver más proyectos</span>
          <i id="load-more-icon" class="ph ph-caret-down text-lg group-hover:translate-y-1 transition-transform"></i>
        </button>
      </div>
    </section>
  `;
}

export function initProjects() {
    const btn = document.getElementById('load-more-btn');
    const btnText = document.getElementById('load-more-text');
    const btnIcon = document.getElementById('load-more-icon');
    const hiddenProjects = document.querySelectorAll('.hidden-project');

    if (!btn || !hiddenProjects.length) return;

    let isExpanded = false;

    btn.addEventListener('click', () => {
        isExpanded = !isExpanded;

        hiddenProjects.forEach((project) => {
            if (isExpanded) {
                project.classList.remove('hidden');
                project.classList.add('animate-fade-in');
            } else {
                project.classList.add('hidden');
                project.classList.remove('animate-fade-in');
            }
        });

        btnText.setAttribute('data-i18n', isExpanded ? 'btn_show_less' : 'btn_load_more');
        btnText.innerText = isExpanded ? I18n.t('btn_show_less') : I18n.t('btn_load_more');
        btnIcon.className = isExpanded
            ? 'ph ph-caret-up text-lg group-hover:-translate-y-1 transition-transform'
            : 'ph ph-caret-down text-lg group-hover:translate-y-1 transition-transform';

        if (!isExpanded) {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
