
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


from models import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///jobs.db'   #changed from test.db to jobs.db
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)

db.init_app(app)

if __name__ == '__main__':
    app.run(port=5504)