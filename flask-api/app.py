from flask import Flask
from auth_routes import auth_bp
from product_routes import product_bp
from cart_routes import cart_bp

app = Flask(__name__)

# Register blueprints
app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(product_bp, url_prefix='/api')
app.register_blueprint(cart_bp, url_prefix='/api')

# Serve images
@app.route('/images/<filename>', methods=['GET'])
def serve_image(filename):
  from flask import send_from_directory
  import os
  IMAGE_FOLDER = os.path.join(os.getcwd(), "images")
  return send_from_directory(IMAGE_FOLDER, filename)

if __name__ == '__main__':
  app.run(debug=True)
