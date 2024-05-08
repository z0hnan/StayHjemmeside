#pip install flask
#pip install mysql-connector-python
from flask import Flask, request, jsonify, render_template
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

@app.route('/FAQ')
def FAQ():
    return render_template('FAQ.html')

@app.route('/products')
def products():
    return render_template('products.html')

@app.route('/product')
def product():
    return render_template('product.html')

@app.route('/get_data_item', methods=['GET'])
def get_data_item():
    cursor = db.cursor()
    cursor.execute("SELECT * FROM bukser")  # Replace with your actual SQL query
    data = cursor.fetchall()  # Fetch all rows from the result set
    cursor.close()  # Close cursor
    return jsonify(data)

"""@app.route('/get_data_itemtype', methods=['GET']) #If we want to get data on itemtype to make to website more dynamic
def get_data_itemtype():
    cursor = db.cursor()
    cursor.execute("SELECT * FROM items_view")  # Replace with your actual SQL query
    data = cursor.fetchall()  # Fetch all rows from the result set
    cursor.close()  # Close cursor
    return jsonify(data)""" 

if __name__ == '__main__':
    app.run(debug=True)