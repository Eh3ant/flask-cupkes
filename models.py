from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)
    app.app_context().push()



"""Models for Cupcake app."""

class Cupcake(db.Model):

    __tablename__ = 'cupcakes'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    flavor = db.Column(db.String,nullable=False)
    size = db.Column(db.String,nullable=False)
    rating = db.Column(db.Float,nullable=False)
    image = db.Column(db.String,nullable=False,default="https://tinyurl.com/demo-cupcake")

    def serialize(self):
        return {
            'id':self.id,
            'flavor':self.flavor,
            'size':self.size,
            'rating':self.rating,
            'image':self.image,
    }

    def __repr__(self):
        c= self
        return f'<Cupcake {c.id} flavor={c.flavor} size={c.size} rating={c.rating} image={c.image}>'