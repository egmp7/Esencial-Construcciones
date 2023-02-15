#   SET UP 
from flask import Flask, render_template, request, redirect, url_for
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

        # Add list to images dictionary
        images[project] = l
        
    except:
        print("app.py::os.listdir An exception occurred")

#   ROUTES

language = 'spanish'

@app.route('/home', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        return 'hello database'
    else:
        return render_template(
            'home.html',
            data = data[language],
            images = images)

@app.route('/changeLanguage', methods=[ 'POST'])
def changeLanguage():
    global language

    if request.method == 'POST':
        if(language == 'spanish'):
            language = 'english'
        else:
            language = 'spanish'
        return redirect(url_for('home'))

@app.errorhandler(404)
def page_not_found (e):
    return "Error 404: Hello Erick don't forget to add /home..."

#   Run 
if __name__ =='__main__':
    app.run()(debug=True)