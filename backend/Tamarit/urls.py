
from django.contrib import admin
from django.urls import path
from .views import *
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework import routers
from django.urls import path, include  # Add this line
from django.views.decorators.csrf import csrf_exempt  # Add this line
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('sites/', site_list),    # liste des sites
    path('sites/add', create_site), # ajouter site
    path('sites/<int:id>', site_details, name='site_details'), #details site
    path('home/contactUs/', csrf_exempt(create_contactMsg)),
    path('home/messages/', contactMsg_list),
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns = format_suffix_patterns(urlpatterns)
