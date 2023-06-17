from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login ,logout
from django.contrib.auth.decorators import login_required
from .models import Profile , Favorite
from django.views.generic import CreateView
from django.urls import reverse_lazy
from .models import Site, Comment
from .forms import CommentForm
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from .serializers import UserSerializer, ProfileSerializer ,CommentSerializer ,SiteSerializer , FavoriteSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from django.http import Http404
from django.http import HttpResponseRedirect
from django.urls import reverse



#-----------------------------------------------
class TouristRegistrationView(CreateView):
    model = User
    template_name = 'registration.html'
    fields = ['username', 'password', 'email']
    success_url = reverse_lazy('touriste_home')

    def form_valid(self, form):
        user = form.save(commit=False)
        user.set_password(form.cleaned_data['password'])
        user.save()

        # Create a profile for the user
        profile_data = {'user': user, 'role': 'tourist'}
        profile_serializer = ProfileSerializer(data=profile_data)
        if profile_serializer.is_valid():
            profile_serializer.save()
            return super().form_valid(form)
        else:
            return Response({"status": "error", "data": profile_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

#-----------------------------------------------
@csrf_exempt
@api_view(['POST'])
def login_auth_touriste(request):
    if request.user.is_authenticated:
        return redirect('touriste_home')  
    else:
        user = authenticate(request, backend='google-oauth2')
        if user is not None:
            login(request, user)

            serializer = UserSerializer(user)
            serialized_user = serializer.data

            return redirect('touriste_home')  
        else:
            return redirect('login')
        
#-----------------------------------------------
def login_view(request):
    return render(request,'login.html')
#-----------------------------------------------
def logout_view(request):
    logout(request)
    return redirect('login')
#-----------------------------------------------
@api_view(['GET'])
def touriste_home(request):
    # Get the authenticated user
    user = request.user

    serializer = UserSerializer(user)
    serialized_user = serializer.data

    return render(request, 'home_touriste.html', {'user': serialized_user})

#-----------------------------------------------
def first_page(request):
    return render(request, 'first_page.html')


#-----------------------------------------------
@api_view(['POST'])
@login_required(login_url='touriste_login')
def add_comment(request, site_id):
    site = get_object_or_404(Site, id=site_id)
    
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.site = site
            comment.user = request.user
            comment.save()

            serializer = CommentSerializer(comment)
            serialized_comment = serializer.data

            return redirect('site_detail', site_id=site_id)
    else:
        form = CommentForm()
    
    return render(request, 'add_comment.html', {'form': form, 'serialized_comment': serialized_comment})


#-----------------------------------------------
@api_view(['GET'])
@login_required(login_url='touriste_login')
def site_detail(request, site_id):
    site = get_object_or_404(Site, id=site_id)
    comments = site.comments.all()

   
    site_serializer = SiteSerializer(site)
    serialized_site = site_serializer.data

    comment_serializer = CommentSerializer(comments, many=True)
    serialized_comments = comment_serializer.data

    return render(request, 'site_detail.html', {'site': serialized_site, 'comments': serialized_comments})
#-----------------------------------------------
@api_view(['GET','POST'])
@login_required(login_url='touriste_login')
def add_favorite(request, site_id):
    user = request.user
    site = Site.objects.get(id=site_id)
    
    if Favorite.objects.filter(user=user, site=site).exists():
        return Response({"message": "Site already favorited."}, status=400)
    
    favorite = Favorite(user=user, site=site)
    favorite.save()
    
    return Response({"message": "Site favorited successfully."}, status=201)
#-----------------------------------------------
@api_view(['GET'])
@login_required(login_url='touriste_login')
def user_favorites(request):
    user = request.user
    favorites = Favorite.objects.filter(user=user)
    serializer = FavoriteSerializer(favorites, many=True)
    return Response(serializer.data)

#'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
#--------------------------------------------------------------------------

class RegionnalRegistrationView(CreateView):
    model = User
    template_name = 'registration.html'
    fields = ['username', 'password', 'email']
    success_url = reverse_lazy('Regionnal_home')

    def form_valid(self, form):
        user = form.save(commit=False)
        user.set_password(form.cleaned_data['password'])
        user.save()

        # Create a profile for the user
        profile_data = {'user': user, 'role': 'interface_regional'}
        profile_serializer = ProfileSerializer(data=profile_data)
        if profile_serializer.is_valid():
            profile_serializer.save()
            return super().form_valid(form)
        else:
            return Response({"status": "error", "data": profile_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

#-----------------------------------------------
@csrf_exempt
@api_view(['POST'])
def login_auth_Regionnal(request):
    if request.user.is_authenticated:
        return redirect('Regionnal_home')  
    else:
        user = authenticate(request, backend='google-oauth2')
        if user is not None:
            login(request, user)

            serializer = UserSerializer(user)
            serialized_user = serializer.data

            return redirect('Regionnal_home')  
        else:
            return redirect('login')
        

#-----------------------------------------------
@api_view(['GET'])
def Regionnal_home(request):
    # Get the authenticated user
    user = request.user

    serializer = UserSerializer(user)
    serialized_user = serializer.data

    return render(request, 'home_Regionnal.html', {'user': serialized_user})
#-----------------------------------------------
@api_view(['GET'])
@login_required(login_url='Regionnal_login')
def site_comment_list(request, site_id):
    if not request.user.is_authenticated:
        return redirect('login')

    regional = request.user

    if not hasattr(regional, 'region'):
        # When the employee doesn't have the 'region' attribute
        return HttpResponse("You don't have permission to access this page.")

    region = regional.region
    site = get_object_or_404(Site, id=site_id, region=region)
    comments = site.comments.all()

   
    site_serializer = SiteSerializer(site)
    comment_serializer = CommentSerializer(comments, many=True)

    serialized_site = site_serializer.data
    serialized_comments = comment_serializer.data
    serialized_region = region  # Include the region field directly in serialized data

    return render(request, 'site_comment_list.html', {'site': serialized_site, 'comments': serialized_comments, 'region': serialized_region})
#-----------------------------------------------
@api_view(['POST'])
@login_required(login_url='Regionnal_login')
def delete_comment(request, comment_id):
    comment = get_object_or_404(Comment, id=comment_id)
    comment.delete()
    return redirect('site_comment_list', site_id=comment.site_id)

#'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
#-----------------------------------------------------------------------

class AdminRegistrationView(CreateView):
    model = User
    template_name = 'registration.html'
    fields = ['username', 'password', 'email']
    success_url = reverse_lazy('Admin_home')

    def form_valid(self, form):
        user = form.save(commit=False)
        user.set_password(form.cleaned_data['password'])
        user.save()

        # Create a profile for the user
        profile_data = {'user': user, 'role': 'interface_admin_central'}
        profile_serializer = ProfileSerializer(data=profile_data)
        if profile_serializer.is_valid():
            profile_serializer.save()
            return super().form_valid(form)
        else:
            return Response({"status": "error", "data": profile_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

#-----------------------------------------------
@csrf_exempt
@api_view(['POST'])
def login_auth_Admin(request):
    if request.user.is_authenticated:
        return redirect('Admin_home')  
    else:
        user = authenticate(request, backend='google-oauth2')
        if user is not None:
            login(request, user)

            serializer = UserSerializer(user)
            serialized_user = serializer.data

            return redirect('Admin_home')  
        else:
            return redirect('login')
        

#-----------------------------------------------
@api_view(['GET'])
def Admin_home(request):
    # Get the authenticated user
    user = request.user

    serializer = UserSerializer(user)
    serialized_user = serializer.data

    return render(request, 'home_Admin.html', {'user': serialized_user})
#-----------------------------------------------

@api_view(['GET'])
@login_required(login_url='Admin_login')
def user_list(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return render(request, 'user_list.html', {'users': serializer.data})
#-----------------------------------------------
@api_view(['GET', 'POST'])
@login_required(login_url='Admin_login')
def user_delete(request, user_id):
    user = get_object_or_404(User, id=user_id)
    user.delete()
    redirect_url = reverse('user_list')
    return HttpResponseRedirect(redirect_url)
#-----------------------------------------------        
@api_view(['GET','POST'])
@login_required(login_url='Admin_login')
def Add_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return redirect('user_list')  
        else:
            return render(request, 'add_user.html', {'form': serializer}) 
    else:
        serializer = UserSerializer()
        return render(request, 'add_user.html', {'form': serializer}) 

#-----------------------------------------------  
@api_view(['GET', 'POST'])
@login_required(login_url='Admin_login')
def edit_user(request, user_id):
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        raise Http404
    
    if request.method == 'POST':
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return redirect('user_list')  
    else:
        serializer = UserSerializer(user)
    
    return render(request, 'edit_user.html', {'form': serializer, 'user_id': user_id})
