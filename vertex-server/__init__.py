
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv, find_dotenv
import os
import pprint

load_dotenv(find_dotenv())
password = os.environ.get("MONGODB_PWD")


app.config["SECRET_KEY"] = "ea6ece69788b1c08c3edabe4f6b561d54437379e"

# app.config["MONGO_URI"] = f"mongodb+srv://styhoareau:{password}@vertex.gplislk.mongodb.net/?retryWrites=true&w=majority"
uri = f"mongodb+srv://styhoareau:{password}@vertex.gplislk.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri, server_api=ServerApi('1'))


# # Create a new client and connect to the server
# client = MongoClient(uri, server_api=ServerApi('1'))
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
dbs = client.list_database_names()
print(dbs)


def insert_test_document():
    test_db = client.test
    collection = test_db.test1
    test_document = {
        "name": "Tim",
        "type": "Test"
    }
    inserted_id = collection.insert_one(test_document).inserted_id
    print(inserted_id)


# insert_test_document()

production = client.production
person_collection = production.person_collection


def create_documents():
    first_names = ['Tim', 'Gaetan', 'Robin', 'Michelle', 'Thomas', 'Allen']
    last_names = ['Leotard', 'Boucheron',
                  'Hanelle', 'Smith', 'Robin', 'Capdeville']
    ages = [21, 32, 22, 41, 42, 88]
    docs = []
    for first_name, last_name, age in zip(first_names, last_names, ages):
        doc = {
            "first_name": first_name,
            "last_name": last_name,
            "age": age,
        }
        docs.append(doc)
        # inserted_id = person_collection.insert_one(
        #     collection_to_insert).inserted_id
        # print(inserted_id)
    print(docs)
    person_collection.insert_many(docs)


printer = pprint.PrettyPrinter()


def find_people():
    people = person_collection.find()

    for person in people:
        printer.pprint(person.age)


# create_documents()
# find_people()


# def importRoutes():
#     from application import routes


# importRoutes()
