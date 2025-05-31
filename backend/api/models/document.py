from django.db import models
import uuid


class Document(models.Model):
    DOC_TYPES = [
        ("pdf", "PDF"),
        ("docx", "DOCX"),
        ("txt", "TXT"),
    ]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    file_path = models.TextField()
    doc_type = models.CharField(max_length=150, choices=DOC_TYPES)
    size = models.IntegerField()
    pages = models.IntegerField(default=0)
    status = models.CharField(max_length=20, default="processing")
    created_at = models.DateTimeField(auto_now_add=True)
