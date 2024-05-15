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

@app.route('/cart')
def cart():
    return render_template('cart.html')

@app.route('/get_data_item', methods=['GET'])
def get_data_item():
    cursor = db.cursor()
    cursor.execute("SELECT * FROM bukser") 
    data = cursor.fetchall()
    cursor.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)