from flask import Flask

# from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
# db = SQLAlchemy(app)


# Get all the data
@app.route("/")
def index():
    return "Welcome to flask"


@app.route('/', methods=['POST'])
def create_date():
    return 'ok'


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
