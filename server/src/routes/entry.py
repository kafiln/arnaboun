from flask import Blueprint, jsonify, request

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
        return jsonify(entry.serialize())
    except Exception as e:
        return(str(e))
