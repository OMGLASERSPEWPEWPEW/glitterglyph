import psycopg2
from psycopg2 import sql
from flask import Flask, request
from flask_cors import CORS
from docx import Document
import os
from io import BytesIO

app = Flask(__name__)
CORS(app)

# Create a connection to the database
conn = psycopg2.connect(
    host="localhost",
    database="postgres",
    user="postgres",
    password="wolf1"
)


def docx_to_text(file):
    doc = Document(file)
    return '\n\n'.join(paragraph.text for paragraph in doc.paragraphs)


@app.route('/document', methods=['GET'])
def get_documents():
    with conn.cursor() as cur:
        cur.execute("SELECT content FROM documents ORDER BY upload_date DESC LIMIT 1")
        result = cur.fetchone()
        if result is not None:
            return {'content': result[0]}
        else:
            return {'content': ''}


@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file part in the request.', 400

    file = request.files['file']

    if file.filename == '':
        return 'No selected file.', 400

    file_content = file.read()
    text_content = docx_to_text(BytesIO(file_content))

    # Save the file content and other information into the database
    with conn.cursor() as cur:
        insert = sql.SQL(
            "INSERT INTO documents (title, content, total_characters) VALUES (%s, %s, %s)"
        )
        values = (file.filename, text_content, len(text_content))
        cur.execute(insert, values)
        conn.commit()


    return 'File uploaded successfully.', 200


if __name__ == '__main__':
    app.run(debug=True)
