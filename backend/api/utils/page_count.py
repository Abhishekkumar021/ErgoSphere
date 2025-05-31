import fitz  #   type: ignore
from docx import Document  #   type: ignore


def get_page_count(file_path, content_type):
    if content_type == "application/pdf":
        with fitz.open(file_path) as doc:
            return doc.page_count

    elif content_type in [
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
    ]:
        doc = Document(file_path)
        page_count = sum(p.contains_page_break for p in doc.paragraphs) + 1
        return page_count
    elif content_type == "text/plain":
        # Estimate: 50 lines per page
        with open(file_path, "r", encoding="utf-8") as f:
            lines = f.readlines()
        return max(1, (len(lines) + 49) // 50)

    # Optional: handle DOCX, XLSX, etc.
    return None  # or raise Exception("Unsupported type")
