from pathlib import Path
import pathlib
import fitz  #   type: ignore
from docx import Document  #   type: ignore
import os

# file_path = r"C:\Users\Abhis\Desktop\Document-Intelligence\backend\static\Document RAG Assignment.pdf"
# # file_path = r"C:\Users\Abhis\Desktop\Document-Intelligence\backend\static\\test.md"
# print("File path : ", file_path)
# # file_path = f"{(os.path.join(pathlib.Path(__file__).parent.parent.absolute(), file_path).replace("\\", "/"))}"
# print(f"{(os.path.join(pathlib.Path(__file__).parent.parent.absolute(), file_name).replace("\\", "/"))}")
# file_path = os.path.abspath(file_name)
# file_path = os.path.abspath(f"static/{file_name}")
# print("File path using abspath : ", file_path)


file_name = "Document RAG Assignment.pdf"
file_name = "test.text"


def file_read(file_path):

    if file_path.lower().endswith((".pdf")):
        return pdf_file_read(file_path)
    elif file_path.lower().endswith((".docx")):
        return docx_file_read(file_path)
    elif file_path.lower().endswith((".txt", ".md", ".text")):
        return txt_file_read(file_path)
    else:
        return "Invalid file format"


def pdf_file_read(pdf_path):
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text()
    # print("PDF Text : ", text)

    return text


def docx_file_read(docx_path):
    try:
        # print("Docx Path : ", docx_path)
        document = Document(docx_path)
        full_text = []
        for paragraph in document.paragraphs:
            full_text.append(paragraph.text)

        # print("Docx Text : ", "\n".join(full_text))
        return "\n".join(full_text)
    except Exception as e:
        return f"Error: {e}"


def txt_file_read(txt_path):
    with open(txt_path, "r", encoding="utf-8") as f:
        text = f.read()
        # print("Text : ", text)
        return text


# file_read(file_name)
