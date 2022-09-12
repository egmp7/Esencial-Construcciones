#   SET UP 
from flask import Flask, render_template
app = Flask(__name__)


#   NAV MODULE
#   Install pip3 install Flask-Navigation
from flask_navigation import Navigation
nav = Navigation(app)

"""#
# @nav.Bar 
#   arg1: string name
#   arg2: array items
#   info: Initializing name of navigation 
#                class with items definition.
# @nav.Item
#   arg1: string label
#   arg2: string url
#   arg3: dicctionary arguments
#   info: Assigns items or lists for each bar. 
#         Label name, its linked page URL and 
#         extra args like parameter and value 
#         of dictionary.
 """
nav.Bar('top', [
    nav.Item('Home', 'home'),
    nav.Item('Proyectos', 'proyectos')
])

#   GET website DATA with JSON
import json
f = open('static/data.json')
data = json.load(f)

#   ROUTES
@app.route('/home')
def home():
    return render_template(
        'home.html',
        data = data)

@app.route('/proyectos')
def proyectos():
    return render_template(
        'proyectos.html')

#   Run 
if __name__ =='__main__':
    app.run()(debug=True)