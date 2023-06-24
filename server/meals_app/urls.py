from django.urls import path

from . import views

urlpatterns = [
    path("", views.Meals.as_view(), name="meals"),
    path("calendar", views.CalendarMeals.as_view(), name="calendar_meals"),
]
