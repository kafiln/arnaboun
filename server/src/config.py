import os

database = os.getenv('POSTGRES_DB')
user = os.getenv('POSTGRES_USER')
password = os.getenv('POSTGRES_PASSWORD')
port = os.getenv('POSTGRES_PORT')
env = os.getenv('FLASK_ENV')
is_dev = env == 'development'
host = 'database' if is_dev else os.getenv('POSTGRES_HOST')

connection_string = f'postgresql+psycopg2://{user}:{password}@{host}:{port}/{database}'


class Development(object):
    """
    Development environment configuration
    """
    DEBUG = True
    TESTING = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = connection_string


class Production(object):
    """
    Production environment configurations
    """
    DEBUG = False
    TESTING = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = connection_string


app_config = {
    'development': Development,
    'production': Production,
}
