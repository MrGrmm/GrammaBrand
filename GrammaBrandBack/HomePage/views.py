from django.shortcuts import render
from rest_framework import generics
from .models import MySelf, Education, Experience, Languages, MyLink
from .serializers import MySelfSerializer, EducationSerializer, ExperienceSerializer, LanguagesSerializer, MyLinkSerializer


class MySelfListAPIView(generics.ListAPIView):
    queryset = MySelf.objects.all()
    serializer_class = MySelfSerializer

class MyLinkListAPIView(generics.ListAPIView):
    queryset = MyLink.objects.all()
    serializer_class = MyLinkSerializer

class EducationListAPIView(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class ExperienceListAPIView(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class LanguagesListAPIView(generics.ListAPIView):
    queryset = Languages.objects.all()
    serializer_class = LanguagesSerializer
