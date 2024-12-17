from django.shortcuts import render, redirect
from .models import Category, Event , Participant , Schedule , Payment , Speaker

def category(request):
    categories = Category.objects.all()
    return render(request, 'management_app/category.html', {'categories': categories})
  
       


def event(request):
    events = Event.objects.all()
    return render (request, 'management_app/event.html', {'events':events})