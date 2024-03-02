from rest_framework import serializers
from .models import MySelf, Education, Experience, Languages, MyLink


class MySelfSerializer(serializers.ModelSerializer):
    class Meta:
        model = MySelf
        fields = '__all__'

class MyLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyLink
        fields = ('linkedin', 'github', 'telegram')

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('institution', 'degree', 'start_date', 'end_date', 'description')

class LanguagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Languages
        fields = ('__all__')

