import os

from src.app import create_app
from src.constants import FLASK_ENV, FLASK_HOST

if __name__ == '__main__':
    env_name = os.getenv(FLASK_ENV)
    host = os.getenv(FLASK_HOST)
    app = create_app(env_name)
    # run app
    app.run(host=host)
