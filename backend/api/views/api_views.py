from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework import status
from api.models.document import Document
from django.conf import settings
from api.serializers.document_serializer import DocumentSerializer
import os
import uuid
from datetime import datetime
from api.rag_engine.pipeline import answer_question
from api.utils.page_count import get_page_count


class DocumentListView(APIView):
    def get(self, request):
        documents = Document.objects.all()
        serializer = DocumentSerializer(documents, many=True)
        # print(serializer.data)
        return Response(serializer.data)


class DocumentUploadView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request):

        uploaded_files = request.FILES.getlist(
            "files"
        )  # get all files from 'files' key
        uploaded_docs = []
        static_dir = os.path.join(settings.BASE_DIR, "static")
        os.makedirs(static_dir, exist_ok=True)

        for uploaded_file in uploaded_files:
            timestamp = str(datetime.timestamp(datetime.now())).replace(".", "_")
            file_name = f"{uploaded_file.name.split(".")[0]}_{timestamp}.{uploaded_file.name.split('.')[1]}"
            file_path = os.path.join(static_dir, file_name)

            with open(file_path, "wb+") as f:
                for chunk in uploaded_file.chunks():
                    f.write(chunk)

            # print(uploaded_file.content_type())
            doc = Document.objects.create(
                id=uuid.uuid4(),
                title=uploaded_file.name.split(".")[0],
                file_path=file_path,
                doc_type=uploaded_file.name.split(".")[1],
                size=uploaded_file.size,
                pages=get_page_count(file_path, uploaded_file.content_type),
                status="finished",
            )
            uploaded_docs.append({"doc_id": str(doc.id), "title": doc.title})

        return Response(
            {"message": "Files uploaded", "documents": uploaded_docs},
            status=status.HTTP_201_CREATED,
        )

        # uploaded_file = request.FILES["files"]
        # file_name = f"{uploaded_file.name}_{str(datetime.timestamp(datetime.now())).replace('.', '_')}"
        # file_path = f"static/{file_name}"
        # os.makedirs("static", exist_ok=True)
        # file_path = os.path.join(static_dir, file_name)

        # with open(file_path, "wb+") as f:
        #     for chunk in uploaded_file.chunks():
        #         f.write(chunk)

        # doc = Document.objects.create(
        #     id=uuid.uuid4(),
        #     title=uploaded_file.name,
        #     file_path=file_path,
        #     doc_type=uploaded_file.content_type,
        #     size=uploaded_file.size,
        # )

        # return Response(
        #     {"message": "File uploaded", "doc_id": doc.id},
        #     status=status.HTTP_201_CREATED,
        # )


class AskQuestionView(APIView):
    def post(self, request):
        # Expected params: doc_id, question, top_k
        doc_id = request.data.get("doc_id")
        question = request.data.get("question")
        top_k = int(request.data.get("top_k", 3))
        ans = answer_question(doc_id, question, top_k)
        # TODO: Call RAG pipeline here
        return Response({"answer": f"{ans}"})
        # return Response({"answer": f"{(placeholder) Answer here.}"})

