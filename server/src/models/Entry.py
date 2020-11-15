from marshmallow import Schema, fields

from . import db


class Entry(db.Model):
    __tablename__ = 'entries'
    id = db.Column(db.Integer, primary_key=True)
    start = db.Column(db.Date, nullable=False)
    end = db.Column(db.Date, nullable=False)
    difference = db.Column(db.Integer)

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self, data):
        for key, item in data.items():
            setattr(self, key, item)
        db.session.commit()

    def delete(id):
        entry = Entry.query.get(id)
        db.session.delete(entry)
        db.session.commit()

    def serialize(self):
        return {
            'id': self.id,
            'start': self.start,
            'end': self.end,
            'difference': self.difference
        }

    @staticmethod
    def getAll():
        return Entry.query.all()

    @staticmethod
    def deleteAll():
        db.session.query(Entry).delete()
        db.session.commit()

    @staticmethod
    def serialize_list(list):
        return [item.serialize() for item in list]


class EntrySchema(Schema):
    id = fields.Int(dump_only=True)
    start = fields.DateTime(required=True)
    end = fields.DateTime(required=True)
    difference = fields.Int(required=True)
