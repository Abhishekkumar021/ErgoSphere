import chromadb     #   type: ignore

client = chromadb.Client()
collection = client.get_or_create_collection("documents")

def store_embeddings(doc_id, chunks, embeddings):
    for i, (chunk, embed) in enumerate(zip(chunks, embeddings)):
        collection.add(
            documents=[chunk],
            embeddings=[embed],
            ids=[f"{doc_id}_{i}"]
        )

def retrieve_relevant_chunks(query_embedding, top_k=3):
    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=top_k
    )
    return results['documents'][0]
