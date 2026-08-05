from flask import Flask
app = Flask(__name__)

from routes.home import home_bp


app.register_blueprint(home_bp)

if __name__ == "__main__":
    app.run(debug=True)