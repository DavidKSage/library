# Generated by Django 4.0.5 on 2022-06-16 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library_api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='author_fn',
        ),
        migrations.RemoveField(
            model_name='book',
            name='author_ln',
        ),
        migrations.RemoveField(
            model_name='book',
            name='author_mi',
        ),
        migrations.AddField(
            model_name='book',
            name='author_name',
            field=models.TextField(default='John Doe', max_length=100),
        ),
    ]
