"""
URL configuration for Tamarit project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include
from .views import login_auth_touriste,login_auth_Regionnal, TouristRegistrationView ,touriste_home ,login_view,logout_view , RegionnalRegistrationView ,Regionnal_home,add_comment , site_detail,site_comment_list,AdminRegistrationView,login_auth_Admin,Admin_home ,user_delete
from . import views
from django.contrib import admin
from django.urls import include,path

urlpatterns = [

    path('', include('myapp.urls')),
    path("myapp/",include("myapp.urls")),
    path('admin/', admin.site.urls),

    
    path('', views.first_page, name='first_page'),
    path('', include('social_django.urls', namespace='social')),

    path('touriste/home/', touriste_home, name='touriste_home'),
    path('tourist/register/', TouristRegistrationView.as_view(), name='tourist_registration'),
    path('login-auth/tourist', login_auth_touriste, name='login_auth_tourist'),

    path('touriste/home/sites/<int:site_id>/favorite/', views.add_favorite, name='add_favorite'),
    path('touriste/home/user/favorites/', views.user_favorites, name='user_favorites'),


    path('Regionnal/home/', Regionnal_home, name='Regionnal_home'),
    path('Regionnal/register/', RegionnalRegistrationView.as_view(), name='Regionnal_registration'),
    path('login-auth/Regionnal', login_auth_Regionnal, name='login_auth_Regionnal'),


    path('AdminCentral/home/', Admin_home, name='Admin_home'),
    path('AdminCentral/register/', AdminRegistrationView.as_view(), name='Admin_registration'),
    path('login-auth/AdminCentral', login_auth_Admin, name='login_auth_Admin'),


    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),

    
    path('touriste/home/add_comment/<int:site_id>/', add_comment, name='add_comment'),
    path('touriste/home/site/<int:site_id>/', site_detail, name='site_details'),

    path('Regionnal/home/site/<int:site_id>/', site_comment_list, name='site_comment_list'),
    path('Regionnal/home/delete_comment/<int:comment_id>/', views.delete_comment, name='delete_comment'),


    path('AdminCentral/home/users/', views.user_list, name='user_list'),
    path('AdminCentral/home/users/add/', views.Add_user, name='Add_user'),
    path('AdminCentral/home/users/delete/<int:user_id>/',user_delete, name='delete_user'),
    path('AdminCentral/home/users/edit/<int:user_id>/', views.edit_user, name='edit_user')

    
]

urlpatterns = format_suffix_patterns(urlpatterns)
