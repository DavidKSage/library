from django.urls import path, include
from .views import BookViewSet
from rest_framework import routers
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('', BookViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
