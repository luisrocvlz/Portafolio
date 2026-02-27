/**
 * @file About.js
 * @description "About Me" bento grid section + skill category cards.
 * This section doubles as the #stack anchor (overview of skills).
 */

export function About() {
    return `
    <section id="stack" class="mb-24 scroll-mt-32">
      <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[500px]">

        <!-- About Me card -->
        <div id="about" class="glass-card rounded-3xl p-8 md:col-span-2 md:row-span-2 flex flex-col justify-between group hover:scale-[1.01] transition-all duration-300 scroll-mt-32">
          <div>
            <div class="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-blue-500 dark:text-blue-400">
              <i class="ph ph-user text-xl"></i>
            </div>
            <h2 class="text-2xl font-semibold mb-3" data-i18n="about_title">Sobre Mí</h2>
            <p class="text-muted text-sm leading-relaxed mb-4" data-i18n="about_p1">
              Ingeniero de Sistemas egresado del IUP "Santiago Mariño". Mi enfoque combina la lógica robusta de la ingeniería con la creatividad del desarrollo web.
            </p>
            <p class="text-muted text-sm leading-relaxed" data-i18n="about_p2">
              Especializado en automatización de procesos (QA &amp; Python) y creación de sitios web de alto impacto usando CMS y código a medida.
            </p>
          </div>
          <div class="mt-4 pt-4 border-t border-[var(--glass-border)]">
            <div class="flex items-center gap-2 text-xs text-muted uppercase tracking-widest">
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span data-i18n="about_status">Disponible para proyectos</span>
            </div>
          </div>
        </div>

        <!-- Frontend -->
        <div class="glass-card rounded-3xl p-6 md:col-span-1 md:row-span-1 flex flex-col justify-center items-center text-center hover:bg-[var(--glass-hover)] transition-colors">
          <div class="flex gap-3 mb-3">
            <i class="ph ph-code text-3xl text-orange-500 dark:text-orange-400"></i>
            <i class="ph ph-paint-brush text-3xl text-cyan-500 dark:text-cyan-400"></i>
          </div>
          <h3 class="font-semibold mb-1">Frontend</h3>
          <p class="text-xs text-muted">HTML, CSS, Tailwind, JS, Bootstrap</p>
        </div>

        <!-- Automatización -->
        <div class="glass-card rounded-3xl p-6 md:col-span-1 md:row-span-1 flex flex-col justify-center items-center text-center hover:bg-[var(--glass-hover)] transition-colors">
          <i class="ph ph-robot text-3xl text-yellow-500 dark:text-yellow-400 mb-3"></i>
          <h3 class="font-semibold mb-1" data-i18n="stack_automation">Automatización</h3>
          <p class="text-xs text-muted">Python, Web Scraping, Selenium</p>
        </div>

        <!-- CMS -->
        <div class="glass-card rounded-3xl p-6 md:col-span-1 md:row-span-1 flex flex-col justify-center items-center text-center hover:bg-[var(--glass-hover)] transition-colors">
          <i class="ph ph-layout text-3xl text-blue-500 dark:text-blue-400 mb-3"></i>
          <h3 class="font-semibold mb-1">CMS</h3>
          <p class="text-xs text-muted">WordPress, Divi, Clientify</p>
        </div>

        <!-- QA Testing -->
        <div class="glass-card rounded-3xl p-6 md:col-span-1 md:row-span-1 flex flex-col justify-center items-center text-center hover:bg-[var(--glass-hover)] transition-colors">
          <i class="ph ph-check-circle text-3xl text-green-500 dark:text-green-400 mb-3"></i>
          <h3 class="font-semibold mb-1">QA Testing</h3>
          <p class="text-xs text-muted" data-i18n="stack_qa_desc">Aseguramiento de Calidad &amp; Debugging</p>
        </div>

      </div>
    </section>
  `;
}
