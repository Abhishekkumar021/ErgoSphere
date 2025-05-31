from django.db import models
from api.models.document import Document


class DocumentChunk(models.Model):
    document = models.ForeignKey(
        Document, on_delete=models.CASCADE, related_name="chunks"
    )
    chunk_index = models.IntegerField()
    content = models.TextField()
    page_number = models.IntegerField(default=0)  # If you know page from PDF
    embedding_id = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
