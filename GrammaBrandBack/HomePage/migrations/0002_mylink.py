# Generated by Django 5.0.1 on 2024-02-09 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='MyLink',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('linkedin', models.CharField(max_length=255)),
                ('github', models.CharField(max_length=255)),
                ('telegram', models.CharField(max_length=255)),
                ('facebook', models.CharField(max_length=255)),
            ],
        ),
    ]
