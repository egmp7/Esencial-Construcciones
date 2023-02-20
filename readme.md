# Esencial Construcciones

A landing website with a mongodb atlas database.

# Run Server

```
# run server
flask --app run run

# run server in debug mode
flask --app run --debug run
```

## Compile Sass
```
sass --watch style.scss style.css
```

# What I learned in this project:

- Set flask and python enviroment, Templates

- [Static Files](https://flask.palletsprojects.com/en/1.1.x/tutorial/static/)  (Url for images, css, favicon)
- [Navigation Module](https://www.geeksforgeeks.org/navigation-bars-in-flask/). Check base.html & app.py files
- [Read a Json file](https://www.geeksforgeeks.org/read-json-file-using-python/). Check app.py file
- [Nesting extends templates](https://jinja.palletsprojects.com/en/3.1.x/templates/). Not applied
- [String Concatenation](https://stackoverflow.com/questions/39842718/im-trying-to-create-an-url-for-in-an-html-img-src-tag-where-the-filename). Check Home template / services section
- For loops with range. Check Home template / projects section
- [Convert int to string inside template](https://stackoverflow.com/questions/19161093/convert-integer-to-string-jinja). Check Home template / projects section
- [Update a variable with jinja](https://stackoverflow.com/questions/9486393/jinja2-change-the-value-of-a-variable-inside-a-loop). Check Home template / home caraousel & about carousel
- [Forms, HTTP Medthods](https://www.digitalocean.com/community/tutorials/how-to-use-web-forms-in-a-flask-application). Check Home template / [Contact Section](https://flask.palletsprojects.com/en/2.2.x/quickstart/#http-methods)
- [Get strings from files in static folder](https://stackoverflow.com/questions/47378820/flask-loop-through-images-in-static-directory). Check Projects template
- [Sass Install](https://sass-lang.com/guide) / [Global Variables](https://stackoverflow.com/questions/17598996/sass-use-variables-across-multiple-files)
-  Modals / Lists

## Virtual environment          
Create a virtual environment: 
```
python3 -m venv <name of virtual environment>
```

Activate virtual environment:
```
. venv/bin/activate
```

Deactivate virtual environmt:
```
deactivate
```

Create a requirements text file:
```
pip freeze > requirements.txt
```

                        




