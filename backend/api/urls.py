from django.urls import path
from api.views.api_views import DocumentListView, DocumentUploadView, AskQuestionView

urlpatterns = [
    path("documents/", DocumentListView.as_view()),
    path("upload/", DocumentUploadView.as_view()),
    path("ask/", AskQuestionView.as_view()),
]
