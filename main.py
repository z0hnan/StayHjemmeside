#pip install flask
#pip install mysql-connector-python
from flask import Flask, render_template
import mysql.connector

app = Flask(__name__)

# MySQL Configuration


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
