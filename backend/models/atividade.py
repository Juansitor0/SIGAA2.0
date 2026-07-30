from dataclasses import dataclass
from datetime import datetime


@dataclass
class Atividade:

    titulo: str
    descricao: str
    prazo: datetime
    entregue: bool = False
    nota: float | None = None
    link: str = ""