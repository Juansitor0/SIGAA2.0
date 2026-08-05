from flask import Blueprint, jsonify
from backend.services.sigaa_client import SigaaClient

disciplinas_bp = Blueprint("disciplinas", __name__)

@disciplinas_bp.route("/disciplinas")
def listar():

    cliente = SigaaClient()
    dados = cliente.buscar_disciplinas()
    return jsonify(dados)