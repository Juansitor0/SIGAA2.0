import { dadosAlunosPorMateria } from '../mockData.js';

export function renderizarCheckboxesMembros(materia) {
    const container = document.getElementById('membros-checkbox-container');
    if (!container) return;
    container.innerHTML = "";
    
    const alunos = dadosAlunosPorMateria[materia] || ["Juan Carlos"];
    
    alunos.forEach(aluno => {
        container.innerHTML += `
            <div class="checkbox-item">
                <input type="checkbox" name="membros-grupo" value="${aluno}" id="chk-${aluno}">
                <label for="chk-${aluno}">${aluno}</label>
            </div>
        `;
    });
}

export function openWorkWorkspace(workName, members) {
    document.getElementById('group-list-view').style.display = 'none';
    document.getElementById('group-workspace-view').style.display = 'flex';
    document.getElementById('workspace-title').innerHTML = `<i class="fa-solid fa-people-group" style="color: var(--brand-color);"></i> Workspace: ${workName}`;
    
    const select = document.getElementById('workspace-owner-select');
    if (select) {
        select.innerHTML = '<option value="">Delegar para...</option>';
        members.forEach(m => {
            select.innerHTML += `<option value="${m}">${m}</option>`;
        });
    }
}

export function closeWorkWorkspace() {
    const ws = document.getElementById('group-workspace-view');
    const gl = document.getElementById('group-list-view');
    if (ws && gl) {
        ws.style.display = 'none';
        gl.style.display = 'block';
    }
}

export function createNewWork() {
    const nameInput = document.getElementById('new-work-name');
    const workName = nameInput.value.trim();
    
    if (!workName) {
        alert('Por favor, digite um nome para o trabalho.');
        return;
    }

    const checkboxes = document.querySelectorAll('input[name="membros-grupo"]:checked');
    const membrosSelecionados = [];
    checkboxes.forEach(cb => membrosSelecionados.push(cb.value));

    if (membrosSelecionados.length === 0) {
        alert('Selecione pelo menos um membro para criar a equipe.');
        return;
    }

    const gridContainer = document.getElementById('trabalhos-grid-container');
    
    let badgesHTML = "";
    membrosSelecionados.forEach(m => {
        badgesHTML += `<span class="badge">${m}</span> `;
    });

    const membrosArrayString = JSON.stringify(membrosSelecionados).replace(/"/g, "'");
    
    const cardHTML = `
        <div class="trabalho-equipe-card" onclick="openWorkWorkspace('${workName}', ${membrosArrayString})">
            <h4><i class="fa-solid fa-folder-open" style="color: var(--brand-color); margin-right: 8px;"></i> ${workName}</h4>
            <p style="font-size: 0.8rem; color: var(--text-muted);">Status: Ativo (Manual)</p>
            <div class="membros-badges">
                ${badgesHTML}
            </div>
        </div>
    `;
    
    gridContainer.insertAdjacentHTML('afterbegin', cardHTML);
    nameInput.value = "";
    checkboxes.forEach(cb => cb.checked = false);

    alert(`Trabalho "${workName}" criado com sucesso! Clique no card gerado logo abaixo para gerenciar a equipe.`);
}