from models.atividade import Atividade
from models.disciplina import Disciplina

@dataclass
class Aluno:

    matricula: str
    nome: str
    disciplinas: list[Disciplina]
    atividades: list[Atividade]