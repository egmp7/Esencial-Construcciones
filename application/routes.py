#   SET UP 
from flask import render_template, request, redirect, url_for
from application import app
from application import load
from application import db

language = "spanish"

#   ROUTES
@app.route('/home', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        db.db.collection.insert_one(
            {"name": request.form['name'],
            "email": request.form['email'],
            "description":request.form['description']})
        return redirect(url_for('success'))
    else:
        return render_template(
            'home1.html',
            data = load.getJson()[language],
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

@app.route('/success', methods=[ 'GET'])
def success():
    return render_template(
        'success.html',
        data = load.getJson()[language],
        images = load.getImages(),
        fixedFooter = True)

@app.errorhandler(404)
def page_not_found (e):
    return "Error 404: Hello Erick don't forget to add /home..."