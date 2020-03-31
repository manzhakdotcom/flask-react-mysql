import pymysql
import app.dbconfig as config


class DB:

    def connect(self, database="params"):
        return pymysql.connect(host=config.db_host,
                               user=config.db_user,
                               passwd=config.db_password,
                               db=database,
                               charset='utf8',
                               cursorclass=pymysql.cursors.DictCursor)

    def get_all_inputs(self):
        connection = self.connect()
        try:
            query = "SELECT * FROM personal;"
            with connection.cursor() as cursor:
                cursor.execute(query)
            return cursor.fetchall()
        finally:
            connection.close()

    def add_input(self, data):
        connection = self.connect()
        try:
            query = "INSERT INTO personal (name) VALUES (%s);"
            with connection.cursor() as cursor:
                cursor.execute(query, data)
                connection.commit()
        finally:
            connection.close()

    def clear_all(self):
        connection = self.connect()
        try:
            query = "DELETE FROM personal;"
            with connection.cursor() as cursor:
                cursor.execute(query)
                connection.commit()
        finally:
            connection.close()
