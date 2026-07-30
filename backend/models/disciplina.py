from dataclasses import dataclass, field
from typing import List


@dataclass
class Disciplina:

    codigo: str
    nome: str

    nota1: float | None = None
    nota2: float | None = None
    nota3: float | None = None
    reposicao: float | None = None

    media: float | None = None
    faltas: int = 0
    situacao: str = ""
    atividades: List["Atividade"] = field(default_factory=list)
    materiais: list = field(default_factory=list)