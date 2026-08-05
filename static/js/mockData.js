export const dadosAlunosPorMateria = {
    "Redes de Computadores": ["Juan Carlos", "Everton", "Otávio", "Mateus Silva", "Aline Costa", "Rodrigo Santos"],
    "Física Experimental": ["Juan Carlos", "Everton", "Bruno Lima", "Camila Souza", "Daniel Oliveira"],
    "Cálculo": ["Juan Carlos", "Otávio", "Fernanda Rocha", "Gabriel Almeida", "Aline Costa"],
    "Estrutura de Dados": ["Juan Carlos", "Everton", "Otávio", "Larissa Melo", "Daniel Oliveira", "Lucas Pires"]
};

export const gradeMateriaisPorMateria = {
    "Redes de Computadores": {
        livros: [
            { nome: "Redes de Computadores e a Internet - Kurose (6ª Ed)", obs: "Livro Texto Principal" },
            { nome: "Redes de Computadores - Tanenbaum (5ª Ed)", obs: "Leitura Complementar" }
        ],
        slides: [
            { nome: "Apresentação Unidade 1 - Introdução às Redes", obs: "Disponibilizado em Aula" },
            { nome: "Apresentação Unidade 2 - Camada de Aplicação e HTTP", obs: "Atualizado" }
        ],
        artigos: [
            { nome: "RFC 793 - Transmission Control Protocol (TCP Spec)", obs: "Leitura para o Relatório" }
        ]
    },
    "Física Experimental": {
        livros: [{ nome: "Física Teórica e Experimental - Halliday & Resnick", obs: "Biblioteca Central" }],
        slides: [
            { nome: "Roteiro do Experimento: Tubo de Venturi", obs: "Trazer Impresso ou no Celular" },
            { nome: "Guia Geral de Introdução a Erros de Medidas", obs: "Obrigatório" }
        ],
        artigos: []
    },
    "Cálculo": {
        livros: [{ nome: "Cálculo Volume 1 - James Stewart (7ª Ed)", obs: "Livro Base" }],
        slides: [{ nome: "Lista de Exercícios 1 - Limites Laterais e Continuidade", obs: "Entregar resolvida" }],
        artigos: []
    },
    "Estrutura de Dados": {
        livros: [{ nome: "Estruturas de Dados e Algoritmos em Java - Goodrich", obs: "Recomendado" }],
        slides: [
            { nome: "Slide 01 - Revisão de Ponteiros e Alocação em C", obs: "Aula prática" },
            { nome: "Slide 02 - Listas Encadeadas e Pilhas", obs: "Conteúdo Unidade 1" }
        ],
        artigos: [{ nome: "Análise Assintótica de Algoritmos (Notação Big-O)", obs: "Texto de Apoio" }]
    }
};

export const cronogramaGeralPrazos = [
    { materia: "Redes de Computadores", tipo: "Prova", titulo: "Avaliação da Unidade I (OSPF e Subredes)", data: "2026-06-17" },
    { materia: "Física Experimental", tipo: "Entrega", titulo: "Relatório Técnico: Tubo de Venturi", data: "2026-06-16" },
    { materia: "Estrutura de Dados", tipo: "Trabalho", titulo: "Implementação de Pilhas e Filas em C", data: "2026-06-19" },
    { materia: "Cálculo", tipo: "Prova", titulo: "Mini-teste de Limites", data: "2026-06-25" }
];