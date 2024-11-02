from flask import Flask


def create_app():
    """Create and configure an instance of the Flask application."""
    app = Flask(__name__)
    from server.config import get_config
    from server.routes import auth, wiki

    app.config.from_object(get_config())

    app.register_blueprint(auth.router)
    app.register_blueprint(wiki.router)
    return app
