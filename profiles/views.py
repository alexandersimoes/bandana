from django.http import HttpResponse, HttpResponseRedirect
from bandana.profiles.models import Band, Module, Item
from django.shortcuts import render_to_response

def home(request):
    # return HttpResponseRedirect("/bands/")
    return render_to_response('home.html')

def index(request):
    all_bands_list = Band.objects.all().order_by('-since')[:5]
    return render_to_response('index.html', {'all_bands_list': all_bands_list})
    
def band(request, s):
    b = Band.objects.get(slug=s)
    all_modules_list = b.module_set.all()
    items = []
    for module in all_modules_list:
        module.items = module.item_set.all()
    return render_to_response('band.html',
                              {'all_modules_list':all_modules_list,'band':b})