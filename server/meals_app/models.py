from django.db import models


class Meals(models.Model):
    title = models.CharField(max_length=50, blank=True)
    description = models.CharField(max_length=1500, blank=True)
    category = models.CharField(max_length=50, blank=True)
    recipe_link = models.CharField(max_length=150, blank=True)
    difficulty = models.SmallIntegerField()
    rating = models.SmallIntegerField()
    cost = models.SmallIntegerField()


class CalendarMeals(models.Model):
    meal = models.ForeignKey(Meals, on_delete=models.CASCADE)
    date = models.DateField()
