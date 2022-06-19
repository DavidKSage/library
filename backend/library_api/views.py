from .models import Book
from .serializers import BookSerializer
from rest_framework import viewsets
from django_filters import rest_framework as filters

# Create your views here.
class BookFilter(filters.FilterSet):
    author_name = filters.CharFilter(lookup_expr = 'icontains')
    title = filters.CharFilter(lookup_expr = 'icontains')
    genre = filters.CharFilter(lookup_expr = 'icontains')

    class Meta:
        model = Book
        fields = ('author_name', 'title', 'genre')

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filterset_class = BookFilter