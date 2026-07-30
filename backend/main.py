from backend.sigaa_client import SigaaClient

cliente = SigaaClient()
user = "everton.lima"
senha = "Noismane34-5"

cliente.login(user, senha)
notas = cliente.obter_notas()

html = cliente.get(
    "https://sigaa.ufersa.edu.br/sigaa/portais/discente/discente.jsf"
)

for disciplinas in notas:
    print(disciplinas)

print()
cliente.mostrar_cookies()