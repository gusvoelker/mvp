from django.http import HttpResponse, JsonResponse
from django.views import View
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

    def put(self, request):
        return HttpResponse("put")

    def patch(self, request):
        return HttpResponse("patch")

    def delete(self, request):
        try:
            id = request.GET.get("id")
            MealsModel.objects.filter(pk=id).delete()
            return JsonResponse({"message": "Meal Deleted"}, status=201)
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
