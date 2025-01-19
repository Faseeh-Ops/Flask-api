from flask import Blueprint, jsonify, request

cart_bp = Blueprint('cart', __name__)

cart = []  # List to store cart items

@cart_bp.route('/cart', methods=['POST'])
def add_to_cart():
  item = request.json
  cart.append(item)
  return jsonify({"message": "Item added to cart", "cart": cart})

@cart_bp.route('/cart', methods=['GET'])
def get_cart():
  return jsonify(cart)

@cart_bp.route('/cart/total', methods=['GET'])
def calculate_total():
  total = sum(item['price'] for item in cart)
  return jsonify({"total": total})
