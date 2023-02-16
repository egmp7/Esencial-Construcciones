#   SET UP 
from flask import render_template, request, redirect, url_for
from application import app
from application import load

language = "spanish"
data = load.getJson()

#   ROUTES
@app.route('/home', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        return 'hello database'
    else:
        return render_template(
            'home.html',
            data = data[language],
            images = load.getImages())

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

