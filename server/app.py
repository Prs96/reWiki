"""App."""

from flask import Flask

from server.config import get_config


def get_app():
    """Get app."""
    app = Flask(__name__)
    app.config.from_object(get_config())
    return app
