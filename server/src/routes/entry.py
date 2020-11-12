from flask import request, jsonify, Blueprint
from ..models.entry import Entry

entry_api = Blueprint('entry', __name__)


@entry_api.route('/')
def index():
    entries = Entry.query.all()
    return jsonify(Entry.serialize_list(entries))


@entry_api.route('/', methods=['POST'])
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
        entry.save()
        return "entry added. entry id={}".format(entry.id)
    except Exception as e:
        return(str(e))
