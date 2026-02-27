/**
 * @file Contact.js
 * @description Contact section with LinkedIn link and Formspree form.
 */

export function Contact() {
    return `
    <section id="contact" class="max-w-5xl mx-auto py-16 px-4">
      <div class="glass-card rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-[80px] opacity-20 pointer-events-none"></div>

        <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div class="text-left">
            <h2 class="text-4xl font-bold mb-4" data-i18n="contact_title">¿Trabajamos juntos?</h2>
            <p class="text-muted mb-8 leading-relaxed" data-i18n="contact_subtitle">
              Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades de ser parte de tu visión.
            </p>
            <a href="https://www.linkedin.com/in/luisrocavelasquez/" target="_blank"
              class="inline-flex items-center gap-2 text-sm font-semibold hover:text-blue-500 transition-colors group">
              <span class="p-2 rounded-full bg-[var(--text-main)] text-[var(--bg-color)] group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <i class="ph ph-linkedin-logo text-lg"></i>
              </span>
              <span>LinkedIn</span>
            </a>
          </div>

          <form action="https://formspree.io/f/xkgdbnza" method="POST" class="flex flex-col gap-4">
            <div class="relative group">
              <input type="text" name="name"
                placeholder="Tu Nombre"
                data-i18n-placeholder="contact_ph_name"
                required
                class="w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-[var(--glass-border)] rounded-2xl px-5 py-4 outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-white/10 transition-all placeholder:text-muted/50 text-sm text-[var(--text-main)]">
            </div>
            <div class="relative group">
              <input type="email" name="email"
                placeholder="Tu Correo electrónico"
                data-i18n-placeholder="contact_ph_email"
                required
                class="w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-[var(--glass-border)] rounded-2xl px-5 py-4 outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-white/10 transition-all placeholder:text-muted/50 text-sm text-[var(--text-main)]">
            </div>
            <div class="relative group">
              <textarea name="message" rows="4"
                placeholder="¿Cómo puedo ayudarte?"
                data-i18n-placeholder="contact_ph_msg"
                required
                class="w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-[var(--glass-border)] rounded-2xl px-5 py-4 outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-white/10 transition-all placeholder:text-muted/50 text-sm resize-none text-[var(--text-main)]"></textarea>
            </div>
            <button type="submit"
              class="w-full bg-[var(--text-main)] text-[var(--bg-color)] px-6 py-4 rounded-2xl font-bold hover:opacity-90 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 mt-2 shadow-lg">
              <i class="ph ph-paper-plane-right text-lg"></i>
              <span data-i18n="contact_btn_send">Enviar Mensaje</span>
            </button>
          </form>

        </div>
      </div>
    </section>
  `;
}
