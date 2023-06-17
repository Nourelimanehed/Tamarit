from django.contrib import admin
from .models import *
#----------------
admin.site.register(Site)
admin.site.register(OpeningHours)
admin.site.register(Transportation)
admin.site.register(Images)
admin.site.register(Event)
admin.site.register(ContactMessage)
admin.site.register(Notification)