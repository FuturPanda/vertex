from flask import Flask, request, jsonify, session
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config["SECRET_KEY"] = 'Hello'
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/")
def index():
    return "Hello World"


@app.route("/login", methods=["POST"])
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def login():
    if request.method == "POST":
        user = request.json
        session["user"] = user
        print(user)
        print(session["user"])
    return ({"response": "Hello World"})


@app.route("/user")
def user():
    # print(session["user"])
    if "user" in session:
        user = session["user"]
        print(user)
        return (jsonify(user))
    else:
        return ({"user": "none"})


if __name__ == "__main__":
    app.run(debug=True)
