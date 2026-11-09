from flask_mysqldb import MySQL
import os
from dotenv import load_dotenv
load_dotenv()
mysql = MySQL()
def configurar(app):
    app.config["MYSQL_HOST"] = os.getenv("MYSQL_HOST", "127.0.0.1")
    app.config["MYSQL_USER"] = os.getenv("MYSQL_USER", "root")
    app.config["MYSQL_PASSWORD"] = os.getenv("MYSQL_PASSWORD", "")
    app.config["MYSQL_DB"] = os.getenv("MYSQL_DB", "sistema")
    app.config["MYSQL_PORT"] = int(os.getenv("MYSQL_PORT", 3306))
    app.config["MYSQL_CURSORCLASS"] = "DictCursor"
    # Configuración para mantener/reconectar correctamente la conexión
    app.config["MYSQL_CONNECT_TIMEOUT"] = 10
    app.config["MYSQL_READ_TIMEOUT"] = 30
    app.config["MYSQL_WRITE_TIMEOUT"] = 30
    mysql.init_app(app)