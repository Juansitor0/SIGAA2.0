import pickle
from pathlib import Path
import requests



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

    @property
    def jsessionid(self):

        return self.session.cookies.get("JSESSIONID")