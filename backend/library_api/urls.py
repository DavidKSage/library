from django.urls import path, include
from .views import BookViewSet
from rest_framework import routers
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('', BookViewSet)

urlpatterns = router.urls