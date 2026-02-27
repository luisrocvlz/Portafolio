(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const n={htmlEl:document.documentElement,init(){const e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="dark"||!e&&t?this.htmlEl.classList.add("dark"):this.htmlEl.classList.remove("dark"),this._updateIcon(),this._updatePortrait()},toggle(){const e=this.htmlEl.classList.toggle("dark");localStorage.setItem("theme",e?"dark":"light"),this._updateIcon(),this._updatePortrait()},_updateIcon(){const e=document.getElementById("theme-icon");if(!e)return;const t=this.htmlEl.classList.contains("dark");e.className=t?"ph ph-sun text-lg":"ph ph-moon text-lg"},_updatePortrait(){const e=document.getElementById("portrait-img");if(!e)return;const t=this.htmlEl.classList.contains("dark");e.src=t?"/img/portrait_dark.webp":"/img/portrait_light.webp"}},l={currentLang:"es",translations:{},init(e){this.translations=e,this.currentLang="es",this._applyToCvBtn(),this._applyTitles()},toggle(){this.currentLang=this.currentLang==="es"?"en":"es";const e=document.getElementById("lang-text");e&&(e.textContent=this.currentLang==="es"?"EN":"ES"),this._applyAll(),this._applyToCvBtn()},t(e){var t;return((t=this.translations[this.currentLang])==null?void 0:t[e])??e},_applyAll(){document.querySelectorAll("[data-i18n]").forEach(e=>{const t=e.getAttribute("data-i18n"),o=this.t(t);o&&(e.innerHTML=o)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(e=>{const t=e.getAttribute("data-i18n-placeholder"),o=this.t(t);o&&(e.placeholder=o)}),this._applyTitles()},_applyTitles(){document.querySelectorAll("[data-i18n-title]").forEach(e=>{const t=e.getAttribute("data-i18n-title"),o=this.t(t);o&&(e.title=o)})},_applyToCvBtn(){const e=document.getElementById("cv-btn");e&&(this.currentLang==="es"?(e.href="/docs/cv_luis_roca_es.pdf",e.setAttribute("download","Luis_Roca_CV_ES.pdf")):(e.href="/docs/cv_luis_roca_en.pdf",e.setAttribute("download","Luis_Roca_CV_EN.pdf")))}};function p(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){const o=document.querySelector(this.getAttribute("href"));o&&(t.preventDefault(),o.scrollIntoView({behavior:"smooth"}))})})}const g={es:{nav_about:"Perfil",nav_projects:"Proyectos",nav_stack:"Stack",nav_contact:"Contactar",hero_subtitle:"Ingeniero de Sistemas &amp; Desarrollador Web. <br><span class='text-blue-500 dark:text-blue-400'>Creando experiencias digitales precisas y escalables.</span>",hero_btn_work:"Ver Trabajo",about_title:"Sobre Mí",about_p1:'Ingeniero de Sistemas egresado del IUP "Santiago Mariño". Mi enfoque combina la lógica robusta de la ingeniería con la creatividad del desarrollo web.',about_p2:"Especializado en automatización de procesos (QA &amp; Python) y creación de sitios web de alto impacto usando CMS y código a medida.",about_status:"Disponible para proyectos",stack_automation:"Automatización",stack_qa_desc:"Aseguramiento de Calidad &amp; Debugging",stack_title:"Herramientas &amp; Tecnologías",projects_title:"Proyectos",tag_app:"App Android",tag_legal:"Legal",tag_services:"Servicios",tag_health:"Salud",tag_corporate:"Corporativo",tag_thesis:"Proyecto de Grado",tag_portfolio:"Meta",tag_opensource:"Código Abierto",proj_vene_desc:"Aplicación móvil de conversión de divisas en tiempo real adaptada al mercado venezolano.",proj_duarte_desc:"Sitio corporativo para firma legal. Diseño sobrio, optimización SEO y gestión de contenidos en WordPress.",proj_linea_desc:"Diseño responsivo y navegación intuitiva para servicios profesionales.",proj_passos_desc:"Desarrollo enfocado en funcionalidad y accesibilidad para el sector salud en Portugal.",proj_qualitzer_desc:"Desarrollo web corporativo, implementación de QA y automatización de procesos internos.",proj_replikka_desc:"Sitio moderno enfocado en la conversión y presencia digital efectiva.",proj_paz_desc:"E-commerce de productos ortopédicos y servicios de apoyo domiciliario con enfoque humano.",proj_portfolio_desc:"El código fuente de este sitio web. Construido con HTML semántico, Tailwind CSS y Vanilla JS.",proj_thesis_desc:"E-commerce completo desarrollado desde cero. Lógica personalizada para el mercado venezolano e integración de API PayPal.",automation_title:"Scripts &amp; Automatización",automation_desc:"Más allá del frontend, desarrollo soluciones de web scraping y automatización de tareas masivas con Python para optimizar flujos de trabajo.",automation_performance:"Rendimiento",automation_stat_desc:"Optimización en tiempos de carga y descarga masiva de datos.",contact_title:"¿Trabajamos juntos?",contact_subtitle:"Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades de ser parte de tu visión.",contact_ph_name:"Tu Nombre",contact_ph_email:"Tu Correo electrónico",contact_ph_msg:"¿Cómo puedo ayudarte?",contact_btn_send:"Enviar Mensaje",footer_text:"Diseñado con estilo.",footer_location:"Venezuela (GMT-4) | Disponible para proyectos remotos a nivel global.",theme_tooltip:"Tema",lang_tooltip:"Idioma",btn_load_more:"Ver más proyectos",btn_show_less:"Mostrar menos proyectos",error_title:"Ups, ruta equivocada",error_desc:"Parece que la página que buscas no existe o ha sido movida.",btn_home:"Volver al Inicio"},en:{nav_about:"Profile",nav_projects:"Projects",nav_stack:"Stack",nav_contact:"Contact",hero_subtitle:"Systems Engineer &amp; Web Developer. <br><span class='text-blue-500 dark:text-blue-400'>Creating precise and scalable digital experiences.</span>",hero_btn_work:"View Work",about_title:"About Me",about_p1:'Systems Engineer graduated from IUP "Santiago Mariño". My approach combines robust engineering logic with web development creativity.',about_p2:"Specialized in process automation (QA &amp; Python) and creating high-impact websites using CMS and custom code.",about_status:"Available for projects",stack_automation:"Automation",stack_qa_desc:"Quality Assurance &amp; Debugging",stack_title:"Tools &amp; Technologies",projects_title:"Projects",tag_app:"Android App",tag_legal:"Legal",tag_services:"Services",tag_health:"Health",tag_corporate:"Corporate",tag_thesis:"Thesis Project",tag_portfolio:"Meta",tag_opensource:"Open Source",proj_vene_desc:"Real-time currency conversion mobile app adapted for the Venezuelan market.",proj_duarte_desc:"Corporate website for a law firm. Sober design, SEO optimization, and content management via WordPress.",proj_linea_desc:"Responsive design and intuitive navigation for professional services.",proj_passos_desc:"Development focused on functionality and accessibility for the healthcare sector in Portugal.",proj_qualitzer_desc:"Corporate web development, QA implementation, and internal process automation.",proj_replikka_desc:"Modern site focused on conversion and effective digital presence.",proj_paz_desc:"E-commerce for orthopedic products and home care services with a human touch.",proj_portfolio_desc:"The source code of this website. Built with semantic HTML, Tailwind CSS, and Vanilla JS.",proj_thesis_desc:"Full-stack e-commerce built from scratch. Custom logic for the Venezuelan market and PayPal API integration.",automation_title:"Scripts &amp; Automation",automation_desc:"Beyond the frontend, I develop web scraping solutions and mass task automation with Python to optimize workflows.",automation_performance:"Performance Boost",automation_stat_desc:"Optimization in massive data upload and download times.",contact_title:"Work together?",contact_subtitle:"I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",contact_ph_name:"Your Name",contact_ph_email:"Your Email Address",contact_ph_msg:"How can I help you?",contact_btn_send:"Send Message",footer_text:"Designed with style.",footer_location:"Venezuela (GMT-4) | Available for remote projects worldwide.",theme_tooltip:"Theme",lang_tooltip:"Language",btn_load_more:"Show more projects",btn_show_less:"Show less projects",error_title:"Oops, wrong turn",error_desc:"It seems the page you are looking for doesn't exist or has been moved.",btn_home:"Back to Home"}};function u(){return`
    <div class="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 dark:opacity-20 animate-blob transition-opacity duration-500"></div>
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 dark:opacity-20 animate-blob animation-delay-2000 transition-opacity duration-500"></div>
      <div class="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 dark:opacity-20 animate-blob animation-delay-4000 transition-opacity duration-500"></div>
    </div>
  `}function m(){return'<div id="custom-cursor"></div>'}function b(){const e=document.getElementById("custom-cursor");e&&document.addEventListener("mousemove",t=>{e.style.left=`${t.clientX-10}px`,e.style.top=`${t.clientY-10}px`})}function h(){return`
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
  `}function v(){var e,t;(e=document.getElementById("theme-btn"))==null||e.addEventListener("click",()=>n.toggle()),(t=document.getElementById("lang-btn"))==null||t.addEventListener("click",()=>l.toggle())}function f(){return`
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
  `}function x(){return`
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
  `}const y='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#FF5A5F"/><path d="M16.5 9.5C15.7 7.9 13.98 7 12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c1.98 0 3.7-.9 4.5-2.5" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>',_='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.428 20.3a2.428 2.428 0 0 0 3.34.889l5.47-3.158-4.229-7.326-5.47 3.158a2.428 2.428 0 0 0-.889 3.34L2.428 20.3z" fill="#FBBC04"/><path d="M21.57 20.3a2.428 2.428 0 0 1-3.34.889L6.065 14.714l2.165-3.748L21.57 16.96a2.428 2.428 0 0 1 .889 3.34H21.57z" fill="#4285F4"/><path d="M15.773 3.7a2.428 2.428 0 1 0-4.207 2.428l6.35 10.996 2.165-3.748L15.773 3.7z" fill="#34A853"/></svg>',w='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11h-4V3h4v8zm-7 10h-4V8h4v13zm-7 0H4V13h4v8z" fill="#E37400"/></svg>',d=[{svgUrl:"https://svgl.app/library/python.svg",label:"Python"},{svgUrl:"https://svgl.app/library/javascript.svg",label:"JavaScript"},{svgUrl:"https://svgl.app/library/php.svg",label:"PHP"},{svgUrl:"https://svgl.app/library/mysql-icon-light.svg",label:"MySQL",darkSvgUrl:"https://svgl.app/library/mysql-icon-dark.svg"},{svgUrl:"https://svgl.app/library/git.svg",label:"Git"},{svgUrl:"https://svgl.app/library/vscode.svg",label:"VS Code"},{svgUrl:"https://svgl.app/library/wordpress.svg",label:"WordPress"},{svgSrc:y,label:"Clientify"},{svgSrc:_,label:"Google Ads"},{svgSrc:w,label:"Analytics"},{svgUrl:"https://svgl.app/library/claude-ai-icon.svg",label:"Claude"},{svgUrl:"https://svgl.app/library/copilot.svg",label:"Copilot"},{svgUrl:"https://svgl.app/library/gemini.svg",label:"Gemini"},{svgUrl:"https://svgl.app/library/antigravity.svg",label:"Antigravity"},{svgUrl:"https://svgl.app/library/canva.svg",label:"Canva"}];function k(e){let t;return e.svgSrc?t=`<span class="tech-icon inline-flex items-center justify-center w-5 h-5">${e.svgSrc}</span>`:e.darkSvgUrl?t=`
      <img src="${e.svgUrl}" alt="${e.label}" class="tech-icon tech-icon--light w-5 h-5 object-contain" loading="lazy">
      <img src="${e.darkSvgUrl}" alt="${e.label}" class="tech-icon tech-icon--dark w-5 h-5 object-contain hidden" loading="lazy">
    `:t=`<img src="${e.svgUrl}" alt="${e.label}" class="tech-icon w-5 h-5 object-contain" loading="lazy">`,`
    <div class="glass-card px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap flex-shrink-0 hover:bg-white/10 transition-colors cursor-default flex items-center gap-2.5">
      ${t}
      <span>${e.label}</span>
    </div>
  `}function C(){return`
    <section class="mb-24 px-4 overflow-hidden">
      <p class="text-center text-sm text-muted font-medium mb-8 uppercase tracking-widest" data-i18n="stack_title">
        Herramientas &amp; Tecnologías
      </p>
      <div class="relative max-w-5xl mx-auto flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div class="flex gap-4 animate-scroll w-max py-4 hover:[animation-play-state:paused]">
          ${[...d,...d].map(k).join("")}
        </div>
      </div>
    </section>
  `}function c(){const e=document.documentElement.classList.contains("dark");document.querySelectorAll(".tech-icon--light").forEach(t=>{t.classList.toggle("hidden",e)}),document.querySelectorAll(".tech-icon--dark").forEach(t=>{t.classList.toggle("hidden",!e)})}const S=[{id:"vene-converter",href:"https://github.com/luisrocvlz/vene_converter",target:"_blank",imgSrc:"/img/vene_converter.webp",imgAlt:"VeneConverter App",bgColor:"bg-green-900",tagKey:"tag_app",tagColor:"bg-green-600/80",title:"VeneConverter",hoverColor:"group-hover:text-green-400",descKey:"proj_vene_desc",tags:["Android","API Rest"],hidden:!1},{id:"duarte-abogados",href:"https://duarteabogados.cl",target:"_blank",imgSrc:"/img/duarte_abogados.webp",imgAlt:"Duarte Abogados",bgColor:"bg-slate-800",tagKey:"tag_legal",tagColor:"bg-slate-600/80",title:"DuarteAbogados.cl",hoverColor:"group-hover:text-slate-400",descKey:"proj_duarte_desc",tags:["WordPress","Corporate"],hidden:!1},{id:"linea-amarilla",href:"https://lineaamarillahs.cl",target:"_blank",imgSrc:"/img/linea_amarilla.webp",imgAlt:"Linea Amarilla",bgColor:"bg-gray-200 dark:bg-gray-800",tagKey:"tag_services",tagColor:"bg-yellow-600/80",title:"Lineaamarillahs.cl",hoverColor:"group-hover:text-yellow-500 dark:group-hover:text-yellow-400",descKey:"proj_linea_desc",tags:["Responsive","Design"],hidden:!1},{id:"passos-atenciosos",href:"https://passosatenciosos.pt",target:"_blank",imgSrc:"/img/passos_atenciosos.webp",imgAlt:"Passos Atenciosos",bgColor:"bg-gray-200 dark:bg-gray-800",tagKey:"tag_health",tagColor:"bg-green-600/80",title:"Passosatenciosos.pt",hoverColor:"group-hover:text-green-500 dark:group-hover:text-green-400",descKey:"proj_passos_desc",tags:["Web","CMS"],hidden:!1},{id:"tienda-virtual",href:"https://github.com/luisrocvlz/tienda-virtual",target:"_blank",imgSrc:"/img/tienda_virtual.webp",imgAlt:"Tienda Virtual",bgColor:"bg-gray-900",tagKey:"tag_thesis",tagColor:"bg-indigo-600/80",title:"E-Commerce Custom",hoverColor:"group-hover:text-indigo-400",descKey:"proj_thesis_desc",tags:["PHP + JS","PayPal"],isGithub:!0,hidden:!1},{id:"qualitzer",href:"https://qualitzer.com",target:"_blank",imgSrc:"/img/qualitzer.webp",imgAlt:"Qualitzer",bgColor:"bg-gray-200 dark:bg-gray-800",tagKey:"tag_corporate",tagColor:"bg-blue-600/80",title:"Qualitzer.com",hoverColor:"group-hover:text-blue-500 dark:group-hover:text-blue-400",descKey:"proj_qualitzer_desc",tags:["WordPress","Python"],hidden:!1},{id:"replikka",href:"https://replikka.cl",target:"_blank",imgSrc:"/img/repplika.webp",imgAlt:"Replikka",bgColor:"bg-gray-200 dark:bg-gray-800",tagKey:null,tagLabel:"E-Commerce",tagColor:"bg-purple-600/80",title:"Replikka.cl",hoverColor:"group-hover:text-purple-500 dark:group-hover:text-purple-400",descKey:"proj_replikka_desc",tags:["Clientify","Frontend"],hidden:!0},{id:"paz-e-serenidade",href:"https://pazeserenidade.pt",target:"_blank",imgSrc:"/img/paz_e_serenidade.webp",imgAlt:"Ortopedia Paz e Serenidade",bgColor:"bg-gray-200 dark:bg-gray-800",tagKey:"tag_health",tagColor:"bg-teal-600/80",title:"Pazeserenidade.pt",hoverColor:"group-hover:text-teal-500 dark:group-hover:text-teal-400",descKey:"proj_paz_desc",tags:["E-Commerce","Web"],hidden:!0},{id:"portfolio",href:"https://github.com/luisrocvlz/Portafolio",target:"_blank",imgSrc:null,imgAlt:null,bgColor:"bg-gradient-to-br from-blue-600 to-purple-700",tagKey:"tag_portfolio",tagColor:"bg-blue-400/80",title:"Portfolio V2",hoverColor:"group-hover:text-blue-400",descKey:"proj_portfolio_desc",tags:["Vite","Open Source"],isPortfolio:!0,hidden:!1}];function z(e){const t=e.tagKey?`<span data-i18n="${e.tagKey}">${l.t(e.tagKey)}</span>`:`<span>${e.tagLabel??""}</span>`;let o;e.isPortfolio?o=`
      <div class="h-48 ${e.bgColor} relative overflow-hidden flex items-center justify-center">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
        <i class="ph ph-github-logo text-6xl text-white group-hover:text-gray-200 transition-colors duration-500 relative z-10"></i>
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
        <div class="absolute bottom-4 left-4 z-20">
          <span class="${e.tagColor} backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">${t}</span>
        </div>
      </div>`:e.isGithub?o=`
      <div class="h-48 ${e.bgColor} relative overflow-hidden flex items-center justify-center">
        <img src="${e.imgSrc}" alt="${e.imgAlt}" loading="lazy" width="600" height="400"
          class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500">
        <i class="ph ph-github-logo text-6xl text-gray-300 group-hover:text-white transition-colors duration-500 relative z-10"></i>
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
        <div class="absolute bottom-4 left-4 z-20">
          <span class="${e.tagColor} backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">${t}</span>
        </div>
      </div>`:o=`
      <div class="h-48 ${e.bgColor} relative overflow-hidden">
        <img src="${e.imgSrc}" alt="${e.imgAlt}" loading="lazy" width="600" height="400"
          class="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:scale-110 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div class="absolute bottom-4 left-4">
          <span class="${e.tagColor} backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">${t}</span>
        </div>
      </div>`;const i=e.tags.map(r=>`
    <span class="text-xs text-muted border border-[var(--glass-border)] px-2 py-1 rounded-md">${r}</span>
  `).join(""),a=e.hidden?"hidden-project hidden":"";return`
    <a href="${e.href}" target="${e.target??"_blank"}"
      class="${a} group glass-card rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 block">
      ${o}
      <div class="p-6 relative">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-xl font-bold ${e.hoverColor} transition-colors">${e.title}</h3>
          <div class="relative group/info z-30">
            <button class="text-muted/50 hover:text-[var(--text-main)] transition-colors p-1" aria-label="Info">
              <i class="ph ph-info text-xl"></i>
            </button>
            <div class="absolute right-0 top-full mt-2 w-64 bg-gray-900/95 dark:bg-black/95 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl opacity-0 invisible group-hover/info:opacity-100 group-hover/info:visible transition-all duration-200 scale-95 group-hover/info:scale-100 origin-top-right z-50 pointer-events-none">
              <p class="text-xs text-gray-200 leading-relaxed font-medium text-left" data-i18n="${e.descKey}">
                ${l.t(e.descKey)}
              </p>
            </div>
          </div>
        </div>
        <p class="text-muted text-sm line-clamp-2 mb-4" data-i18n="${e.descKey}">
          ${l.t(e.descKey)}
        </p>
        <div class="flex flex-wrap gap-2">${i}</div>
      </div>
    </a>
  `}function A(){return`
    <section id="projects" class="mb-24">
      <div class="flex items-center justify-between mb-8 px-2">
        <h2 class="text-3xl font-bold" data-i18n="projects_title">Proyectos</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${S.map(z).join("")}
        
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
  
      </div>

      <div class="mt-12 flex justify-center">
        <button id="load-more-btn"
          class="glass-card px-8 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group hover:scale-105 active:scale-95">
          <span id="load-more-text" data-i18n="btn_load_more">Ver más proyectos</span>
          <i id="load-more-icon" class="ph ph-caret-down text-lg group-hover:translate-y-1 transition-transform"></i>
        </button>
      </div>
    </section>
  `}function P(){const e=document.getElementById("load-more-btn"),t=document.getElementById("load-more-text"),o=document.getElementById("load-more-icon"),i=document.querySelectorAll(".hidden-project");if(!e||!i.length)return;let a=!1;e.addEventListener("click",()=>{var r;a=!a,i.forEach(s=>{a?(s.classList.remove("hidden"),s.classList.add("animate-fade-in")):(s.classList.add("hidden"),s.classList.remove("animate-fade-in"))}),t.setAttribute("data-i18n",a?"btn_show_less":"btn_load_more"),t.innerText=a?l.t("btn_show_less"):l.t("btn_load_more"),o.className=a?"ph ph-caret-up text-lg group-hover:-translate-y-1 transition-transform":"ph ph-caret-down text-lg group-hover:translate-y-1 transition-transform",a||(r=document.getElementById("projects"))==null||r.scrollIntoView({behavior:"smooth"})})}function j(){return`
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
  `}function E(){return`
    <footer class="mt-16 text-center text-muted text-sm">
      <p>&copy; 2025 Luis Roca Velásquez. <span data-i18n="footer_text">Diseñado con estilo.</span></p>
      <p data-i18n="footer_location">Venezuela (GMT-4) | Disponible para proyectos remotos a nivel global.</p>
    </footer>
  `}l.init(g);n.init();const L=document.getElementById("app");L.innerHTML=`
  ${u()}
  ${m()}
  ${h()}

  <main class="container mx-auto px-4 pt-32 pb-20 max-w-5xl">
    ${f()}
    ${x()}
    ${C()}
    ${A()}
    ${j()}
    ${E()}
  </main>
`;b();v();P();p();c();const T=n.toggle.bind(n);n.toggle=function(){T(),c()};
