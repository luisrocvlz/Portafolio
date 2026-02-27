/**
 * @file techStack.js
 * @description Technology and tool list for the infinite scroll ticker.
 * SVG logos from svgl.app where available; custom inline SVGs otherwise.
 */

// ── Inline SVGs for tools not available on svgl.app ──────────────────────────

// Clientify CRM — official brand color #FF5A5F
const clientifySvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#FF5A5F"/><path d="M16.5 9.5C15.7 7.9 13.98 7 12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c1.98 0 3.7-.9 4.5-2.5" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>`;

// Google Ads — uses Google tri-color palette
const googleAdsSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.428 20.3a2.428 2.428 0 0 0 3.34.889l5.47-3.158-4.229-7.326-5.47 3.158a2.428 2.428 0 0 0-.889 3.34L2.428 20.3z" fill="#FBBC04"/><path d="M21.57 20.3a2.428 2.428 0 0 1-3.34.889L6.065 14.714l2.165-3.748L21.57 16.96a2.428 2.428 0 0 1 .889 3.34H21.57z" fill="#4285F4"/><path d="M15.773 3.7a2.428 2.428 0 1 0-4.207 2.428l6.35 10.996 2.165-3.748L15.773 3.7z" fill="#34A853"/></svg>`;

// Google Analytics 4 — official orange/flame icon
const googleAnalyticsSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11h-4V3h4v8zm-7 10h-4V8h4v13zm-7 0H4V13h4v8z" fill="#E37400"/></svg>`;

// ─────────────────────────────────────────────────────────────────────────────

export const techStack = [
    // — Programming Languages —
    { svgUrl: 'https://svgl.app/library/python.svg', label: 'Python' },
    { svgUrl: 'https://svgl.app/library/javascript.svg', label: 'JavaScript' },
    { svgUrl: 'https://svgl.app/library/php.svg', label: 'PHP' },

    // — Databases —
    { svgUrl: 'https://svgl.app/library/mysql-icon-light.svg', label: 'MySQL', darkSvgUrl: 'https://svgl.app/library/mysql-icon-dark.svg' },

    // — Dev Tools & IDEs —
    { svgUrl: 'https://svgl.app/library/git.svg', label: 'Git' },
    { svgUrl: 'https://svgl.app/library/vscode.svg', label: 'VS Code' },

    // — CMS & Marketing —
    { svgUrl: 'https://svgl.app/library/wordpress.svg', label: 'WordPress' },
    { svgSrc: clientifySvg, label: 'Clientify' },
    { svgSrc: googleAdsSvg, label: 'Google Ads' },
    { svgSrc: googleAnalyticsSvg, label: 'Analytics' },

    // — AI Coding Assistants —
    { svgUrl: 'https://svgl.app/library/claude-ai-icon.svg', label: 'Claude' },
    { svgUrl: 'https://svgl.app/library/copilot.svg', label: 'Copilot' },
    { svgUrl: 'https://svgl.app/library/gemini.svg', label: 'Gemini' },
    { svgUrl: 'https://svgl.app/library/antigravity.svg', label: 'Antigravity' },

    // — Design —
    { svgUrl: 'https://svgl.app/library/canva.svg', label: 'Canva' },
];
