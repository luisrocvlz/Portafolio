/**
 * @file Hero.js
 * @description Hero section with portrait, name, subtitle, and CTA buttons.
 */

export function Hero() {
    return `
    <section class="flex flex-col items-center text-center mb-24 animate-fade-in">
      <div class="relative w-64 h-64 mb-6 group">
        <div class="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
        <img
          id="portrait-img"
          src="/img/portrait_dark.webp"
          alt="Luis Roca"
          loading="lazy"
          class="relative w-64 h-64 rounded-full object-cover border-2 border-[var(--glass-border)] p-1 bg-[var(--bg-color)]"
        >
      </div>

      <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-[var(--text-main)] to-gray-500 transition-colors duration-500">
        Luis Roca Velásquez
      </h1>

      <p class="text-xl md:text-2xl text-muted font-light max-w-2xl mx-auto leading-relaxed" data-i18n="hero_subtitle">
        Ingeniero de Sistemas &amp; Desarrollador Web. <br>
        <span class="text-blue-500 dark:text-blue-400">Creando experiencias digitales precisas y escalables.</span>
      </p>

      <div class="mt-8 flex gap-4">
        <a href="#projects" class="glass-card px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform flex items-center gap-2">
          <i class="ph ph-arrow-down"></i>
          <span data-i18n="hero_btn_work">Ver Trabajo</span>
        </a>
        <a href="https://www.linkedin.com/in/luisrocavelasquez/" target="_blank"
          class="px-6 py-3 rounded-full text-sm font-medium text-muted hover:text-[var(--text-main)] transition-colors flex items-center gap-2">
          <i class="ph ph-linkedin-logo text-lg"></i> LinkedIn
        </a>
      </div>
    </section>
  `;
}
