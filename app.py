#   SET UP 
from flask import Flask, render_template, request
# get file names with
import os

app = Flask(__name__)

# GET website DATA with JSON
import json
f = open('static/data.json')
data = json.load(f)

# Get list of strings from projects folder
project_imgs = os.listdir(os.path.join(app.static_folder, "img/projects"))

images={}
    
for project in project_imgs:

    # Use try to catch the error when handling routes that doesnt contain a list
    # Such as DS_STORE
    try:

        #Get a list from each project
        l = os.listdir(os.path.join(app.static_folder, "img/projects/" + project))

        # Add list to images object
        images[project] = l
        
    except:
        print("An exception occurred")

#   ROUTES

@app.route('/home', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        return 'hello world'
    else:
        return render_template(
            'home.html',
            data = data,
            images = images)

#   Run 
if __name__ =='__main__':
    app.run()(debug=True)