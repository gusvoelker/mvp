from django.db import models


class Meals(models.Model):
    title = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    recipe_link = models.CharField(max_length=150)
    difficulty = models.SmallIntegerField()
    rating = models.SmallIntegerField()
    cost = models.SmallIntegerField()


class CalendarMeals(models.Model):
    meal = models.ForeignKey(Meals, on_delete=models.CASCADE)
    meal_date = models.DateField()
