"""
URL configuration for GrammaBrandBack project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from HomePage.views import MySelfListAPIView, MyLinkListAPIView, EducationListAPIView, LanguagesListAPIView, ExperienceListAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/myself/', MySelfListAPIView.as_view(), name='myself-api'),
    path('api/mylink/', MyLinkListAPIView.as_view(), name='mylink-api'),
    path('api/education/', EducationListAPIView.as_view(), name='education-api'),
    path('api/language/', LanguagesListAPIView.as_view(), name='language-api'),
    path('api/experience/', ExperienceListAPIView.as_view(), name='experience-api'),

]
