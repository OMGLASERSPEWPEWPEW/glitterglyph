import psycopg2
from psycopg2 import sql, Error

def create_tables():
    commands = (
        """
        CREATE TABLE documents (
            document_id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            metadata JSONB,
            upload_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            total_characters INTEGER,
            user_id INTEGER
        )
        """,
    )
    conn = None
    try:
        # Connect to your postgres DB
        conn = psycopg2.connect(
            dbname="postgres",
            user="postgres",
            password="wolf1",
            host="localhost"
        )
        cur = conn.cursor()
        # Create table one by one
        for command in commands:
            cur.execute(command)
        # Close communication with the PostgreSQL database server
        cur.close()
        # Commit the changes
        conn.commit()
    except (Exception, Error) as error:
        print("Error while connecting to PostgreSQL", error)
    finally:
        if conn is not None:
            conn.close()


if __name__ == '__main__':
    create_tables()
