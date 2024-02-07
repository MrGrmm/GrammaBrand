from django.db import models

class MySelf(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    address = models.CharField(max_length=255)
    telephone_number = models.CharField(max_length=20)
    about_myself = models.TextField()
    stack = models.TextField()

class Experience(models.Model):
    position = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField()

class Education(models.Model):
    institution = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    field_of_study = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField()

class Languages(models.Model):
    language = models.CharField(max_length=50)
    proficiency = models.CharField(max_length=50)
