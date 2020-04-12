from flask import Flask
from flask import jsonify
from server.db import DB
from flask_cors import CORS

app = Flask(__name__)
db = DB()

CORS(app)


@app.route('/api/tables/<archive>', methods=['GET'])
def get_archive(archive):
    type_archive = ["ts", "tu", "ti"]
    data = None
    if archive in type_archive:
        try:
            data = db.get_all_tables(archive)
            print(data)
        except Exception as e:
            print(e)
        return jsonify(data)
    else:
        return jsonify(data)


@app.route('/api/tables/items/<t>/<table>', methods=['GET'])
def get_data(t, table):
    data = None
    try:
        data = db.get_data_from_table(t, table)
        print(data, )
    except Exception as e:
        print(e)
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
