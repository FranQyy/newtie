from ..models import Subject
from .serializers import SubjectSerializer
# from rest_framework import generics

# class SubjectListCreate(generics.CreateAPIView):
#     queryset = Subject.objects.all()
#     serializer_class = SubjectSerializer


# class SubjectDestroyView(generics.DestroyAPIView):
#     queryset = Subject.objects.all()
#     serializer_class = SubjectSerializer


# class SubjectUpdateView(generics.UpdateAPIView):
#     queryset = Subject.objects.all()
#     serializer_class = SubjectSerializer


# class SubjectListView(generics.ListAPIView):
#     queryset = Subject.objects.all()
#     serializer_class = SubjectSerializer


# class SubjectDetailView(generics.RetrieveAPIView):
#     queryset = Subject.objects.all()
#     serializer_class = SubjectSerializer

# This makes the same:
from rest_framework import viewsets

class SubjectViewSet(viewsets.ModelViewSet):
    serializer_class = SubjectSerializer
    queryset = Subject.objects.all()