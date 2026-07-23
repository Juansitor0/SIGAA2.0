import pickle
from pathlib import Path
import requests 
from parser import extrair_notas, atualizar_view_state


class SigaaClient:

    LOGIN_URL = "https://sigaa.ufersa.edu.br/sigaa/logar.do?dispatch=logOn"

    def __init__(self):

        self.session = requests.Session()

        self.session.headers.update({
            "User-Agent": (
                "Mozilla/5.0 (X11; Linux x86_64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/146.0.0.0 Safari/537.36"
            ),
            "Origin": "https://sigaa.ufersa.edu.br",
            "Referer": "https://sigaa.ufersa.edu.br/sigaa/logar.do?dispatch=logOff"
        })

        self.cookie_file = Path("cookies.pkl")
        self.view_state = None

    def login(self, usuario, senha):

        payload = {
            "width": "2560",
            "height": "1080",
            "urlRedirect": "",
            "subsistemaRedirect": "",
            "acao": "",
            "acessibilidade": "",
            "user.login": usuario,
            "user.senha": senha
        }

        r = self.session.post(
            self.LOGIN_URL,
            data=payload,
            allow_redirects=True
        )

        print("Status:", r.status_code)

        self.view_state = atualizar_view_state(r.text)
        print("ViewState:", self.view_state)

        self.salvar_cookies()

        return r

    def salvar_cookies(self):

        with open(self.cookie_file, "wb") as f:
            pickle.dump(self.session.cookies, f)

        print("Cookies salvos.")

    def carregar_cookies(self):

        if self.cookie_file.exists():

            with open(self.cookie_file, "rb") as f:
                self.session.cookies.update(
                    pickle.load(f)
                )

            print("Cookies carregados.")

    def mostrar_cookies(self):

        print("\nCookies atuais\n")

        for c in self.session.cookies:
            print(f"{c.name} = {c.value}")

    def get(self, url):

        return self.session.get(url)

    def post(self, url, data):

        return self.session.post(url, data=data)
    

    def obter_notas(self):

        url = "https://sigaa.ufersa.edu.br/sigaa/portais/discente/discente.jsf"


        payload = {
            "menu:form_menu_discente": "menu:form_menu_discente",
            "id": "437946",
            "jscook_action": "menu_form_menu_discente_discente_menu:A]#{ relatorioNotasAluno.gerarRelatorio }",
            "javax.faces.ViewState": self.view_state
        }

        resposta = self.session.post(url, data=payload)

        novo_view_state = atualizar_view_state(resposta.text)
        if novo_view_state:
            self.view_state = novo_view_state

        return extrair_notas(resposta.text)

    @property
    def jsessionid(self):

        return self.session.cookies.get("JSESSIONID")
    