from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)
app.config.from_object("config.Config")
db = SQLAlchemy(app)


class Entry(db.Model):
    __tablename__ = 'entries'
    id = db.Column(db.Integer, primary_key=True)
    start = db.Column(db.Date, nullable=False)
    end = db.Column(db.Date, nullable=False)
    difference = db.Column(db.Integer)

    def __init__(self, start, end, difference):
        self.start = start
        self.end = end
        self.difference = difference

    def __repr__(self):
        return "<Entry(id='{}', start='{}', end={}, difference={})>"\
            .format(self.id, self.start, self.end, self.difference)

    def serialize(self):
        return {
            'id': self.id,
            'start': self.start,
            'end': self.end,
            'difference': self.difference
        }

    @staticmethod
    def serialize_list(list):
        return [item.serialize() for item in list]

# Get all the data


@ app.route("/")
def index():
    entries = Entry.query.all()
    return jsonify(Entry.serialize_list(entries))


@ app.route('/', methods=['POST'])
def create_date():
    # TODO: Validate input
    start = request.json['start']
    end = request.json['end']
    difference = request.json['difference']
    try:
        entry = Entry(
            start=start,
            end=end,
            difference=difference
        )
        db.session.add(entry)
        db.session.commit()
        return "entry added. entry id={}".format(entry.id)
    except Exception as e:
        return(str(e))


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
