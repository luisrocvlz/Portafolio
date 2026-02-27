/**
 * @file Cursor.js
 * @description Custom glassmorphism cursor that follows mouse movement.
 */

export function Cursor() {
    return `<div id="custom-cursor"></div>`;
}

export function initCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX - 10}px`;
        cursor.style.top = `${e.clientY - 10}px`;
    });
}
