#pip install flask
#pip install mysql-connector-python
from flask import Flask, render_template
import mysql.connector

app = Flask(__name__)

# MySQL Configuration
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="1701",
    database="stayhjemmesidedbd"
)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
