#pip install flask
#pip install mysql-connector-python
from flask import Flask, render_template, jsonify
import mysql.connector

app = Flask(__name__)

# MySQL Configuration
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="1701",
    database="stayhjemmesidedb"
)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_data', methods=['GET'])
def get_data():
    cursor = db.cursor()
    cursor.execute("SELECT * FROM forside")  # Replace with your actual SQL query
    data = cursor.fetchall()  # Fetch all rows from the result set
    cursor.close()  # Close cursor
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)