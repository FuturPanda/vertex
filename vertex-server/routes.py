from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/")
def index():
    return "Hello World"


@app.route("/login", methods=["POST", "GET"])
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def login():
    if request.method == "POST":
        data = request.json
        print(data)
    return ({"response": "Hello World"})


@app.route("/<usr>")
def user(usr):
    return f"<h1>{usr}</h1>"


if __name__ == "__main__":
    app.run(debug=True)
