from flask import Flask

from .config import app_config
from .constants import API_PREFIX
from .models import db
from .models.Entry import Entry
from .routes.entry import entry_api


def create_app(env_name):
    """
    Create app
    """

    # app initiliazation
    app = Flask(__name__)

    app.config.from_object(app_config[env_name])
    db.init_app(app)
    app.register_blueprint(entry_api, url_prefix=API_PREFIX)

    return app
