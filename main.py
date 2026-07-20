from sigaa_client import SigaaClient

cliente = SigaaClient()

cliente.login(
    "user",
    "password"
)

print()

print("JSESSIONID:")
print(cliente.jsessionid)

html = cliente.get(
    "https://sigaa.ufersa.edu.br/sigaa/portais/discente/discente.jsf"
)

print(html.text)

cliente.mostrar_cookies()