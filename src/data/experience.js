/**
 * @file experience.js
 * @description Career data for the "Trayectoria" (Experience) section.
 *
 * `timeline`        → vertical professional/education timeline (newest first).
 * `collaborations`  → private / client projects (NDA repos). The client name is
 *                     shown, but there is NO external link to the private repo.
 *
 * Fields ending in `Key` reference translation keys in src/data/translations.js.
 * Company, client, location and tag labels are literal strings.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * NOTE: The entries below are EDITABLE PLACEHOLDERS. Replace the company names,
 *       clients, periods, locations and tags with your real data, and update
 *       the matching *_desc / *_role / *_period / *_sector keys in
 *       translations.js (both `es` and `en`).
 * ──────────────────────────────────────────────────────────────────────────
 */

export const timeline = [
    {
        id: 'current-job',
        periodKey: 'exp_current_period',
        roleKey: 'exp_current_role',
        company: 'Qualitzer',
        location: 'Remoto · Chile',
        icon: 'ph-briefcase',
        // Node + icon color (literal Tailwind classes so they survive purge)
        dotColor: 'bg-blue-500',
        iconColor: 'text-blue-500 dark:text-blue-400',
        ringColor: 'bg-blue-500/20',
        descKey: 'exp_current_desc',
        tags: ['Frontend', 'QA Automation', 'Python', 'WordPress'],
        current: true,
    },
    {
        id: 'freelance',
        periodKey: 'exp_freelance_period',
        roleKey: 'exp_freelance_role',
        company: 'Freelance',
        location: 'Remoto · LATAM / EU',
        icon: 'ph-rocket-launch',
        dotColor: 'bg-purple-500',
        iconColor: 'text-purple-500 dark:text-purple-400',
        ringColor: 'bg-purple-500/20',
        descKey: 'exp_freelance_desc',
        tags: ['React', 'WordPress', 'SEO', 'Web Scraping'],
        current: false,
    },
    {
        id: 'education',
        periodKey: 'exp_education_period',
        roleKey: 'exp_education_role',
        company: 'IUP "Santiago Mariño"',
        location: 'Venezuela',
        icon: 'ph-graduation-cap',
        dotColor: 'bg-emerald-500',
        iconColor: 'text-emerald-500 dark:text-emerald-400',
        ringColor: 'bg-emerald-500/20',
        descKey: 'exp_education_desc',
        tags: ['Ingeniería de Sistemas'],
        current: false,
    },
];

export const collaborations = [
    {
        id: 'qualitzer-erp',
        name: 'Qualitzer ERP',
        client: 'Jaras Diesel, Grupo Eliseo',
        location: 'Chile',
        roleKey: 'collab_role_frontend',
        icon: 'ph-buildings',
        iconColor: 'text-blue-500 dark:text-blue-400',
        ringColor: 'bg-blue-500/10',
        descKey: 'collab_qualitzer_desc',
        tags: ['React', 'Arquitectura Hexagonal', 'ERP', 'Frontend'],
        private: true,
    },
    {
        id: 'matec-maquinaria',
        name: 'Gestión de Maquinaria Pesada',
        client: 'Matec SpA',
        location: 'Chile',
        roleKey: 'collab_role_frontend',
        icon: 'ph-truck',
        iconColor: 'text-amber-500 dark:text-amber-400',
        ringColor: 'bg-amber-500/10',
        descKey: 'collab_matec_desc',
        tags: ['React', 'Arquitectura Hexagonal', 'Gestión', 'Frontend'],
        private: true,
    },
    {
        id: 'duarte-sindicatos',
        name: 'Gestión de Sindicatos',
        client: 'Duarte Abogados',
        location: 'Chile',
        roleKey: 'collab_role_frontend',
        icon: 'ph-users-three',
        iconColor: 'text-indigo-500 dark:text-indigo-400',
        ringColor: 'bg-indigo-500/10',
        descKey: 'collab_duarte_desc',
        tags: ['React', 'Arquitectura Hexagonal', 'Gestión', 'Frontend'],
        private: true,
    },
];
