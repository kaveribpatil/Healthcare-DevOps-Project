from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os

app = Flask(__name__)
CORS(app)

# ✅ MongoDB Connection (use env variable for DevOps best practice)
MONGO_URI = os.getenv(
    "MONGO_URI",
    "mongodb+srv://Kaveri:Test123@cluster0.tn1bink.mongodb.net/healthcare?retryWrites=true&w=majority"
)

client = MongoClient(MONGO_URI)
db = client["healthcare"]
collection = db["records"]


# ✅ Home Route
@app.route('/')
def home():
    return "Healthcare Record System Running"


# ✅ Add Record
@app.route('/add', methods=['POST'])
def add_record():
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "No data provided"}), 400

        collection.insert_one(data)
        print("✅ Data inserted:", data)

        return jsonify({"message": "Record added"}), 201

    except Exception as e:
        print("❌ Insert Error:", e)
        return jsonify({"error": "Failed to insert record"}), 500


# ✅ Get Records
@app.route('/records', methods=['GET'])
def get_records():
    try:
        data = list(collection.find({}, {"_id": 0}))
        print("📄 Data fetched:", data)

        return jsonify(data), 200

    except Exception as e:
        print("❌ Fetch Error:", e)
        return jsonify({"error": "Failed to fetch records"}), 500


# ✅ Run App (IMPORTANT FIX FOR DOCKER)
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)