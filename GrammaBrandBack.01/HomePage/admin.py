from django.contrib import admin
from .models import MySelf, Education, Experience, Languages, MyLink

admin.site.register(MySelf)
admin.site.register(MyLink)
admin.site.register(Education)
admin.site.register(Experience)
admin.site.register(Languages)