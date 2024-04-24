#pip install flask
#pip install mysql-connector-python
from flask import Flask, request, jsonify, render_template, send_from_directory
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

@app.route('/product')
def product():
    return render_template('product.html')

if __name__ == '__main__':
    app.run(debug=True)

cursor = db.cursor()

@app.route('/static/scripts/<path:path>')
def send_js(path):
    return send_from_directory('static/scripts', path, mimetype='text/javascript')

def get_item_title_by_id(item_id):
    try:
        print(f"SELECT title FROM items WHERE id = {item_id}")
        cursor.execute(f"SELECT title FROM items WHERE id = {item_id}")
        result = cursor.fetchone()
        if result:
            print(result)
            return result[0]
        else:
            return None
    except mysql.connector.Error as err:
        print(err)
        return None

@app.route('/get_item_title', methods=['GET'])
def get_item_title():
    item_id = request.args.get('id')
    if item_id:
        item_title = get_item_title_by_id(item_id)
        if item_title:
            return jsonify({'title': item_title})
        else:
            return jsonify({'error': 'Item not found'}), 404
    else:
        return jsonify({'error': 'Missing item ID'}), 400
