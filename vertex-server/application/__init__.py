from flask import Flask

app = Flask(__name__)

app.config["SECRET_KEY"] = "ea6ece69788b1c08c3edabe4f6b561d54437379e"


def importRoutes():
    from application import routes


importRoutes()
