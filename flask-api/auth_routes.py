from flask import Blueprint, jsonify, request

auth_bp = Blueprint('auth', __name__)

users = []  # List to store users

@auth_bp.route('/signup', methods=['POST'])
def signup():
  data = request.json
  if any(user['email'] == data['email'] for user in users):
    return jsonify({"message": "User already exists"}), 400
  users.append(data)
  return jsonify({"message": "Signup successful"})

@auth_bp.route('/login', methods=['POST'])
def login():
  data = request.json
  user = next((user for user in users if user['email'] == data['email'] and user['password'] == data['password']), None)
  if user:
    return jsonify({"message": "Login successful"})
  return jsonify({"message": "Invalid credentials"}), 401
