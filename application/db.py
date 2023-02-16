from flask import Flask
from flask_pymongo import pymongo
from application import app

CONNECTION_STRING = "mongodb+srv://egmp7:YTe2GHo4yPfJqWNY@cluster0.rawx6lg.mongodb.net/?retryWrites=true&w=majority"
client = pymongo.MongoClient(CONNECTION_STRING)

#database name
db = client.get_database('esencial_construcciones')
user_collection = pymongo.collection.Collection(db, 'queries')