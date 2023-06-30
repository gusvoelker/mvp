from django.http import HttpResponse, JsonResponse
from django.views import View
from django.core.exceptions import ObjectDoesNotExist
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

    def delete(self, request, *args, **kwargs):
        try:
            id = request.GET.get("id")
            if id is None:
                return JsonResponse({"error": "Missing 'id' parameter"}, status=400)
            try:
                meal = MealsModel.objects.get(pk=id)
                meal.delete()
                return JsonResponse({}, status=204)  # No Content
            except MealsModel.DoesNotExist:
                return JsonResponse({"error": "Meal not found"}, status=404)
        except ValueError:
            return JsonResponse({"error": "Invalid 'id' parameter"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)


class CalendarMeals(View):
    def get(self, request):
        return HttpResponse("get")

    def post(self, request):
        return HttpResponse("post")

    def put(self, request):
        return HttpResponse("put")

    def patch(self, request):
        return HttpResponse("patch")

    def delete(self, request):
        return HttpResponse("delete")
