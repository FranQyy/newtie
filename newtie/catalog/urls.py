from django.urls import path, include
from catalog.views import HomeView

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
]