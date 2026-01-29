// --- Theme Logic ---
const htmlElement = document.documentElement;
const themeIcon = document.getElementById('theme-icon');

// Check system preference or saved preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
    themeIcon.classList.replace('ph-moon', 'ph-sun');
} else {
    htmlElement.classList.remove('dark');
    themeIcon.classList.replace('ph-sun', 'ph-moon');
}

function updatePortrait() {
    const portraitImg = document.getElementById('portrait-img');
    if (htmlElement.classList.contains('dark')) {
        portraitImg.src = 'assets/img/portrait_dark.webp';
    } else {
        portraitImg.src = 'assets/img/portrait_light.webp';
    }
}

updatePortrait();

function toggleTheme() {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.theme = 'light';
        themeIcon.classList.replace('ph-sun', 'ph-moon');
    } else {
        htmlElement.classList.add('dark');
        localStorage.theme = 'dark';
        themeIcon.classList.replace('ph-moon', 'ph-sun');
    }
    updatePortrait();
}

// --- Language Logic ---
const langText = document.getElementById('lang-text');
let currentLang = 'es';

const translations = {
    es: {
        nav_about: "Perfil",
        nav_projects: "Proyectos",
        nav_stack: "Stack",
        nav_contact: "Contactar",
        hero_subtitle: "Ingeniero de Sistemas & Desarrollador Web. <br><span class='text-blue-500 dark:text-blue-400'>Creando experiencias digitales precisas y escalables.</span>",
        hero_btn_work: "Ver Trabajo",
        about_title: "Sobre Mí",
        about_p1: "Ingeniero de Sistemas egresado del IUP \"Santiago Mariño\". Mi enfoque combina la lógica robusta de la ingeniería con la creatividad del desarrollo web.",
        about_p2: "Especializado en automatización de procesos (QA & Python) y creación de sitios web de alto impacto usando CMS y código a medida.",
        about_status: "Disponible para proyectos",
        stack_automation: "Automatización",
        stack_qa_desc: "Aseguramiento de Calidad & Debugging",
        projects_title: "Proyectos",
        tag_corporate: "Corporativo",
        tag_services: "Servicios",
        tag_health: "Salud",
        proj_qualitzer_desc: "Desarrollo web corporativo, implementación de QA y automatización de procesos internos.",
        proj_replikka_desc: "Sitio moderno enfocado en la conversión y presencia digital efectiva.",
        proj_linea_desc: "Diseño responsivo y navegación intuitiva para servicios profesionales.",
        proj_passos_desc: "Desarrollo enfocado en funcionalidad y accesibilidad para el sector salud en Portugal.",
        automation_title: "Scripts & Automatización",
        automation_desc: "Desarrollo de bots y scripts de web scraping para automatizar tareas repetitivas y complejas.",
        automation_metric: "Optimización en flujos de carga y descarga masiva de datos.",
        automation_performance: "Rendimiento",
        automation_faster: "Más Rápido",
        contact_title: "¿Trabajamos juntos?",
        contact_subtitle: "Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades de ser parte de tu visión.",
        contact_email: "Enviar Correo",
        footer_text: "Diseñado con estilo.",
        proj_paz_desc: "E-commerce de productos ortopédicos y servicios de apoyo domiciliario con enfoque humano.",
        tag_opensource: "Código Abierto",
        tag_portfolio: "Portafolio",
        proj_github_desc: "Repositorio de código con utilidades avanzadas. Explora la estructura y lógica interna en GitHub.",
        proj_portfolio_desc: "El código fuente de este sitio web. Construido con HTML semántico, Tailwind CSS y Vanilla JS.",
        tag_thesis: "Proyecto de Grado",
        proj_thesis_desc: "E-commerce completo desarrollado desde cero. Lógica personalizada para el mercado venezolano e integración de API PayPal.",
        contact_ph_name: "Tu Nombre",
        contact_ph_email: "Tu Correo electrónico",
        contact_ph_msg: "¿Cómo puedo ayudarte?",
        contact_btn_send: "Enviar Mensaje",
        stack_title: "Herramientas & Tecnologías",
        error_title: "Ups, ruta equivocada",
        error_desc: "Parece que la página que buscas no existe o ha sido movida.",
        btn_home: "Volver al Inicio",
        footer_location: "Venezuela (GMT-4) | Disponible para proyectos remotos a nivel global.",
        theme_tooltip: "Tema",
        lang_tooltip: "Idioma",
        btn_load_more: "Ver más proyectos",
        btn_show_less: "Ver menos",
        automation_performance: "Rendimiento",
        tag_app: "App Android",
        proj_vene_desc: "Aplicación móvil de conversión de divisas en tiempo real adaptada al mercado venezolano.",
        tag_legal: "Legal",
        proj_duarte_desc: "Sitio corporativo para firma legal. Diseño sobrio, optimización SEO y gestión de contenidos en WordPress.",
        automation_performance: "Rendimiento",
        automation_stat_desc: "Optimización en tiempos de carga y descarga masiva de datos.",
        btn_load_more: "Ver más proyectos",
        btn_show_less: "Mostrar menos proyectos",
    },
    en: {
        nav_about: "Profile",
        nav_projects: "Projects",
        nav_stack: "Stack",
        nav_contact: "Contact",
        hero_subtitle: "Systems Engineer & Web Developer. <br><span class='text-blue-500 dark:text-blue-400'>Creating precise and scalable digital experiences.</span>",
        hero_btn_work: "View Work",
        about_title: "About Me",
        about_p1: "Systems Engineer graduated from IUP \"Santiago Mariño\". My approach combines robust engineering logic with web development creativity.",
        about_p2: "Specialized in process automation (QA & Python) and creating high-impact websites using CMS and custom code.",
        about_status: "Available for projects",
        stack_automation: "Automation",
        stack_qa_desc: "Quality Assurance & Debugging",
        projects_title: "Projects",
        tag_corporate: "Corporate",
        tag_services: "Services",
        tag_health: "Health",
        proj_qualitzer_desc: "Corporate web development, QA implementation, and internal process automation.",
        proj_replikka_desc: "Modern site focused on conversion and effective digital presence.",
        proj_linea_desc: "Responsive design and intuitive navigation for professional services.",
        proj_passos_desc: "Development focused on functionality and accessibility for the healthcare sector in Portugal.",
        automation_title: "Scripts & Automation",
        automation_desc: "Development of bots and web scraping scripts to automate complex and repetitive tasks.",
        automation_metric: "Optimization in massive data upload and download flows.",
        automation_performance: "Performance",
        automation_faster: "Faster",
        contact_title: "Work together?",
        contact_subtitle: "I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
        contact_email: "Send Email",
        footer_text: "Designed with style.",
        proj_paz_desc: "E-commerce for orthopedic products and home care services with a human touch.",
        tag_opensource: "Open Source",
        tag_portfolio: "Portfolio",
        proj_github_desc: "Code repository with advanced utilities. Explore the internal structure and logic on GitHub.",
        proj_portfolio_desc: "The source code of this website. Built with semantic HTML, Tailwind CSS, and Vanilla JS.",
        tag_thesis: "Thesis Project",
        proj_thesis_desc: "Full-stack e-commerce developed from scratch. Custom logic for the Venezuelan market and PayPal API integration.",
        contact_ph_name: "Your Name",
        contact_ph_email: "Your Email Address",
        contact_ph_msg: "How can I help you?",
        contact_btn_send: "Send Message",
        stack_title: "Tools & Technologies",
        error_title: "Oops, wrong turn",
        error_desc: "It seems the page you are looking for doesn't exist or has been moved.",
        btn_home: "Back to Home",
        footer_location: "Venezuela (GMT-4) | Available for remote projects worldwide.",
        theme_tooltip: "Theme",
        lang_tooltip: "Language",
        btn_load_more: "Show more projects",
        btn_show_less: "Show less",
        automation_performance: "Performance",
        tag_app: "Android App",
        proj_vene_desc: "Real-time currency conversion mobile app adapted for the Venezuelan market.",
        tag_legal: "Legal",
        proj_duarte_desc: "Corporate website for a law firm. Sober design, SEO optimization, and content management via WordPress.",
        automation_performance: "Performance Boost",
        automation_stat_desc: "Optimization in massive data upload and download times.",
        btn_load_more: "Show more projects",
        btn_show_less: "Show less projects",
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    langText.textContent = currentLang === 'es' ? 'EN' : 'ES';

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });

    const titles = document.querySelectorAll('[data-i18n-title]');
    titles.forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (translations[currentLang][key]) {
            el.title = translations[currentLang][key];
        }
    });

    const cvBtn = document.getElementById('cv-btn');
    if (cvBtn) {
        if (currentLang === 'es') {
            cvBtn.href = "assets/docs/cv_luis_roca_es.pdf";
            cvBtn.setAttribute('download', "cv_luis_roca_es.pdf");
        } else {
            cvBtn.href = "assets/docs/cv_luis_roca_en.pdf";
            cvBtn.setAttribute('download', "cv_luis_roca_en.pdf");
        }
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize titles on page load
const initTitles = document.querySelectorAll('[data-i18n-title]');
initTitles.forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (translations[currentLang][key]) {
        el.title = translations[currentLang][key];
    }
});

// --- Custom Cursor ---
const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = (e.clientX - 10) + 'px';
    cursor.style.top = (e.clientY - 10) + 'px';
});

document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const loadMoreText = document.getElementById('load-more-text');
    const loadMoreIcon = document.getElementById('load-more-icon');
    const hiddenProjects = document.querySelectorAll('.hidden-project');

    let isExpanded = false;

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;

            // 1. Mostrar / Ocultar Proyectos
            hiddenProjects.forEach(project => {
                if (isExpanded) {
                    project.classList.remove('hidden');
                    project.classList.add('animate-fade-in');
                } else {
                    project.classList.add('hidden');
                    project.classList.remove('animate-fade-in');
                }
            });

            // 2. Detectar idioma actual (buscamos la variable o el atributo html)
            const currentLang = document.documentElement.lang || 'es';

            // 3. Actualizar Botón
            if (isExpanded) {
                loadMoreText.setAttribute('data-i18n', 'btn_show_less');

                loadMoreText.innerText = currentLang === 'en' ? 'Show less projects' : 'Mostrar menos proyectos';

                loadMoreIcon.classList.remove('ph-caret-down');
                loadMoreIcon.classList.add('ph-caret-up');

            } else {
                loadMoreText.setAttribute('data-i18n', 'btn_load_more');

                loadMoreText.innerText = currentLang === 'en' ? 'Show more projects' : 'Ver más proyectos';

                loadMoreIcon.classList.remove('ph-caret-up');
                loadMoreIcon.classList.add('ph-caret-down');

                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});