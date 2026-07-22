import { cronogramaGeralPrazos } from '../mockData.js';

export function gerarAlarmesProximidade() {
    const container = document.getElementById('mural-alarmes-container');
    if (!container) return;
    container.innerHTML = "";

    const hoje = new Date();
    hoje.setHours(0,0,0,0);

    let temAlarme = false;

    cronogramaGeralPrazos.forEach(prazo => {
        const dataPrazo = new Date(prazo.data + "T00:00:00");
        const diferencaTempo = dataPrazo.getTime() - hoje.getTime();
        const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));

        let tagAlerta = "";
        let estiloClasse = "";

        if (diferencaDias === 0) {
            tagAlerta = "HOJE É O DIA! ⚠️";
            estiloClasse = "urgent";
        } else if (diferencaDias === 1) {
            tagAlerta = "AMANHÃ! 🚨";
            estiloClasse = "urgent";
        } else if (diferencaDias > 1 && diferencaDias <= 3) {
            tagAlerta = `Em ${diferencaDias} dias ⏳`;
            estiloClasse = "";
        } else {
            return;
        }

        temAlarme = true;
        const dataFormatada = dataPrazo.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });

        container.innerHTML += `
            <div class="feed-item ${estiloClasse}">
                <span class="feed-date" style="display:flex; justify-content:space-between;">
                    <span>${prazo.materia.toUpperCase()} - ${prazo.tipo.toUpperCase()}</span>
                    <strong style="color: var(--alert-color);">${tagAlerta}</strong>
                </span>
                <p><strong>${prazo.titulo}</strong></p>
                <small style="color: var(--text-muted); font-size: 0.75rem;">Prazo final: ${dataFormatada}</small>
            </div>
        `;
    });

    if (!temAlarme) {
        container.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem; padding: 15px; text-align: center;">Tudo limpo por aqui! Nenhuma atividade urgente para os próximos 3 dias. 🙌</p>`;
    }
}