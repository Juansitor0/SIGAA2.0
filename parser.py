from bs4 import BeautifulSoup


def extrair_notas(html):

    soup = BeautifulSoup(html, "html.parser")

    disciplinas = []

    for tr in soup.find_all("tr", class_="linhaPar linha") + \
              soup.find_all("tr", class_="linhaImpar linha"):

        td = tr.find_all("td")

        if len(td) < 9:
            continue

        disciplina = {
            "codigo": td[0].get_text(strip=True),
            "nome": td[1].get_text(" ", strip=True),
            "nota1": td[2].get_text(strip=True),
            "nota2": td[3].get_text(strip=True),
            "nota3": td[4].get_text(strip=True),
            "reposicao": td[5].get_text(strip=True),
            "media": td[6].get_text(strip=True),
            "faltas": td[7].get_text(strip=True),
            "situacao": td[8].get_text(strip=True),
        }

        disciplinas.append(disciplina)

    return disciplinas

def atualizar_view_state(html):
    soup = BeautifulSoup(html, "html.parser")
    campo = soup.find("input", {"name": "javax.faces.ViewState"})

    if campo:
        return campo.get("value")
    
    return None