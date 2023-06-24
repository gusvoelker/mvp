from django.http import HttpResponse
from django.views import View


class Meals(View):
    def get(self, request, *args, **kwargs):
        return HttpResponse("get")

    def post(self, request, *args, **kwargs):
        return HttpResponse("post")

    def put(self, request, *args, **kwargs):
        return HttpResponse("put")

    def patch(self, request, *args, **kwargs):
        return HttpResponse("patch")

    def delete(self, request, *args, **kwargs):
        return HttpResponse("delete")


class CalendarMeals(View):
    def get(self, request, *args, **kwargs):
        return HttpResponse("get")

    def post(self, request, *args, **kwargs):
        return HttpResponse("post")

    def put(self, request, *args, **kwargs):
        return HttpResponse("put")

    def patch(self, request, *args, **kwargs):
        return HttpResponse("patch")

    def delete(self, request, *args, **kwargs):
        return HttpResponse("delete")
