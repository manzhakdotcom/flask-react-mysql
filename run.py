from flask import Flask
from flask import jsonify
from app.db import DB
from flask_cors import CORS

app = Flask(__name__)
db = DB()

CORS(app)


@app.route('/api/personal', methods=['GET'])
def get_all_inputs():
    try:
        data = db.get_all_inputs()
    except Exception as e:
        print(e)
        data = None
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
