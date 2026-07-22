import { gradeMateriaisPorMateria } from '../mockData.js';
import { materiaAtual } from './navigation.js';

export function renderizarGradeCurricularMateria(materia) {
    const container = document.getElementById('grade-conteudo-container');
    if (!container) return;
    container.innerHTML = "";
    
    const dados = gradeMateriaisPorMateria[materia] || { livros: [], slides: [], artigos: [] };
    let htmlGerado = "";

    // Livros
    htmlGerado += `
        <div class="grade-secao">
            <h4><i class="fa-solid fa-book"></i> Livros e Bibliografia Sugerida</h4>
            <div class="grade-grid-recursos">
    `;
    if (dados.livros.length === 0) {
        htmlGerado += `<p style="color:var(--text-muted); font-size:0.85rem; padding: 10px;">Nenhum livro registrado para esta matéria.</p>`;
    } else {
        dados.livros.forEach(l => {
            htmlGerado += `
                <a href="#" class="recurso-item-card" onclick="event.preventDefault()">
                    <i class="fa-solid fa-book"></i>
                    <div class="recurso-info"><h5>${l.nome}</h5><span>${l.obs}</span></div>
                </a>`;
        });
    }
    htmlGerado += `</div></div>`;

    // Slides
    htmlGerado += `
        <div class="grade-secao">
            <h4><i class="fa-solid fa-file-powerpoint"></i> Slides e Apresentações de Aula</h4>
            <div class="grade-grid-recursos">
    `;
    if (dados.slides.length === 0) {
        htmlGerado += `<p style="color:var(--text-muted); font-size:0.85rem; padding: 10px;">Nenhum slide anexado.</p>`;
    } else {
        dados.slides.forEach(s => {
            htmlGerado += `
                <a href="#" class="recurso-item-card" onclick="event.preventDefault()">
                    <i class="fa-solid fa-file-powerpoint"></i>
                    <div class="recurso-info"><h5>${s.nome}</h5><span>${s.obs}</span></div>
                </a>`;
        });
    }
    htmlGerado += `</div></div>`;

    // Artigos
    htmlGerado += `
        <div class="grade-secao">
            <h4><i class="fa-solid fa-file-lines"></i> Artigos, Textos e Links Úteis</h4>
            <div class="grade-grid-recursos">
    `;
    if (dados.artigos.length === 0) {
        htmlGerado += `<p style="color:var(--text-muted); font-size:0.85rem; padding: 10px;">Nenhum texto complementar anexado.</p>`;
    } else {
        dados.artigos.forEach(a => {
            htmlGerado += `
                <a href="#" class="recurso-item-card" onclick="event.preventDefault()">
                    <i class="fa-solid ${a.icone || 'fa-file-lines'}"></i>
                    <div class="recurso-info"><h5>${a.nome}</h5><span>${a.obs}</span></div>
                </a>`;
        });
    }
    htmlGerado += `</div></div>`;

    container.innerHTML = htmlGerado;
}

export function addRecursoManual() {
    const titleInput = document.getElementById('new-recurso-title');
    const typeSelect = document.getElementById('new-recurso-type');
    
    const titulo = titleInput.value.trim();
    const tipoIcone = typeSelect.value;
    
    if (!titulo) {
        alert('Por favor, digite o nome/título do material acadômico.');
        return;
    }

    if (!gradeMateriaisPorMateria[materiaAtual]) {
        gradeMateriaisPorMateria[materiaAtual] = { livros: [], slides: [], artigos: [] };
    }

    const novoItem = { nome: titulo, obs: "Adicionado manualmente pela turma", icone: tipoIcone };

    if (tipoIcone === 'fa-book') {
        gradeMateriaisPorMateria[materiaAtual].livros.unshift(novoItem);
    } else if (tipoIcone === 'fa-file-powerpoint') {
        gradeMateriaisPorMateria[materiaAtual].slides.unshift(novoItem);
    } else {
        gradeMateriaisPorMateria[materiaAtual].artigos.unshift(novoItem);
    }

    titleInput.value = "";
    renderizarGradeCurricularMateria(materiaAtual);
    alert(`Sucesso! O recurso "${titulo}" foi adicionado ao baú da matéria.`);
}