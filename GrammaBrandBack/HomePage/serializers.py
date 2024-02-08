from rest_framework import serializers
from .models import MySelf, Education, Experience, Languages


class MySelfSerializer(serializers.ModelSerializer):
    class Meta:
        model = MySelf
        fields = '__all__'

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

