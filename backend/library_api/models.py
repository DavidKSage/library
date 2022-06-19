from django.db import models

# Create your models here.
class Book(models.Model):

    class Genre(models.TextChoices):
        FICTION = 'Fiction'
        NONFICTION = 'Nonfiction'
        OTHER = 'Other'

    author_name = models.TextField(max_length=100, blank=False, default="John Doe")
    title = models.TextField(max_length=100, blank=False)
    genre = models.TextField(choices=Genre.choices, blank=True)
    isbn = models.TextField(max_length=15, blank=True)

    def __str__(self):
        return f'{self.title}'