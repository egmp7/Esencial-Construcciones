from application import app
import os
import json
import pprint

""" Get jason file from static folder """
def getJson():
    f = open(os.path.join(app.static_folder,"data.json"))
    return json.load(f)

"""Get list of strings from projects folder""" 
def getImages(): 
    #pprint.pprint(searchItemsInPath(os.path.join(app.static_folder, "img/")))
    return searchItemsInPath(os.path.join(app.static_folder, "img/"))


"""Searches all files and directories in the path
@returns a dictionary of the files and directories in the path"""
def searchItemsInPath(path):
    folderList = os.listdir(path)
    package ={}

    for item in folderList:
        
        checkedItem = checkItem(item, path)
        if checkedItem is not None:
            package[item] = checkedItem

    return package

""" check if item is a file or a directory, uses recursion if it's a directory"""
def checkItem(item , directory):

    if (item.startswith('.')): # if item is secret .
        return None

    if(os.path.isfile(directory + item)): # if file
        return (directory + item).replace(app.static_folder,"")

    if(os.path.isdir(directory + item)): # if directory
        return searchItemsInPath(directory + item+"/")
