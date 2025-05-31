from api.rag_engine.chunker import chunk_text
from api.rag_engine.embedder import get_embeddings
from api.rag_engine.retriever import store_embeddings, retrieve_relevant_chunks
from api.rag_engine.generator import generate_answer
from api.models.document import Document
from api.rag_engine.file_reader import file_read


# def answer_question(doc_id, question, top_k=3):
#     doc = Document.objects.get(id=doc_id)
#     # with open(doc.file_path, "r", encoding="utf-8") as f:
#     #     text = f.read()
#     print("File path : ", doc.file_path)
#     text = file_read(doc.file_path)

#     chunks = chunk_text(text)
#     chunk_embeddings = get_embeddings(chunks)
#     store_embeddings(doc_id, chunks, chunk_embeddings)

#     query_embedding = get_embeddings([question])[0]
#     top_chunks = retrieve_relevant_chunks(query_embedding, top_k)

#     context = "\n".join(top_chunks)
#     return generate_answer(context, question)


from api.models.chunk import DocumentChunk

def answer_question(doc_id, question, top_k=3):
    doc = Document.objects.get(id=doc_id)
    print("File path : ", doc.file_path)
    text = file_read(doc.file_path)

    chunks = chunk_text(text)
    chunk_embeddings = get_embeddings(chunks)

    # Save each chunk in DB
    for i, (chunk, embedding) in enumerate(zip(chunks, chunk_embeddings)):
        embedding_id = f"{doc.id}_{i}"

        # Save to Chroma
        store_embeddings(doc.id, [chunk], [embedding])

        # Save to MySQL
        DocumentChunk.objects.create(
            document=doc,
            chunk_index=i,
            content=chunk,
            page_number=0,  # replace with actual page if known
            embedding_id=embedding_id
        )

    query_embedding = get_embeddings([question])[0]
    top_chunks = retrieve_relevant_chunks(query_embedding, top_k)

    context = "\n".join(top_chunks)
    return generate_answer(context, question)
