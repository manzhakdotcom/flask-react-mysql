from flask import Flask
from flask import jsonify
from app.db import DB

app = Flask(__name__)
db = DB()


@app.route('/')
def main():
    try:
        data = db.get_all_inputs()
    except Exception as e:
        print(e)
        data = None
    return jsonify(data)


if __name__ == '__main__':
    app.run()
