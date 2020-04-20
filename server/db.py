import pymysql
import server.dbconfig as config
import time


class DB:

    def connect(self, database="params"):
        return pymysql.connect(host=config.db_host,
                               user=config.db_user,
                               passwd=config.db_password,
                               db=database,
                               charset='utf8',
                               cursorclass=pymysql.cursors.DictCursor)

    def get_all_tables(self, archive):
        connection = self.connect()
        try:
            query = "select table_name from information_schema.tables where table_name like 'archiv_" \
                    + archive \
                    + "%';"
            with connection.cursor() as cursor:
                time.sleep(1)
                cursor.execute(query)
            return cursor.fetchall()
        finally:
            connection.close()

    def get_data_from_table(self, t, table):
        connection = self.connect()
        try:
            query = "select * from " + table + ";"
            with connection.cursor() as cursor:
                time.sleep(1)
                cursor.execute(query)
            return cursor.fetchall()
        finally:
            connection.close()
