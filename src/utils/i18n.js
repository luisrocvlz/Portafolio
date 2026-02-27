/**
 * @file i18n.js
 * @description Lightweight internationalization manager.
 * Reads data-i18n, data-i18n-placeholder, and data-i18n-title attributes.
 */

export const I18n = {
    currentLang: 'es',
    translations: {},

    /**
     * Initialize with translation data.
     * @param {Object} translations - { es: {...}, en: {...} }
     */
    init(translations) {
        this.translations = translations;
        this.currentLang = 'es';
        this._applyToCvBtn();
        this._applyTitles();
    },

    /** Toggle between ES and EN */
    toggle() {
        this.currentLang = this.currentLang === 'es' ? 'en' : 'es';

        // Update lang button label
        const langText = document.getElementById('lang-text');
        if (langText) {
            langText.textContent = this.currentLang === 'es' ? 'EN' : 'ES';
        }

        this._applyAll();
        this._applyToCvBtn();
    },

    /**
     * Get a translated string by key.
     * @param {string} key
     * @returns {string}
     */
    t(key) {
        return this.translations[this.currentLang]?.[key] ?? key;
    },

    /** Apply all translations to the DOM */
    _applyAll() {
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            const val = this.t(key);
            if (val) el.innerHTML = val;
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            const val = this.t(key);
            if (val) el.placeholder = val;
        });

        this._applyTitles();
    },

    _applyTitles() {
        document.querySelectorAll('[data-i18n-title]').forEach((el) => {
            const key = el.getAttribute('data-i18n-title');
            const val = this.t(key);
            if (val) el.title = val;
        });
    },

    /** Swap CV download link based on language */
    _applyToCvBtn() {
        const cvBtn = document.getElementById('cv-btn');
        if (!cvBtn) return;
        if (this.currentLang === 'es') {
            cvBtn.href = '/docs/cv_luis_roca_es.pdf';
            cvBtn.setAttribute('download', 'Luis_Roca_CV_ES.pdf');
        } else {
            cvBtn.href = '/docs/cv_luis_roca_en.pdf';
            cvBtn.setAttribute('download', 'Luis_Roca_CV_EN.pdf');
        }
    },
};
