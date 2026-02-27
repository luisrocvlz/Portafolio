/**
 * @file theme.js
 * @description Dark/light mode manager. Reads from localStorage and system preferences.
 */

export const Theme = {
    htmlEl: document.documentElement,

    /** Initialize theme from localStorage or system preference */
    init() {
        const saved = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (saved === 'dark' || (!saved && prefersDark)) {
            this.htmlEl.classList.add('dark');
        } else {
            this.htmlEl.classList.remove('dark');
        }

        this._updateIcon();
        this._updatePortrait();
    },

    /** Toggle between dark and light mode */
    toggle() {
        const isDark = this.htmlEl.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        this._updateIcon();
        this._updatePortrait();
    },

    /** Sync theme icon in the navbar */
    _updateIcon() {
        const icon = document.getElementById('theme-icon');
        if (!icon) return;
        const isDark = this.htmlEl.classList.contains('dark');
        icon.className = isDark ? 'ph ph-sun text-lg' : 'ph ph-moon text-lg';
    },

    /** Swap portrait image based on current theme */
    _updatePortrait() {
        const img = document.getElementById('portrait-img');
        if (!img) return;
        const isDark = this.htmlEl.classList.contains('dark');
        img.src = isDark ? '/img/portrait_dark.webp' : '/img/portrait_light.webp';
    },
};
