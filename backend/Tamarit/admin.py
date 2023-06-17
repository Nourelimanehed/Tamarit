from django.contrib import admin

from .models import Profile
from .models import Comment
from .models import Site
from .models import Region

admin.site.register(Profile)
admin.site.register(Comment)
admin.site.register(Site)
admin.site.register(Region)
