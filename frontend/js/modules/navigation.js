import { renderizarCheckboxesMembros, closeWorkWorkspace } from './trabalhoEquipe.js';
import { renderizarGradeCurricularMateria } from './gradeCurricular.js';
import { dadosAlunosPorMateria } from '../mockData.js';

export let materiaAtual = "";

export function openMateria(name, iconClass) {
    materiaAtual = name;
    document.getElementById('page-home').style.display = 'none';
    document.getElementById('page-materia').style.display = 'block';
    document.getElementById('materia-title').innerHTML = `<i class="fa-solid ${iconClass}" style="color: var(--brand-color);"></i> ${name}`;
    
    renderizarCheckboxesMembros(materiaAtual);
    renderizarListaGeralDeAlunos(materiaAtual);
    renderizarGradeCurricularMateria(materiaAtual);

    switchTab('tab-noticias');
    closeWorkWorkspace(); 
    window.scrollTo(0, 0);
}

export function showHome() {
    document.getElementById('page-materia').style.display = 'none';
    document.getElementById('page-home').style.display = 'block';
}

export function switchTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    
    const targetBtn = document.getElementById(`btn-${tabId}`);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }
}

function renderizarListaGeralDeAlunos(materia) {
    const container = document.getElementById('alunos-list-tab');
    if (!container) return;
    container.innerHTML = "";
    
    const alunos = dadosAlunosPorMateria[materia] || [];
    alunos.forEach(aluno => {
        container.innerHTML += `
            <div class="aluno-item">
                <img src="https://api.dicebear.com/7.x/initials/svg?seed=${aluno}" style="width:24px;border-radius:50%;" alt="${aluno}">
                <span>${aluno}</span>
            </div>
        `;
    });
}