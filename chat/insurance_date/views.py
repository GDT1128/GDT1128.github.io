from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request,'index.html')

def insurance(request):
    return render(request,'todolist.html')