import { initTheme, toggleTheme } from './theme.js';
import { openMateria, showHome, switchTab } from './modules/navigation.js';
import { addRecursoManual } from './modules/gradeCurricular.js';
import { createNewWork, openWorkWorkspace, closeWorkWorkspace } from './modules/trabalhoEquipe.js';
import { gerarAlarmesProximidade } from './modules/alarmes.js';

// Exporta para o escopo global do HTML carregar nos atributos onclick
window.showHome = showHome;
window.openMateria = openMateria;
window.switchTab = switchTab;
window.toggleTheme = toggleTheme;
window.addRecursoManual = addRecursoManual;
window.createNewWork = createNewWork;
window.openWorkWorkspace = openWorkWorkspace;
window.closeWorkWorkspace = closeWorkWorkspace;

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    gerarAlarmesProximidade();
});