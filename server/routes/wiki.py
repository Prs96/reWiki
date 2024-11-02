from flask import Blueprint

from server.controllers.wiki_controller import get_wiki
from server.middlewares.key_verify import key_verify

router = Blueprint("wiki", __name__, url_prefix="/wiki")

key_valid = get_wiki
key_valid = key_verify(key_valid)
router.add_url_rule("/", view_func=key_valid, methods=["POST"])
