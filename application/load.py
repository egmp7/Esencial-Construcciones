from application import app
import os
import json

# GET website DATA with JSON
def getJson():
    f = open('application/static/data.json')
    return json.load(f)

# Get list of strings from projects folder
def getImages():
    project_imgs = os.listdir(os.path.join(app.static_folder, "img/projects"))

    images={}
        
    for project in project_imgs:

        # Use try to catch the error when handling routes that doesnt contain a list
        # Such as DS_STORE
        try:

            #Get a list from each project
            l = os.listdir(os.path.join(app.static_folder, "img/projects/" + project))

            # Add list to images dictionary
            images[project] = l
            
        except:
            print("app.py::os.listdir An exception occurred")
    
    return images

