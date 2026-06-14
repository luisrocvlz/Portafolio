/**
 * @file Experience.js
 * @description "Trayectoria" section. Renders a vertical career timeline plus a
 * grid of private / client collaborations (NDA repos — shown without repo links).
 */

import { timeline, collaborations } from '../data/experience.js';
import { I18n } from '../utils/i18n.js';

/** Renders a single timeline milestone. */
function TimelineItem(item) {
    const tags = item.tags
        .map(
            (t) => `<span class="text-xs text-muted border border-[var(--glass-border)] px-2 py-1 rounded-md">${t}</span>`
        )
        .join('');

    const currentBadge = item.current
        ? `<span class="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-green-600 dark:text-green-400">
             <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span data-i18n="exp_current_badge">${I18n.t('exp_current_badge')}</span>
           </span>`
        : '';

    return `
    <div class="timeline-item">
      <span class="timeline-node ${item.dotColor}"></span>
      <div class="glass-card rounded-3xl p-6 hover:-translate-y-1 transition-transform duration-300">
        <div class="flex items-start gap-4">
          <div class="w-11 h-11 shrink-0 rounded-2xl ${item.ringColor} flex items-center justify-center ${item.iconColor}">
            <i class="ph ${item.icon} text-xl"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
              <span class="text-xs font-semibold uppercase tracking-wider text-muted" data-i18n="${item.periodKey}">${I18n.t(item.periodKey)}</span>
              ${currentBadge}
            </div>
            <h3 class="text-lg font-bold leading-tight" data-i18n="${item.roleKey}">${I18n.t(item.roleKey)}</h3>
            <p class="text-sm font-medium text-muted mb-3">
              ${item.company}
              <span class="opacity-50">·</span>
              <span class="opacity-80">${item.location}</span>
            </p>
            <p class="text-muted text-sm leading-relaxed mb-4" data-i18n="${item.descKey}">${I18n.t(item.descKey)}</p>
            <div class="flex flex-wrap gap-2">${tags}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/** Renders a private / client collaboration card (no external link). */
function CollaborationCard(project) {
    const tags = project.tags
        .map(
            (t) => `<span class="text-xs text-muted border border-[var(--glass-border)] px-2 py-1 rounded-md">${t}</span>`
        )
        .join('');

    return `
    <div class="group glass-card rounded-3xl p-6 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
      <div class="absolute -right-8 -top-8 w-28 h-28 ${project.ringColor} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      <div class="relative z-10">
        <div class="flex items-start justify-between gap-3 mb-4">
          <div class="w-11 h-11 shrink-0 rounded-2xl ${project.ringColor} flex items-center justify-center ${project.iconColor}">
            <i class="ph ${project.icon} text-xl"></i>
          </div>
          <span class="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted border border-[var(--glass-border)] px-2.5 py-1 rounded-full">
            <i class="ph ph-lock-key text-sm"></i>
            <span data-i18n="tag_private">${I18n.t('tag_private')}</span>
          </span>
        </div>
        <h3 class="text-lg font-bold leading-tight mb-1">${project.name}</h3>
        <div class="flex items-center gap-1.5 text-xs font-semibold text-muted mb-3">
          <i class="ph ph-buildings text-sm ${project.iconColor}"></i>
          <span>${project.client}</span>
          <span class="opacity-40">·</span>
          <span class="opacity-80">${project.location}</span>
        </div>
        <p class="text-xs font-semibold uppercase tracking-wider text-muted mb-3" data-i18n="${project.roleKey}">${I18n.t(project.roleKey)}</p>
        <p class="text-muted text-sm leading-relaxed mb-4" data-i18n="${project.descKey}">${I18n.t(project.descKey)}</p>
        <div class="flex flex-wrap gap-2">${tags}</div>
      </div>
    </div>
  `;
}

export function Experience() {
    const items = timeline.map(TimelineItem).join('');
    const collabCards = collaborations.map(CollaborationCard).join('');

    return `
    <section id="experience" class="mb-24 scroll-mt-32">
      <div class="mb-8 px-2">
        <h2 class="text-3xl font-bold" data-i18n="experience_title">Trayectoria</h2>
        <p class="text-muted text-sm mt-2 max-w-2xl" data-i18n="experience_subtitle">
          Dónde he estado y qué he construido: experiencia profesional, formación y colaboraciones para clientes.
        </p>
      </div>

      <div class="timeline mb-16">
        ${items}
      </div>

      <div class="mb-6 px-2">
        <h3 class="text-2xl font-bold" data-i18n="collab_title">Colaboraciones &amp; Proyectos para clientes</h3>
        <p class="text-muted text-sm mt-2 max-w-2xl" data-i18n="collab_subtitle">
          Desarrollos en repositorios privados realizados en conjunto para clientes específicos. Por confidencialidad (NDA) se omite el código y los enlaces.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${collabCards}
      </div>
    </section>
  `;
}

export function initExperience() {
    // Reserved for future interactive behavior (e.g. scroll-reveal animations).
}
