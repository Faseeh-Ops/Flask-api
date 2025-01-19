from flask import Blueprint, jsonify
import os

product_bp = Blueprint('products', __name__)

# Path to the images folder
IMAGE_FOLDER = os.path.join(os.getcwd(), "images")

# Sample products
products = [
  {"id": 1, "name": "Product 1", "price": 100, "image": "fitness_tracker.jpeg"},
  {"id": 2, "name": "Product 2", "price": 150, "image": "gaming_chair.jpeg"},
  {"id": 3, "name": "Product 3", "price": 200, "image": "headphones.jpeg"},
  {"id": 4, "name": "Product 4", "price": 250, "image": "mug.jpg"},
  {"id": 5, "name": "Product 5", "price": 300, "image": "mobilephones.jpeg"},
  {"id": 6, "name": "Product 6", "price": 350, "image": "mouse.jpeg"},
  {"id": 7, "name": "Product 7", "price": 400, "image": "handsfree.jpeg"},
  {"id": 8, "name": "Product 8", "price": 450, "image": "toy.jpeg"},
]

@product_bp.route('/products', methods=['GET'])
def get_products():
  # Add full image URLs to products
  for product in products:
    product['image_url'] = f"http://localhost:5000/images/{product['image']}"
  return jsonify(products)
