from django.urls import path

# from .views import SubjectDetailView, SubjectListView, SubjectListCreate, SubjectDestroyView, SubjectUpdateView

urlpatterns = [
    # path('', SubjectListView.as_view()),
    # path('<pk>', SubjectDetailView.as_view()),
    # path('create/', SubjectListCreate.as_view()),
    # path('<pk>/destroy/', SubjectDestroyView.as_view()),
    # path('<pk>/update/', SubjectUpdateView.as_view())
]

from catalog.api.views import SubjectViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', SubjectViewSet, basename='subjects')
urlpatterns = router.urls