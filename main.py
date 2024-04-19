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

# Establish a connection to MySQL
conn = mysql.connector.connect(**db_config)
cursor = conn.cursor()

def add_item(name, price):
    try:
        cursor.execute("INSERT INTO items (name, price) VALUES (%s, %s)", (name, price))
        conn.commit()  # Commit the changes
        return True
    except mysql.connector.Error as err:
        conn.rollback()  # Rollback the changes if an error occurs
        print(f"Error: {err}")
        return False


Sure, to modify the get_items function to retrieve the item name, price, and description based on the item ID, you'll need to adjust the SQL query accordingly to fetch these specific fields. Here's how you can modify the function:

python
Copy code
# Function to fetch item details by ID from the database
def get_item_by_id(item_id):
    try:
        cursor.execute("SELECT name, price, description FROM items WHERE id = %s", (item_id,))
        item = cursor.fetchone()
        return item
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return None

@app.route('/get_item', methods=['GET'])
def get_item_route():
    item_id = request.args.get('id')
    if item_id:
        item = get_item_by_id(item_id)
        if item:
            item_data = {
                'name': item[0],
                'price': item[1],
                'description': item[2]
            }
            return jsonify(item_data)
        else:
            return "Item not found", 404
    else:
        return "Missing item ID in request", 400

