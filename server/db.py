import pymysql
import server.dbconfig as config


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
            query = "select table_name, table_rows from information_schema.tables where " \
                    "table_rows<>0 and " \
                    "table_name like 'archiv_" + archive + "%';"
            with connection.cursor() as cursor:
                cursor.execute(query)
            return cursor.fetchall()
        finally:
            connection.close()

    def get_data_from_table(self, t, table):
        connection = self.connect()
        try:
            query = "select * from " + table + ";"
            with connection.cursor() as cursor:
                cursor.execute(query)
            return cursor.fetchall()
        finally:
            connection.close()
