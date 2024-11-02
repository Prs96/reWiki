import wikipedia
from flask import jsonify, request

from server.utils.encryption import encrypt_text


def get_wiki():
    """Get wiki page."""
    query = request.json["query"]
    if not request.key_verify:
        try:
            page = wikipedia.WikipediaPage(query)
            content = page.content
            key = request.headers.get("X-USER-KEY")
            encrypted_lines = []
            for line in content.split("."):
                encrypted_line = encrypt_text(line, key)
                encrypted_lines.append(encrypted_line)
            content = ".".join(encrypted_lines)

            return jsonify({"content": content})
        except wikipedia.exceptions.PageError:
            return jsonify({"message": "Page not found"})
    else:
        try:
            page = wikipedia.WikipediaPage(query)
            content = page.content
            return jsonify({"content": content})
        except wikipedia.exceptions.PageError:
            return jsonify({"message": "Page not found"})
