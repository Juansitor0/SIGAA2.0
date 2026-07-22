export function initTheme() {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        atualizarIconeTema(true);
    }
}

export function toggleTheme() {
    const isLightNow = document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', isLightNow ? 'light' : 'dark');
    atualizarIconeTema(isLightNow);
}

function atualizarIconeTema(isLight) {
    const btn = document.getElementById('theme-button');
    if (btn) {
        if (isLight) {
            btn.innerHTML = `<i class="fa-solid fa-sun"></i> <span>Tema Claro</span>`;
        } else {
            btn.innerHTML = `<i class="fa-solid fa-moon"></i> <span>Tema Escuro</span>`;
        }
    }
}