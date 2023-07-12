from django.http import HttpResponse, JsonResponse
from django.views import View
from django.core.exceptions import ObjectDoesNotExist
from .serializers import MealSerializer
from .models import Meals as MealsModel, CalendarMeals as CalendarMealsModel
import json


class Meals(View):
    def get(self, request):
        try:
            data = MealsModel.objects.all()
            meals = list(data.values())
            return JsonResponse(meals, safe=False)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    def post(self, request):
        try:
            meal_data = json.loads(request.body)
            MealsModel.objects.create(**meal_data)
            return JsonResponse({"message": "Meal Added"}, status=201)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON data"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    def patch(self, request):
        # TODO: setup
        return HttpResponse("route not setup")

    def delete(self, request):
        try:
            id = request.GET.get("id")
            if id is None:
                return JsonResponse({"error": "Missing 'id' parameter"}, status=400)
            try:
                meal = MealsModel.objects.get(pk=id)
                meal.delete()
                return JsonResponse({"success": "meal deleted"}, status=204)
            except MealsModel.DoesNotExist:
                return JsonResponse({"error": "Meal not found"}, status=404)
        except ValueError:
            return JsonResponse({"error": "Invalid 'id' parameter"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)


class CalendarMeals(View):
    def get(self, request):
        try:
            data = CalendarMealsModel.objects.select_related("meal").all()
            calendar_meals = []
            for c_meal in data:
                meal_data = MealSerializer(c_meal.meal).data
                c_meal_data = {"date": c_meal.date, "meal": meal_data}
                calendar_meals.append(c_meal_data)

            return JsonResponse(calendar_meals, safe=False)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    def post(self, request):
        try:
            calendar_meal_data = json.loads(request.body)
            meal_id = calendar_meal_data.get("meal")
            date = calendar_meal_data.get("date")

            meal = MealsModel.objects.get(id=meal_id)

            CalendarMealsModel.objects.create(meal=meal, date=date)

            return JsonResponse({"message": "Meal Added"}, status=201)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON data"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    def put(self, request):
        data = json.loads(request.body)
        try:
            meal_id = data["meal"]
            date = data["date"]
            new_meal = MealsModel.objects.get(id=meal_id)
            CalendarMealsModel.objects.filter(date=date).update(meal=new_meal)
            return JsonResponse("sucess: meal updated", safe=False)
        except KeyError:
            return JsonResponse({"error: invalid request body"})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    def patch(self, request):
        return HttpResponse("patch")

    def delete(self, request):
        try:
            date = request.GET.get("date")
            if date == None:
                return JsonResponse({"error": "Missing 'date' parameter"}, status=400)
            try:
                meal = CalendarMealsModel.objects.get(date=date)
                meal.delete()
                return HttpResponse({"success": "meal deleted"}, status=204)
            except CalendarMealsModel.DoesNotExist:
                return JsonResponse({"error": "calendar meal not found"})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
