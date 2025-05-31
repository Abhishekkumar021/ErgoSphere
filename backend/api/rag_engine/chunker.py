def chunk_text(text, chunk_size=500):
    paragraphs = text.split('\n')
    chunks = []
    chunk = ""
    for para in paragraphs:
        if len(chunk) + len(para) < chunk_size:
            chunk += para + "\n"
        else:
            chunks.append(chunk.strip())
            chunk = para + "\n"
    if chunk:
        chunks.append(chunk.strip())
    return chunks
