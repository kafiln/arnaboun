from datetime import date

from flask.cli import FlaskGroup

from app import Entry, app, db

cli = FlaskGroup(app)


@cli.command("init")
def create_db():
    db.drop_all()
    db.create_all()
    db.session.commit()


@cli.command("seed")
def seed_db():
    db.session.add(
        Entry(start=date.today(), end=date.today(), difference=0))
    db.session.add(
        Entry(start="05-11-2020", end="10-11-2020", difference=5))
    db.session.commit()


if __name__ == "__main__":
    cli()
