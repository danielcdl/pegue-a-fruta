from django.views.generic.base import TemplateView
from django.shortcuts import render

class Index(TemplateView):
    template_name = 'home/index.html'